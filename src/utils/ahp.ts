function calculateAhpWeights(matrix: number[][]) {
  const size = matrix.length;
  if (!size || matrix.some((row) => row.length !== size)) {
    throw new Error("AHP matrix must be square");
  }

  const rowMeans = matrix.map((row) => {
    const product = row.reduce((acc, value) => acc * value, 1);
    return Math.pow(product, 1 / size);
  });

  const total = rowMeans.reduce((acc, value) => acc + value, 0);
  return rowMeans.map((value) => value / total);
}

export { calculateAhpWeights };
