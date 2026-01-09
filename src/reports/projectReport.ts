import ExcelJS from "exceljs";
import type { ProjectWithRelations } from "../services/project.service";
import colorsJson from "./colors.json";

type GenerateProjectReportOptions = {
  year?: number;
};

const colors = colorsJson.projectReport;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const BASE_FONT = {
  name: "Montserrat",
  size: 8,
} as const;

const MONTH_COLUMN_START = 9;

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((entry) => {
        if (typeof entry === "string") return entry;
        if (entry === null || entry === undefined) return "";
        return String(entry);
      })
      .filter(Boolean);
  }
  return [];
}

function toShortDate(value: Date | string): Date {
  return value instanceof Date ? value : new Date(value);
}

function formatStatus(value: string): string {
  return value
    .split("_")
    .map((token) => token.charAt(0) + token.slice(1).toLowerCase())
    .join(" ");
}

function projectCode(id: number): string {
  return `PRJ-${id.toString().padStart(4, "0")}`;
}

function completionAsRatio(value: unknown): number {
  const numeric = typeof value === "number" ? value : Number(value ?? 0);
  if (Number.isNaN(numeric)) {
    return 0;
  }
  return numeric / 100;
}

function toFirstName(fullName?: string | null) {
  if (!fullName) return "";
  const trimmed = fullName.trim();
  if (!trimmed) return "";
  const [first] = trimmed.split(/\s+/);
  return first ?? "";
}

function pickAssignments(project: ProjectWithRelations) {
  const lead = project.assignments.find(
    (assignment) => assignment.user?.projectRole === "TECH_LEAD",
  );
  const developerNames = project.assignments
    .filter((assignment) => assignment.user?.projectRole !== "TECH_LEAD")
    .map((assignment) => toFirstName(assignment.user?.fullName))
    .filter(Boolean);

  return {
    lead: lead?.user?.fullName ?? "",
    developers: developerNames.join(", "),
  };
}

function monthIndexesWithinYear(startDate: Date, endDate: Date, year: number): number[] {
  if (endDate < startDate) return [];

  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  if (endYear < year || startYear > year) {
    return [];
  }

  const fromMonth = startYear < year ? 0 : startDate.getMonth();
  const toMonth = endYear > year ? 11 : endDate.getMonth();

  return Array.from({ length: toMonth - fromMonth + 1 }, (_, idx) => fromMonth + idx);
}

function applyPhaseFill(row: ExcelJS.Row, phases: ProjectWithRelations["phases"], year: number) {
  const sortedPhases = [...phases].sort(
    (a, b) => toShortDate(a.startDate).getTime() - toShortDate(b.startDate).getTime(),
  );

  sortedPhases.forEach((phase, index) => {
    const start = toShortDate(phase.startDate);
    const end = toShortDate(phase.endDate);
    const monthIndexes = monthIndexesWithinYear(start, end, year);
    if (!monthIndexes.length) return;

    const color = colors.phasePalette[index % colors.phasePalette.length];

    monthIndexes.forEach((monthIdx) => {
      const cell = row.getCell(MONTH_COLUMN_START + monthIdx);
      cell.fill = {
        type: "pattern" as const,
        pattern: "solid" as const,
        fgColor: { argb: color },
      };
      cell.border = {
        top: { style: "thin", color: { argb: colors.grid } },
        left: { style: "thin", color: { argb: colors.grid } },
        bottom: { style: "thin", color: { argb: colors.grid } },
        right: { style: "thin", color: { argb: colors.grid } },
      };
    });
  });
}

const AUTO_FIT_COLUMNS = {
  CATEGORY: 3,
  PROJECT_NAME: 5,
  PROJECT_OWNER: 6,
  LEAD: 23,
  DEVELOPER: 24,
  NOTES: 25,
} as const;

function autofitColumn(
  worksheet: ExcelJS.Worksheet,
  colIndex: number,
  options?: { max?: number; min?: number },
) {
  const column = worksheet.getColumn(colIndex);
  let maxLength = 10;

  column.eachCell({ includeEmpty: false }, (cell) => {
    let rawValue = cell.value;

    if (rawValue instanceof Date) {
      rawValue = rawValue.toLocaleDateString();
    } else if (typeof rawValue !== "string") {
      rawValue = String(rawValue ?? "");
    }

    const textLength = rawValue.length;
    maxLength = Math.max(maxLength, textLength);
  });

  let computedWidth;
  if (maxLength > 40) {
    computedWidth = maxLength * 0.8 + 1;
  } else {
    computedWidth = maxLength + 1;
  }

  if (options?.max) computedWidth = Math.min(computedWidth, options.max);
  if (options?.min) computedWidth = Math.max(computedWidth, options.min);

  column.width = computedWidth;
}

async function generateProjectReport(
  projects: ProjectWithRelations[],
  options: GenerateProjectReportOptions = {},
) {
  const workbook = new ExcelJS.Workbook();
  workbook.created = new Date();
  workbook.modified = new Date();
  const worksheet = workbook.addWorksheet("Projects");

  worksheet.properties.defaultRowHeight = 18;

  worksheet.columns = [
    { width: 4 }, // padding
    { width: 5 }, // No
    { width: 18 }, // Category
    { width: 16 }, // ID #
    { width: 50 }, // Project Name
    { width: 24 }, // Project Owner
    { width: 14 }, // Start
    { width: 14 }, // Finish
    ...MONTHS.map(() => ({ width: 6 })), // Timeline months
    { width: 16 }, // Project Status
    { width: 14 }, // % Completion
    { width: 22 }, // Lead
    { width: 22 }, // Developer
    { width: 36 }, // Notes
  ];

  const totalColumns = worksheet.columns.length;
  worksheet.addRow(new Array(totalColumns).fill(null));
  const headerValues = [
    "",
    "No",
    "Category",
    "ID #",
    "Project Name",
    "Project Owner",
    "Start",
    "Finish",
    ...MONTHS,
    "Project Status",
    "% Completion",
    "Lead",
    "Developer",
    "Notes",
  ];

  const headerFill = {
    type: "pattern" as const,
    pattern: "solid" as const,
    fgColor: { argb: colors.navy },
  };

  const timelineYear = options.year ?? new Date().getFullYear();

  const topHeaderRow = worksheet.addRow(new Array(totalColumns).fill(""));
  const monthHeaderRow = worksheet.addRow(new Array(totalColumns).fill(""));
  topHeaderRow.height = 24;
  monthHeaderRow.height = 20;

  [topHeaderRow, monthHeaderRow].forEach((row) => {
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      if (colNumber === 1) {
        cell.value = "";
        return;
      }
      cell.fill = headerFill;
      cell.font = { ...BASE_FONT, bold: true, color: { argb: colors.text } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      cell.border = {
        top: { style: "thin", color: { argb: colors.text } },
        left: { style: "thin", color: { argb: colors.text } },
        bottom: { style: "thin", color: { argb: colors.text } },
        right: { style: "thin", color: { argb: colors.text } },
      };
    });
  });

  headerValues.forEach((value, index) => {
    const columnIndex = index + 1;
    if (columnIndex === 1) {
      return;
    }
    const isMonthColumn =
      columnIndex >= MONTH_COLUMN_START && columnIndex < MONTH_COLUMN_START + MONTHS.length;

    if (isMonthColumn) {
      if (columnIndex === MONTH_COLUMN_START) {
        worksheet.mergeCells(
          topHeaderRow.number,
          MONTH_COLUMN_START,
          topHeaderRow.number,
          MONTH_COLUMN_START + MONTHS.length - 1,
        );
        const cell = worksheet.getCell(topHeaderRow.number, MONTH_COLUMN_START);
        cell.value = timelineYear.toString();
        cell.alignment = { horizontal: "center", vertical: "middle" };
      }
      const monthCell = worksheet.getCell(monthHeaderRow.number, columnIndex);
      monthCell.value = MONTHS[columnIndex - MONTH_COLUMN_START];
      monthCell.alignment = { horizontal: "center", vertical: "middle" };
    } else {
      worksheet.mergeCells(topHeaderRow.number, columnIndex, monthHeaderRow.number, columnIndex);
      const cell = worksheet.getCell(topHeaderRow.number, columnIndex);
      cell.value = value;
      cell.alignment = { horizontal: "center", vertical: "middle" };
    }
  });

  const separatorRow = worksheet.addRow(new Array(totalColumns).fill(null));
  separatorRow.height = 24;
  separatorRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (colNumber === 1) {
      return;
    }
    cell.fill = {
      type: "pattern" as const,
      pattern: "solid" as const,
      fgColor: { argb: colors.orange },
      bgColor: { argb: colors.orange },
    };
    cell.border = {
      bottom: { style: "thin", color: { argb: colors.navy } },
    };
  });

  worksheet.getColumn(7).numFmt = "d-mmm-yy";
  worksheet.getColumn(8).numFmt = "d-mmm-yy";
  worksheet.getColumn(21).alignment = {
    horizontal: "center",
    vertical: "middle",
  };
  worksheet.getColumn(22).numFmt = "0%";
  worksheet.getColumn(22).alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  projects.forEach((project, index) => {
    const categories = asStringArray(project.categories);
    const category = categories.join(", ");
    const { lead, developers } = pickAssignments(project);

    const monthPlaceholders = Array(MONTHS.length).fill("");

    const row = worksheet.addRow([
      "",
      index + 1,
      category,
      projectCode(project.id),
      project.name,
      project.owner?.name ?? "",
      toShortDate(project.startDate),
      toShortDate(project.endDate),
      ...monthPlaceholders,
      formatStatus(project.status),
      completionAsRatio(project.completion),
      lead,
      developers,
      project.notes ?? "",
    ]);

    row.height = 24;
    row.eachCell((cell) => {
      cell.alignment = {
        horizontal: "center",
        vertical: "middle",
        wrapText: false,
      };
      cell.font = { ...BASE_FONT };
    });

    applyPhaseFill(row, project.phases, timelineYear);
  });

  Object.values(AUTO_FIT_COLUMNS).forEach((col) => {
    autofitColumn(worksheet, col);
  });

  return workbook;
}

export { generateProjectReport };
