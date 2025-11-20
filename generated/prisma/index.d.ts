
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProjectOwner
 * 
 */
export type ProjectOwner = $Result.DefaultSelection<Prisma.$ProjectOwnerPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectAssignment
 * 
 */
export type ProjectAssignment = $Result.DefaultSelection<Prisma.$ProjectAssignmentPayload>
/**
 * Model ProjectPhase
 * 
 */
export type ProjectPhase = $Result.DefaultSelection<Prisma.$ProjectPhasePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketAssignee
 * 
 */
export type TicketAssignee = $Result.DefaultSelection<Prisma.$TicketAssigneePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleType: {
  ADMIN: 'ADMIN',
  PROJECT_MANAGER: 'PROJECT_MANAGER',
  DEVELOPER: 'DEVELOPER'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const ProjectRoleType: {
  TECH_LEAD: 'TECH_LEAD',
  FRONT_END: 'FRONT_END',
  BACK_END: 'BACK_END',
  DEVOPS: 'DEVOPS',
  CLOUD_ENGINEER: 'CLOUD_ENGINEER'
};

export type ProjectRoleType = (typeof ProjectRoleType)[keyof typeof ProjectRoleType]


export const ProjectStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  ON_HOLD: 'ON_HOLD',
  DONE: 'DONE'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const NotifyStatusType: {
  SENT: 'SENT',
  PENDING: 'PENDING',
  FAILED: 'FAILED'
};

export type NotifyStatusType = (typeof NotifyStatusType)[keyof typeof NotifyStatusType]


export const TicketType: {
  ISSUE: 'ISSUE',
  TASK: 'TASK'
};

export type TicketType = (typeof TicketType)[keyof typeof TicketType]


export const TicketStatus: {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_REVIEW: 'IN_REVIEW',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED',
  TO_DO: 'TO_DO',
  DONE: 'DONE'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const ActivityTargetType: {
  USER: 'USER',
  PROJECT: 'PROJECT',
  TICKET: 'TICKET',
  COMMENT: 'COMMENT',
  ATTACHMENT: 'ATTACHMENT',
  NOTIFICATION: 'NOTIFICATION',
  PROJECT_PHASE: 'PROJECT_PHASE',
  PROJECT_ASSIGNMENT: 'PROJECT_ASSIGNMENT',
  PROJECT_OWNER: 'PROJECT_OWNER'
};

export type ActivityTargetType = (typeof ActivityTargetType)[keyof typeof ActivityTargetType]


export const NotificationTargetType: {
  PROJECT: 'PROJECT',
  TICKET: 'TICKET',
  COMMENT: 'COMMENT'
};

export type NotificationTargetType = (typeof NotificationTargetType)[keyof typeof NotificationTargetType]


export const NotificationState: {
  UNREAD: 'UNREAD',
  READ: 'READ'
};

export type NotificationState = (typeof NotificationState)[keyof typeof NotificationState]

}

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

export type ProjectRoleType = $Enums.ProjectRoleType

export const ProjectRoleType: typeof $Enums.ProjectRoleType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type NotifyStatusType = $Enums.NotifyStatusType

export const NotifyStatusType: typeof $Enums.NotifyStatusType

export type TicketType = $Enums.TicketType

export const TicketType: typeof $Enums.TicketType

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type ActivityTargetType = $Enums.ActivityTargetType

export const ActivityTargetType: typeof $Enums.ActivityTargetType

export type NotificationTargetType = $Enums.NotificationTargetType

export const NotificationTargetType: typeof $Enums.NotificationTargetType

export type NotificationState = $Enums.NotificationState

export const NotificationState: typeof $Enums.NotificationState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectOwner`: Exposes CRUD operations for the **ProjectOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectOwners
    * const projectOwners = await prisma.projectOwner.findMany()
    * ```
    */
  get projectOwner(): Prisma.ProjectOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectAssignment`: Exposes CRUD operations for the **ProjectAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAssignments
    * const projectAssignments = await prisma.projectAssignment.findMany()
    * ```
    */
  get projectAssignment(): Prisma.ProjectAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectPhase`: Exposes CRUD operations for the **ProjectPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPhases
    * const projectPhases = await prisma.projectPhase.findMany()
    * ```
    */
  get projectPhase(): Prisma.ProjectPhaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAssignee`: Exposes CRUD operations for the **TicketAssignee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAssignees
    * const ticketAssignees = await prisma.ticketAssignee.findMany()
    * ```
    */
  get ticketAssignee(): Prisma.TicketAssigneeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ProjectOwner: 'ProjectOwner',
    Project: 'Project',
    ProjectAssignment: 'ProjectAssignment',
    ProjectPhase: 'ProjectPhase',
    Ticket: 'Ticket',
    TicketAssignee: 'TicketAssignee',
    Comment: 'Comment',
    Attachment: 'Attachment',
    Notification: 'Notification',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "projectOwner" | "project" | "projectAssignment" | "projectPhase" | "ticket" | "ticketAssignee" | "comment" | "attachment" | "notification" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProjectOwner: {
        payload: Prisma.$ProjectOwnerPayload<ExtArgs>
        fields: Prisma.ProjectOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          findFirst: {
            args: Prisma.ProjectOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          findMany: {
            args: Prisma.ProjectOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>[]
          }
          create: {
            args: Prisma.ProjectOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          createMany: {
            args: Prisma.ProjectOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>[]
          }
          delete: {
            args: Prisma.ProjectOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          update: {
            args: Prisma.ProjectOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          deleteMany: {
            args: Prisma.ProjectOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectOwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>[]
          }
          upsert: {
            args: Prisma.ProjectOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectOwnerPayload>
          }
          aggregate: {
            args: Prisma.ProjectOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectOwner>
          }
          groupBy: {
            args: Prisma.ProjectOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectOwnerCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectAssignment: {
        payload: Prisma.$ProjectAssignmentPayload<ExtArgs>
        fields: Prisma.ProjectAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ProjectAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          findMany: {
            args: Prisma.ProjectAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>[]
          }
          create: {
            args: Prisma.ProjectAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          createMany: {
            args: Prisma.ProjectAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ProjectAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          update: {
            args: Prisma.ProjectAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ProjectAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ProjectAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAssignment>
          }
          groupBy: {
            args: Prisma.ProjectAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssignmentCountAggregateOutputType> | number
          }
        }
      }
      ProjectPhase: {
        payload: Prisma.$ProjectPhasePayload<ExtArgs>
        fields: Prisma.ProjectPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findFirst: {
            args: Prisma.ProjectPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findMany: {
            args: Prisma.ProjectPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          create: {
            args: Prisma.ProjectPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          createMany: {
            args: Prisma.ProjectPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          delete: {
            args: Prisma.ProjectPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          update: {
            args: Prisma.ProjectPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          deleteMany: {
            args: Prisma.ProjectPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          upsert: {
            args: Prisma.ProjectPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          aggregate: {
            args: Prisma.ProjectPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPhase>
          }
          groupBy: {
            args: Prisma.ProjectPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketAssignee: {
        payload: Prisma.$TicketAssigneePayload<ExtArgs>
        fields: Prisma.TicketAssigneeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAssigneeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAssigneeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          findFirst: {
            args: Prisma.TicketAssigneeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAssigneeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          findMany: {
            args: Prisma.TicketAssigneeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>[]
          }
          create: {
            args: Prisma.TicketAssigneeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          createMany: {
            args: Prisma.TicketAssigneeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAssigneeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>[]
          }
          delete: {
            args: Prisma.TicketAssigneeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          update: {
            args: Prisma.TicketAssigneeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          deleteMany: {
            args: Prisma.TicketAssigneeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAssigneeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketAssigneeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>[]
          }
          upsert: {
            args: Prisma.TicketAssigneeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssigneePayload>
          }
          aggregate: {
            args: Prisma.TicketAssigneeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAssignee>
          }
          groupBy: {
            args: Prisma.TicketAssigneeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAssigneeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAssigneeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAssigneeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    projectOwner?: ProjectOwnerOmit
    project?: ProjectOmit
    projectAssignment?: ProjectAssignmentOmit
    projectPhase?: ProjectPhaseOmit
    ticket?: TicketOmit
    ticketAssignee?: TicketAssigneeOmit
    comment?: CommentOmit
    attachment?: AttachmentOmit
    notification?: NotificationOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projectAssignments: number
    requestedTickets: number
    ticketAssignees: number
    comments: number
    attachments: number
    notifications: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectAssignments?: boolean | UserCountOutputTypeCountProjectAssignmentsArgs
    requestedTickets?: boolean | UserCountOutputTypeCountRequestedTicketsArgs
    ticketAssignees?: boolean | UserCountOutputTypeCountTicketAssigneesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    attachments?: boolean | UserCountOutputTypeCountAttachmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssigneeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type ProjectOwnerCountOutputType
   */

  export type ProjectOwnerCountOutputType = {
    projects: number
  }

  export type ProjectOwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectOwnerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectOwnerCountOutputType without action
   */
  export type ProjectOwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwnerCountOutputType
     */
    select?: ProjectOwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectOwnerCountOutputType without action
   */
  export type ProjectOwnerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    assignments: number
    phases: number
    tickets: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ProjectCountOutputTypeCountAssignmentsArgs
    phases?: boolean | ProjectCountOutputTypeCountPhasesArgs
    tickets?: boolean | ProjectCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssignmentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    assignees: number
    comments: number
    attachments: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignees?: boolean | TicketCountOutputTypeCountAssigneesArgs
    comments?: boolean | TicketCountOutputTypeCountCommentsArgs
    attachments?: boolean | TicketCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssigneeWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.RoleType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.RoleType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectAssignments?: boolean | User$projectAssignmentsArgs<ExtArgs>
    requestedTickets?: boolean | User$requestedTicketsArgs<ExtArgs>
    ticketAssignees?: boolean | User$ticketAssigneesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    attachments?: boolean | User$attachmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectAssignments?: boolean | User$projectAssignmentsArgs<ExtArgs>
    requestedTickets?: boolean | User$requestedTicketsArgs<ExtArgs>
    ticketAssignees?: boolean | User$ticketAssigneesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    attachments?: boolean | User$attachmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projectAssignments: Prisma.$ProjectAssignmentPayload<ExtArgs>[]
      requestedTickets: Prisma.$TicketPayload<ExtArgs>[]
      ticketAssignees: Prisma.$TicketAssigneePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      passwordHash: string
      role: $Enums.RoleType
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectAssignments<T extends User$projectAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestedTickets<T extends User$requestedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketAssignees<T extends User$ticketAssigneesArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketAssigneesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends User$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleType'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projectAssignments
   */
  export type User$projectAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    where?: ProjectAssignmentWhereInput
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    cursor?: ProjectAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssignmentScalarFieldEnum | ProjectAssignmentScalarFieldEnum[]
  }

  /**
   * User.requestedTickets
   */
  export type User$requestedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.ticketAssignees
   */
  export type User$ticketAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    where?: TicketAssigneeWhereInput
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    cursor?: TicketAssigneeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssigneeScalarFieldEnum | TicketAssigneeScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.attachments
   */
  export type User$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProjectOwner
   */

  export type AggregateProjectOwner = {
    _count: ProjectOwnerCountAggregateOutputType | null
    _avg: ProjectOwnerAvgAggregateOutputType | null
    _sum: ProjectOwnerSumAggregateOutputType | null
    _min: ProjectOwnerMinAggregateOutputType | null
    _max: ProjectOwnerMaxAggregateOutputType | null
  }

  export type ProjectOwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectOwnerSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectOwnerMinAggregateOutputType = {
    id: number | null
    name: string | null
    company: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectOwnerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    company: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectOwnerCountAggregateOutputType = {
    id: number
    name: number
    company: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectOwnerAvgAggregateInputType = {
    id?: true
  }

  export type ProjectOwnerSumAggregateInputType = {
    id?: true
  }

  export type ProjectOwnerMinAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectOwnerMaxAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectOwnerCountAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectOwner to aggregate.
     */
    where?: ProjectOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectOwners to fetch.
     */
    orderBy?: ProjectOwnerOrderByWithRelationInput | ProjectOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectOwners
    **/
    _count?: true | ProjectOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectOwnerMaxAggregateInputType
  }

  export type GetProjectOwnerAggregateType<T extends ProjectOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectOwner[P]>
      : GetScalarType<T[P], AggregateProjectOwner[P]>
  }




  export type ProjectOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectOwnerWhereInput
    orderBy?: ProjectOwnerOrderByWithAggregationInput | ProjectOwnerOrderByWithAggregationInput[]
    by: ProjectOwnerScalarFieldEnum[] | ProjectOwnerScalarFieldEnum
    having?: ProjectOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectOwnerCountAggregateInputType | true
    _avg?: ProjectOwnerAvgAggregateInputType
    _sum?: ProjectOwnerSumAggregateInputType
    _min?: ProjectOwnerMinAggregateInputType
    _max?: ProjectOwnerMaxAggregateInputType
  }

  export type ProjectOwnerGroupByOutputType = {
    id: number
    name: string
    company: string | null
    email: string
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectOwnerCountAggregateOutputType | null
    _avg: ProjectOwnerAvgAggregateOutputType | null
    _sum: ProjectOwnerSumAggregateOutputType | null
    _min: ProjectOwnerMinAggregateOutputType | null
    _max: ProjectOwnerMaxAggregateOutputType | null
  }

  type GetProjectOwnerGroupByPayload<T extends ProjectOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectOwnerGroupByOutputType[P]>
        }
      >
    >


  export type ProjectOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | ProjectOwner$projectsArgs<ExtArgs>
    _count?: boolean | ProjectOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectOwner"]>

  export type ProjectOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectOwner"]>

  export type ProjectOwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectOwner"]>

  export type ProjectOwnerSelectScalar = {
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "company" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["projectOwner"]>
  export type ProjectOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectOwner$projectsArgs<ExtArgs>
    _count?: boolean | ProjectOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectOwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectOwner"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      company: string | null
      email: string
      phone: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectOwner"]>
    composites: {}
  }

  type ProjectOwnerGetPayload<S extends boolean | null | undefined | ProjectOwnerDefaultArgs> = $Result.GetResult<Prisma.$ProjectOwnerPayload, S>

  type ProjectOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectOwnerCountAggregateInputType | true
    }

  export interface ProjectOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectOwner'], meta: { name: 'ProjectOwner' } }
    /**
     * Find zero or one ProjectOwner that matches the filter.
     * @param {ProjectOwnerFindUniqueArgs} args - Arguments to find a ProjectOwner
     * @example
     * // Get one ProjectOwner
     * const projectOwner = await prisma.projectOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectOwnerFindUniqueArgs>(args: SelectSubset<T, ProjectOwnerFindUniqueArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectOwnerFindUniqueOrThrowArgs} args - Arguments to find a ProjectOwner
     * @example
     * // Get one ProjectOwner
     * const projectOwner = await prisma.projectOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerFindFirstArgs} args - Arguments to find a ProjectOwner
     * @example
     * // Get one ProjectOwner
     * const projectOwner = await prisma.projectOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectOwnerFindFirstArgs>(args?: SelectSubset<T, ProjectOwnerFindFirstArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerFindFirstOrThrowArgs} args - Arguments to find a ProjectOwner
     * @example
     * // Get one ProjectOwner
     * const projectOwner = await prisma.projectOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectOwners
     * const projectOwners = await prisma.projectOwner.findMany()
     * 
     * // Get first 10 ProjectOwners
     * const projectOwners = await prisma.projectOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectOwnerWithIdOnly = await prisma.projectOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectOwnerFindManyArgs>(args?: SelectSubset<T, ProjectOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectOwner.
     * @param {ProjectOwnerCreateArgs} args - Arguments to create a ProjectOwner.
     * @example
     * // Create one ProjectOwner
     * const ProjectOwner = await prisma.projectOwner.create({
     *   data: {
     *     // ... data to create a ProjectOwner
     *   }
     * })
     * 
     */
    create<T extends ProjectOwnerCreateArgs>(args: SelectSubset<T, ProjectOwnerCreateArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectOwners.
     * @param {ProjectOwnerCreateManyArgs} args - Arguments to create many ProjectOwners.
     * @example
     * // Create many ProjectOwners
     * const projectOwner = await prisma.projectOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectOwnerCreateManyArgs>(args?: SelectSubset<T, ProjectOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectOwners and returns the data saved in the database.
     * @param {ProjectOwnerCreateManyAndReturnArgs} args - Arguments to create many ProjectOwners.
     * @example
     * // Create many ProjectOwners
     * const projectOwner = await prisma.projectOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectOwners and only return the `id`
     * const projectOwnerWithIdOnly = await prisma.projectOwner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectOwner.
     * @param {ProjectOwnerDeleteArgs} args - Arguments to delete one ProjectOwner.
     * @example
     * // Delete one ProjectOwner
     * const ProjectOwner = await prisma.projectOwner.delete({
     *   where: {
     *     // ... filter to delete one ProjectOwner
     *   }
     * })
     * 
     */
    delete<T extends ProjectOwnerDeleteArgs>(args: SelectSubset<T, ProjectOwnerDeleteArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectOwner.
     * @param {ProjectOwnerUpdateArgs} args - Arguments to update one ProjectOwner.
     * @example
     * // Update one ProjectOwner
     * const projectOwner = await prisma.projectOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectOwnerUpdateArgs>(args: SelectSubset<T, ProjectOwnerUpdateArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectOwners.
     * @param {ProjectOwnerDeleteManyArgs} args - Arguments to filter ProjectOwners to delete.
     * @example
     * // Delete a few ProjectOwners
     * const { count } = await prisma.projectOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectOwnerDeleteManyArgs>(args?: SelectSubset<T, ProjectOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectOwners
     * const projectOwner = await prisma.projectOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectOwnerUpdateManyArgs>(args: SelectSubset<T, ProjectOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectOwners and returns the data updated in the database.
     * @param {ProjectOwnerUpdateManyAndReturnArgs} args - Arguments to update many ProjectOwners.
     * @example
     * // Update many ProjectOwners
     * const projectOwner = await prisma.projectOwner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectOwners and only return the `id`
     * const projectOwnerWithIdOnly = await prisma.projectOwner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectOwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectOwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectOwner.
     * @param {ProjectOwnerUpsertArgs} args - Arguments to update or create a ProjectOwner.
     * @example
     * // Update or create a ProjectOwner
     * const projectOwner = await prisma.projectOwner.upsert({
     *   create: {
     *     // ... data to create a ProjectOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectOwner we want to update
     *   }
     * })
     */
    upsert<T extends ProjectOwnerUpsertArgs>(args: SelectSubset<T, ProjectOwnerUpsertArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerCountArgs} args - Arguments to filter ProjectOwners to count.
     * @example
     * // Count the number of ProjectOwners
     * const count = await prisma.projectOwner.count({
     *   where: {
     *     // ... the filter for the ProjectOwners we want to count
     *   }
     * })
    **/
    count<T extends ProjectOwnerCountArgs>(
      args?: Subset<T, ProjectOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectOwnerAggregateArgs>(args: Subset<T, ProjectOwnerAggregateArgs>): Prisma.PrismaPromise<GetProjectOwnerAggregateType<T>>

    /**
     * Group by ProjectOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectOwnerGroupByArgs['orderBy'] }
        : { orderBy?: ProjectOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectOwner model
   */
  readonly fields: ProjectOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends ProjectOwner$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectOwner$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectOwner model
   */
  interface ProjectOwnerFieldRefs {
    readonly id: FieldRef<"ProjectOwner", 'Int'>
    readonly name: FieldRef<"ProjectOwner", 'String'>
    readonly company: FieldRef<"ProjectOwner", 'String'>
    readonly email: FieldRef<"ProjectOwner", 'String'>
    readonly phone: FieldRef<"ProjectOwner", 'String'>
    readonly address: FieldRef<"ProjectOwner", 'String'>
    readonly createdAt: FieldRef<"ProjectOwner", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectOwner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectOwner findUnique
   */
  export type ProjectOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectOwner to fetch.
     */
    where: ProjectOwnerWhereUniqueInput
  }

  /**
   * ProjectOwner findUniqueOrThrow
   */
  export type ProjectOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectOwner to fetch.
     */
    where: ProjectOwnerWhereUniqueInput
  }

  /**
   * ProjectOwner findFirst
   */
  export type ProjectOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectOwner to fetch.
     */
    where?: ProjectOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectOwners to fetch.
     */
    orderBy?: ProjectOwnerOrderByWithRelationInput | ProjectOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectOwners.
     */
    cursor?: ProjectOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectOwners.
     */
    distinct?: ProjectOwnerScalarFieldEnum | ProjectOwnerScalarFieldEnum[]
  }

  /**
   * ProjectOwner findFirstOrThrow
   */
  export type ProjectOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectOwner to fetch.
     */
    where?: ProjectOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectOwners to fetch.
     */
    orderBy?: ProjectOwnerOrderByWithRelationInput | ProjectOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectOwners.
     */
    cursor?: ProjectOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectOwners.
     */
    distinct?: ProjectOwnerScalarFieldEnum | ProjectOwnerScalarFieldEnum[]
  }

  /**
   * ProjectOwner findMany
   */
  export type ProjectOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectOwners to fetch.
     */
    where?: ProjectOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectOwners to fetch.
     */
    orderBy?: ProjectOwnerOrderByWithRelationInput | ProjectOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectOwners.
     */
    cursor?: ProjectOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectOwners.
     */
    skip?: number
    distinct?: ProjectOwnerScalarFieldEnum | ProjectOwnerScalarFieldEnum[]
  }

  /**
   * ProjectOwner create
   */
  export type ProjectOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectOwner.
     */
    data: XOR<ProjectOwnerCreateInput, ProjectOwnerUncheckedCreateInput>
  }

  /**
   * ProjectOwner createMany
   */
  export type ProjectOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectOwners.
     */
    data: ProjectOwnerCreateManyInput | ProjectOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectOwner createManyAndReturn
   */
  export type ProjectOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectOwners.
     */
    data: ProjectOwnerCreateManyInput | ProjectOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectOwner update
   */
  export type ProjectOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectOwner.
     */
    data: XOR<ProjectOwnerUpdateInput, ProjectOwnerUncheckedUpdateInput>
    /**
     * Choose, which ProjectOwner to update.
     */
    where: ProjectOwnerWhereUniqueInput
  }

  /**
   * ProjectOwner updateMany
   */
  export type ProjectOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectOwners.
     */
    data: XOR<ProjectOwnerUpdateManyMutationInput, ProjectOwnerUncheckedUpdateManyInput>
    /**
     * Filter which ProjectOwners to update
     */
    where?: ProjectOwnerWhereInput
    /**
     * Limit how many ProjectOwners to update.
     */
    limit?: number
  }

  /**
   * ProjectOwner updateManyAndReturn
   */
  export type ProjectOwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * The data used to update ProjectOwners.
     */
    data: XOR<ProjectOwnerUpdateManyMutationInput, ProjectOwnerUncheckedUpdateManyInput>
    /**
     * Filter which ProjectOwners to update
     */
    where?: ProjectOwnerWhereInput
    /**
     * Limit how many ProjectOwners to update.
     */
    limit?: number
  }

  /**
   * ProjectOwner upsert
   */
  export type ProjectOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectOwner to update in case it exists.
     */
    where: ProjectOwnerWhereUniqueInput
    /**
     * In case the ProjectOwner found by the `where` argument doesn't exist, create a new ProjectOwner with this data.
     */
    create: XOR<ProjectOwnerCreateInput, ProjectOwnerUncheckedCreateInput>
    /**
     * In case the ProjectOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectOwnerUpdateInput, ProjectOwnerUncheckedUpdateInput>
  }

  /**
   * ProjectOwner delete
   */
  export type ProjectOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
    /**
     * Filter which ProjectOwner to delete.
     */
    where: ProjectOwnerWhereUniqueInput
  }

  /**
   * ProjectOwner deleteMany
   */
  export type ProjectOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectOwners to delete
     */
    where?: ProjectOwnerWhereInput
    /**
     * Limit how many ProjectOwners to delete.
     */
    limit?: number
  }

  /**
   * ProjectOwner.projects
   */
  export type ProjectOwner$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectOwner without action
   */
  export type ProjectOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectOwner
     */
    select?: ProjectOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectOwner
     */
    omit?: ProjectOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectOwnerInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    completion: Decimal | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    completion: Decimal | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.ProjectStatus | null
    completion: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.ProjectStatus | null
    completion: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    categories: number
    ownerId: number
    startDate: number
    endDate: number
    status: number
    completion: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    ownerId?: true
    completion?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    ownerId?: true
    completion?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    startDate?: true
    endDate?: true
    status?: true
    completion?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    startDate?: true
    endDate?: true
    status?: true
    completion?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    ownerId?: true
    startDate?: true
    endDate?: true
    status?: true
    completion?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    categories: JsonValue
    ownerId: number
    startDate: Date
    endDate: Date
    status: $Enums.ProjectStatus
    completion: Decimal
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    ownerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    completion?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
    assignments?: boolean | Project$assignmentsArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    tickets?: boolean | Project$ticketsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    ownerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    completion?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    ownerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    completion?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    categories?: boolean
    ownerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    completion?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categories" | "ownerId" | "startDate" | "endDate" | "status" | "completion" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
    assignments?: boolean | Project$assignmentsArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    tickets?: boolean | Project$ticketsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProjectOwnerDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$ProjectOwnerPayload<ExtArgs>
      assignments: Prisma.$ProjectAssignmentPayload<ExtArgs>[]
      phases: Prisma.$ProjectPhasePayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categories: Prisma.JsonValue
      ownerId: number
      startDate: Date
      endDate: Date
      status: $Enums.ProjectStatus
      completion: Prisma.Decimal
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ProjectOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectOwnerDefaultArgs<ExtArgs>>): Prisma__ProjectOwnerClient<$Result.GetResult<Prisma.$ProjectOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Project$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phases<T extends Project$phasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Project$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Project$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly categories: FieldRef<"Project", 'Json'>
    readonly ownerId: FieldRef<"Project", 'Int'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly completion: FieldRef<"Project", 'Decimal'>
    readonly notes: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.assignments
   */
  export type Project$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    where?: ProjectAssignmentWhereInput
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    cursor?: ProjectAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssignmentScalarFieldEnum | ProjectAssignmentScalarFieldEnum[]
  }

  /**
   * Project.phases
   */
  export type Project$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    cursor?: ProjectPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * Project.tickets
   */
  export type Project$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectAssignment
   */

  export type AggregateProjectAssignment = {
    _count: ProjectAssignmentCountAggregateOutputType | null
    _avg: ProjectAssignmentAvgAggregateOutputType | null
    _sum: ProjectAssignmentSumAggregateOutputType | null
    _min: ProjectAssignmentMinAggregateOutputType | null
    _max: ProjectAssignmentMaxAggregateOutputType | null
  }

  export type ProjectAssignmentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectAssignmentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectAssignmentMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleInProject: $Enums.ProjectRoleType | null
    assignedAt: Date | null
  }

  export type ProjectAssignmentMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleInProject: $Enums.ProjectRoleType | null
    assignedAt: Date | null
  }

  export type ProjectAssignmentCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    roleInProject: number
    assignedAt: number
    _all: number
  }


  export type ProjectAssignmentAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectAssignmentSumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectAssignmentMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleInProject?: true
    assignedAt?: true
  }

  export type ProjectAssignmentMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleInProject?: true
    assignedAt?: true
  }

  export type ProjectAssignmentCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleInProject?: true
    assignedAt?: true
    _all?: true
  }

  export type ProjectAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAssignment to aggregate.
     */
    where?: ProjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssignments to fetch.
     */
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAssignments
    **/
    _count?: true | ProjectAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAssignmentMaxAggregateInputType
  }

  export type GetProjectAssignmentAggregateType<T extends ProjectAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAssignment[P]>
      : GetScalarType<T[P], AggregateProjectAssignment[P]>
  }




  export type ProjectAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssignmentWhereInput
    orderBy?: ProjectAssignmentOrderByWithAggregationInput | ProjectAssignmentOrderByWithAggregationInput[]
    by: ProjectAssignmentScalarFieldEnum[] | ProjectAssignmentScalarFieldEnum
    having?: ProjectAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAssignmentCountAggregateInputType | true
    _avg?: ProjectAssignmentAvgAggregateInputType
    _sum?: ProjectAssignmentSumAggregateInputType
    _min?: ProjectAssignmentMinAggregateInputType
    _max?: ProjectAssignmentMaxAggregateInputType
  }

  export type ProjectAssignmentGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt: Date
    _count: ProjectAssignmentCountAggregateOutputType | null
    _avg: ProjectAssignmentAvgAggregateOutputType | null
    _sum: ProjectAssignmentSumAggregateOutputType | null
    _min: ProjectAssignmentMinAggregateOutputType | null
    _max: ProjectAssignmentMaxAggregateOutputType | null
  }

  type GetProjectAssignmentGroupByPayload<T extends ProjectAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleInProject?: boolean
    assignedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAssignment"]>

  export type ProjectAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleInProject?: boolean
    assignedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAssignment"]>

  export type ProjectAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleInProject?: boolean
    assignedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAssignment"]>

  export type ProjectAssignmentSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleInProject?: boolean
    assignedAt?: boolean
  }

  export type ProjectAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "roleInProject" | "assignedAt", ExtArgs["result"]["projectAssignment"]>
  export type ProjectAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAssignment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      roleInProject: $Enums.ProjectRoleType
      assignedAt: Date
    }, ExtArgs["result"]["projectAssignment"]>
    composites: {}
  }

  type ProjectAssignmentGetPayload<S extends boolean | null | undefined | ProjectAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ProjectAssignmentPayload, S>

  type ProjectAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAssignmentCountAggregateInputType | true
    }

  export interface ProjectAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAssignment'], meta: { name: 'ProjectAssignment' } }
    /**
     * Find zero or one ProjectAssignment that matches the filter.
     * @param {ProjectAssignmentFindUniqueArgs} args - Arguments to find a ProjectAssignment
     * @example
     * // Get one ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAssignmentFindUniqueArgs>(args: SelectSubset<T, ProjectAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ProjectAssignment
     * @example
     * // Get one ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentFindFirstArgs} args - Arguments to find a ProjectAssignment
     * @example
     * // Get one ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAssignmentFindFirstArgs>(args?: SelectSubset<T, ProjectAssignmentFindFirstArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentFindFirstOrThrowArgs} args - Arguments to find a ProjectAssignment
     * @example
     * // Get one ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAssignments
     * const projectAssignments = await prisma.projectAssignment.findMany()
     * 
     * // Get first 10 ProjectAssignments
     * const projectAssignments = await prisma.projectAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAssignmentWithIdOnly = await prisma.projectAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAssignmentFindManyArgs>(args?: SelectSubset<T, ProjectAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAssignment.
     * @param {ProjectAssignmentCreateArgs} args - Arguments to create a ProjectAssignment.
     * @example
     * // Create one ProjectAssignment
     * const ProjectAssignment = await prisma.projectAssignment.create({
     *   data: {
     *     // ... data to create a ProjectAssignment
     *   }
     * })
     * 
     */
    create<T extends ProjectAssignmentCreateArgs>(args: SelectSubset<T, ProjectAssignmentCreateArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAssignments.
     * @param {ProjectAssignmentCreateManyArgs} args - Arguments to create many ProjectAssignments.
     * @example
     * // Create many ProjectAssignments
     * const projectAssignment = await prisma.projectAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAssignmentCreateManyArgs>(args?: SelectSubset<T, ProjectAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectAssignments and returns the data saved in the database.
     * @param {ProjectAssignmentCreateManyAndReturnArgs} args - Arguments to create many ProjectAssignments.
     * @example
     * // Create many ProjectAssignments
     * const projectAssignment = await prisma.projectAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectAssignments and only return the `id`
     * const projectAssignmentWithIdOnly = await prisma.projectAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectAssignment.
     * @param {ProjectAssignmentDeleteArgs} args - Arguments to delete one ProjectAssignment.
     * @example
     * // Delete one ProjectAssignment
     * const ProjectAssignment = await prisma.projectAssignment.delete({
     *   where: {
     *     // ... filter to delete one ProjectAssignment
     *   }
     * })
     * 
     */
    delete<T extends ProjectAssignmentDeleteArgs>(args: SelectSubset<T, ProjectAssignmentDeleteArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAssignment.
     * @param {ProjectAssignmentUpdateArgs} args - Arguments to update one ProjectAssignment.
     * @example
     * // Update one ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAssignmentUpdateArgs>(args: SelectSubset<T, ProjectAssignmentUpdateArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAssignments.
     * @param {ProjectAssignmentDeleteManyArgs} args - Arguments to filter ProjectAssignments to delete.
     * @example
     * // Delete a few ProjectAssignments
     * const { count } = await prisma.projectAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAssignmentDeleteManyArgs>(args?: SelectSubset<T, ProjectAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAssignments
     * const projectAssignment = await prisma.projectAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAssignmentUpdateManyArgs>(args: SelectSubset<T, ProjectAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssignments and returns the data updated in the database.
     * @param {ProjectAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ProjectAssignments.
     * @example
     * // Update many ProjectAssignments
     * const projectAssignment = await prisma.projectAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectAssignments and only return the `id`
     * const projectAssignmentWithIdOnly = await prisma.projectAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectAssignment.
     * @param {ProjectAssignmentUpsertArgs} args - Arguments to update or create a ProjectAssignment.
     * @example
     * // Update or create a ProjectAssignment
     * const projectAssignment = await prisma.projectAssignment.upsert({
     *   create: {
     *     // ... data to create a ProjectAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAssignmentUpsertArgs>(args: SelectSubset<T, ProjectAssignmentUpsertArgs<ExtArgs>>): Prisma__ProjectAssignmentClient<$Result.GetResult<Prisma.$ProjectAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentCountArgs} args - Arguments to filter ProjectAssignments to count.
     * @example
     * // Count the number of ProjectAssignments
     * const count = await prisma.projectAssignment.count({
     *   where: {
     *     // ... the filter for the ProjectAssignments we want to count
     *   }
     * })
    **/
    count<T extends ProjectAssignmentCountArgs>(
      args?: Subset<T, ProjectAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAssignmentAggregateArgs>(args: Subset<T, ProjectAssignmentAggregateArgs>): Prisma.PrismaPromise<GetProjectAssignmentAggregateType<T>>

    /**
     * Group by ProjectAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAssignment model
   */
  readonly fields: ProjectAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectAssignment model
   */
  interface ProjectAssignmentFieldRefs {
    readonly id: FieldRef<"ProjectAssignment", 'Int'>
    readonly projectId: FieldRef<"ProjectAssignment", 'Int'>
    readonly userId: FieldRef<"ProjectAssignment", 'Int'>
    readonly roleInProject: FieldRef<"ProjectAssignment", 'ProjectRoleType'>
    readonly assignedAt: FieldRef<"ProjectAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAssignment findUnique
   */
  export type ProjectAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssignment to fetch.
     */
    where: ProjectAssignmentWhereUniqueInput
  }

  /**
   * ProjectAssignment findUniqueOrThrow
   */
  export type ProjectAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssignment to fetch.
     */
    where: ProjectAssignmentWhereUniqueInput
  }

  /**
   * ProjectAssignment findFirst
   */
  export type ProjectAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssignment to fetch.
     */
    where?: ProjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssignments to fetch.
     */
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssignments.
     */
    cursor?: ProjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssignments.
     */
    distinct?: ProjectAssignmentScalarFieldEnum | ProjectAssignmentScalarFieldEnum[]
  }

  /**
   * ProjectAssignment findFirstOrThrow
   */
  export type ProjectAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssignment to fetch.
     */
    where?: ProjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssignments to fetch.
     */
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssignments.
     */
    cursor?: ProjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssignments.
     */
    distinct?: ProjectAssignmentScalarFieldEnum | ProjectAssignmentScalarFieldEnum[]
  }

  /**
   * ProjectAssignment findMany
   */
  export type ProjectAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssignments to fetch.
     */
    where?: ProjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssignments to fetch.
     */
    orderBy?: ProjectAssignmentOrderByWithRelationInput | ProjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAssignments.
     */
    cursor?: ProjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssignments.
     */
    skip?: number
    distinct?: ProjectAssignmentScalarFieldEnum | ProjectAssignmentScalarFieldEnum[]
  }

  /**
   * ProjectAssignment create
   */
  export type ProjectAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAssignment.
     */
    data: XOR<ProjectAssignmentCreateInput, ProjectAssignmentUncheckedCreateInput>
  }

  /**
   * ProjectAssignment createMany
   */
  export type ProjectAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAssignments.
     */
    data: ProjectAssignmentCreateManyInput | ProjectAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectAssignment createManyAndReturn
   */
  export type ProjectAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectAssignments.
     */
    data: ProjectAssignmentCreateManyInput | ProjectAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAssignment update
   */
  export type ProjectAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAssignment.
     */
    data: XOR<ProjectAssignmentUpdateInput, ProjectAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ProjectAssignment to update.
     */
    where: ProjectAssignmentWhereUniqueInput
  }

  /**
   * ProjectAssignment updateMany
   */
  export type ProjectAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAssignments.
     */
    data: XOR<ProjectAssignmentUpdateManyMutationInput, ProjectAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssignments to update
     */
    where?: ProjectAssignmentWhereInput
    /**
     * Limit how many ProjectAssignments to update.
     */
    limit?: number
  }

  /**
   * ProjectAssignment updateManyAndReturn
   */
  export type ProjectAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ProjectAssignments.
     */
    data: XOR<ProjectAssignmentUpdateManyMutationInput, ProjectAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssignments to update
     */
    where?: ProjectAssignmentWhereInput
    /**
     * Limit how many ProjectAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAssignment upsert
   */
  export type ProjectAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAssignment to update in case it exists.
     */
    where: ProjectAssignmentWhereUniqueInput
    /**
     * In case the ProjectAssignment found by the `where` argument doesn't exist, create a new ProjectAssignment with this data.
     */
    create: XOR<ProjectAssignmentCreateInput, ProjectAssignmentUncheckedCreateInput>
    /**
     * In case the ProjectAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAssignmentUpdateInput, ProjectAssignmentUncheckedUpdateInput>
  }

  /**
   * ProjectAssignment delete
   */
  export type ProjectAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ProjectAssignment to delete.
     */
    where: ProjectAssignmentWhereUniqueInput
  }

  /**
   * ProjectAssignment deleteMany
   */
  export type ProjectAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAssignments to delete
     */
    where?: ProjectAssignmentWhereInput
    /**
     * Limit how many ProjectAssignments to delete.
     */
    limit?: number
  }

  /**
   * ProjectAssignment without action
   */
  export type ProjectAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssignment
     */
    select?: ProjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAssignment
     */
    omit?: ProjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPhase
   */

  export type AggregateProjectPhase = {
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  export type ProjectPhaseAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectPhaseSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectPhaseMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    projectId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    projectId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectPhaseAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectPhaseSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectPhaseMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhase to aggregate.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPhases
    **/
    _count?: true | ProjectPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type GetProjectPhaseAggregateType<T extends ProjectPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPhase[P]>
      : GetScalarType<T[P], AggregateProjectPhase[P]>
  }




  export type ProjectPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithAggregationInput | ProjectPhaseOrderByWithAggregationInput[]
    by: ProjectPhaseScalarFieldEnum[] | ProjectPhaseScalarFieldEnum
    having?: ProjectPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPhaseCountAggregateInputType | true
    _avg?: ProjectPhaseAvgAggregateInputType
    _sum?: ProjectPhaseSumAggregateInputType
    _min?: ProjectPhaseMinAggregateInputType
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type ProjectPhaseGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    projectId: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  type GetProjectPhaseGroupByPayload<T extends ProjectPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectPhase"]>
  export type ProjectPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPhase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
      projectId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectPhase"]>
    composites: {}
  }

  type ProjectPhaseGetPayload<S extends boolean | null | undefined | ProjectPhaseDefaultArgs> = $Result.GetResult<Prisma.$ProjectPhasePayload, S>

  type ProjectPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectPhaseCountAggregateInputType | true
    }

  export interface ProjectPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPhase'], meta: { name: 'ProjectPhase' } }
    /**
     * Find zero or one ProjectPhase that matches the filter.
     * @param {ProjectPhaseFindUniqueArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPhaseFindUniqueArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectPhaseFindUniqueOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPhaseFindFirstArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany()
     * 
     * // Get first 10 ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPhaseFindManyArgs>(args?: SelectSubset<T, ProjectPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectPhase.
     * @param {ProjectPhaseCreateArgs} args - Arguments to create a ProjectPhase.
     * @example
     * // Create one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.create({
     *   data: {
     *     // ... data to create a ProjectPhase
     *   }
     * })
     * 
     */
    create<T extends ProjectPhaseCreateArgs>(args: SelectSubset<T, ProjectPhaseCreateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectPhases.
     * @param {ProjectPhaseCreateManyArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPhaseCreateManyArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPhases and returns the data saved in the database.
     * @param {ProjectPhaseCreateManyAndReturnArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPhases and only return the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectPhase.
     * @param {ProjectPhaseDeleteArgs} args - Arguments to delete one ProjectPhase.
     * @example
     * // Delete one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.delete({
     *   where: {
     *     // ... filter to delete one ProjectPhase
     *   }
     * })
     * 
     */
    delete<T extends ProjectPhaseDeleteArgs>(args: SelectSubset<T, ProjectPhaseDeleteArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectPhase.
     * @param {ProjectPhaseUpdateArgs} args - Arguments to update one ProjectPhase.
     * @example
     * // Update one ProjectPhase
     * const projectPhase = await prisma.projectPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPhaseUpdateArgs>(args: SelectSubset<T, ProjectPhaseUpdateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectPhases.
     * @param {ProjectPhaseDeleteManyArgs} args - Arguments to filter ProjectPhases to delete.
     * @example
     * // Delete a few ProjectPhases
     * const { count } = await prisma.projectPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPhaseDeleteManyArgs>(args?: SelectSubset<T, ProjectPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPhases
     * const projectPhase = await prisma.projectPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPhaseUpdateManyArgs>(args: SelectSubset<T, ProjectPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhases and returns the data updated in the database.
     * @param {ProjectPhaseUpdateManyAndReturnArgs} args - Arguments to update many ProjectPhases.
     * @example
     * // Update many ProjectPhases
     * const projectPhase = await prisma.projectPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectPhases and only return the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectPhase.
     * @param {ProjectPhaseUpsertArgs} args - Arguments to update or create a ProjectPhase.
     * @example
     * // Update or create a ProjectPhase
     * const projectPhase = await prisma.projectPhase.upsert({
     *   create: {
     *     // ... data to create a ProjectPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPhase we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPhaseUpsertArgs>(args: SelectSubset<T, ProjectPhaseUpsertArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseCountArgs} args - Arguments to filter ProjectPhases to count.
     * @example
     * // Count the number of ProjectPhases
     * const count = await prisma.projectPhase.count({
     *   where: {
     *     // ... the filter for the ProjectPhases we want to count
     *   }
     * })
    **/
    count<T extends ProjectPhaseCountArgs>(
      args?: Subset<T, ProjectPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectPhaseAggregateArgs>(args: Subset<T, ProjectPhaseAggregateArgs>): Prisma.PrismaPromise<GetProjectPhaseAggregateType<T>>

    /**
     * Group by ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPhaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPhase model
   */
  readonly fields: ProjectPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectPhase model
   */
  interface ProjectPhaseFieldRefs {
    readonly id: FieldRef<"ProjectPhase", 'Int'>
    readonly name: FieldRef<"ProjectPhase", 'String'>
    readonly startDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly endDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly projectId: FieldRef<"ProjectPhase", 'Int'>
    readonly createdAt: FieldRef<"ProjectPhase", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectPhase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPhase findUnique
   */
  export type ProjectPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findUniqueOrThrow
   */
  export type ProjectPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findFirst
   */
  export type ProjectPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findFirstOrThrow
   */
  export type ProjectPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findMany
   */
  export type ProjectPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhases to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase create
   */
  export type ProjectPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPhase.
     */
    data: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
  }

  /**
   * ProjectPhase createMany
   */
  export type ProjectPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPhase createManyAndReturn
   */
  export type ProjectPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhase update
   */
  export type ProjectPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPhase.
     */
    data: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
    /**
     * Choose, which ProjectPhase to update.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase updateMany
   */
  export type ProjectPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPhases.
     */
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhases to update
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to update.
     */
    limit?: number
  }

  /**
   * ProjectPhase updateManyAndReturn
   */
  export type ProjectPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * The data used to update ProjectPhases.
     */
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhases to update
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhase upsert
   */
  export type ProjectPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPhase to update in case it exists.
     */
    where: ProjectPhaseWhereUniqueInput
    /**
     * In case the ProjectPhase found by the `where` argument doesn't exist, create a new ProjectPhase with this data.
     */
    create: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
    /**
     * In case the ProjectPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
  }

  /**
   * ProjectPhase delete
   */
  export type ProjectPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter which ProjectPhase to delete.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase deleteMany
   */
  export type ProjectPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhases to delete
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to delete.
     */
    limit?: number
  }

  /**
   * ProjectPhase without action
   */
  export type ProjectPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    requesterId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    requesterId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    type: $Enums.TicketType | null
    title: string | null
    description: string | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    requesterId: number | null
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    type: $Enums.TicketType | null
    title: string | null
    description: string | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    requesterId: number | null
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    title: number
    description: number
    priority: number
    status: number
    requesterId: number
    startDate: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    projectId?: true
    requesterId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    projectId?: true
    requesterId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    requesterId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    requesterId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    requesterId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description: string | null
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    requesterId: number
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    requesterId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    assignees?: boolean | Ticket$assigneesArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    requesterId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    requesterId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    requesterId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "title" | "description" | "priority" | "status" | "requesterId" | "startDate" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    assignees?: boolean | Ticket$assigneesArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
      assignees: Prisma.$TicketAssigneePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      type: $Enums.TicketType
      title: string
      description: string | null
      priority: $Enums.TicketPriority
      status: $Enums.TicketStatus
      requesterId: number
      startDate: Date | null
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignees<T extends Ticket$assigneesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assigneesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Ticket$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Ticket$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly projectId: FieldRef<"Ticket", 'Int'>
    readonly type: FieldRef<"Ticket", 'TicketType'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly requesterId: FieldRef<"Ticket", 'Int'>
    readonly startDate: FieldRef<"Ticket", 'DateTime'>
    readonly dueDate: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.assignees
   */
  export type Ticket$assigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    where?: TicketAssigneeWhereInput
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    cursor?: TicketAssigneeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssigneeScalarFieldEnum | TicketAssigneeScalarFieldEnum[]
  }

  /**
   * Ticket.comments
   */
  export type Ticket$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Ticket.attachments
   */
  export type Ticket$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketAssignee
   */

  export type AggregateTicketAssignee = {
    _count: TicketAssigneeCountAggregateOutputType | null
    _avg: TicketAssigneeAvgAggregateOutputType | null
    _sum: TicketAssigneeSumAggregateOutputType | null
    _min: TicketAssigneeMinAggregateOutputType | null
    _max: TicketAssigneeMaxAggregateOutputType | null
  }

  export type TicketAssigneeAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
  }

  export type TicketAssigneeSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
  }

  export type TicketAssigneeMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type TicketAssigneeMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type TicketAssigneeCountAggregateOutputType = {
    id: number
    ticketId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type TicketAssigneeAvgAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
  }

  export type TicketAssigneeSumAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
  }

  export type TicketAssigneeMinAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    assignedAt?: true
  }

  export type TicketAssigneeMaxAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    assignedAt?: true
  }

  export type TicketAssigneeCountAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type TicketAssigneeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignee to aggregate.
     */
    where?: TicketAssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignees to fetch.
     */
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAssignees
    **/
    _count?: true | TicketAssigneeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAssigneeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketAssigneeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAssigneeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAssigneeMaxAggregateInputType
  }

  export type GetTicketAssigneeAggregateType<T extends TicketAssigneeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAssignee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAssignee[P]>
      : GetScalarType<T[P], AggregateTicketAssignee[P]>
  }




  export type TicketAssigneeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssigneeWhereInput
    orderBy?: TicketAssigneeOrderByWithAggregationInput | TicketAssigneeOrderByWithAggregationInput[]
    by: TicketAssigneeScalarFieldEnum[] | TicketAssigneeScalarFieldEnum
    having?: TicketAssigneeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAssigneeCountAggregateInputType | true
    _avg?: TicketAssigneeAvgAggregateInputType
    _sum?: TicketAssigneeSumAggregateInputType
    _min?: TicketAssigneeMinAggregateInputType
    _max?: TicketAssigneeMaxAggregateInputType
  }

  export type TicketAssigneeGroupByOutputType = {
    id: number
    ticketId: number
    userId: number
    assignedAt: Date
    _count: TicketAssigneeCountAggregateOutputType | null
    _avg: TicketAssigneeAvgAggregateOutputType | null
    _sum: TicketAssigneeSumAggregateOutputType | null
    _min: TicketAssigneeMinAggregateOutputType | null
    _max: TicketAssigneeMaxAggregateOutputType | null
  }

  type GetTicketAssigneeGroupByPayload<T extends TicketAssigneeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAssigneeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAssigneeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAssigneeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAssigneeGroupByOutputType[P]>
        }
      >
    >


  export type TicketAssigneeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    assignedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignee"]>

  export type TicketAssigneeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    assignedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignee"]>

  export type TicketAssigneeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    assignedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignee"]>

  export type TicketAssigneeSelectScalar = {
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type TicketAssigneeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "userId" | "assignedAt", ExtArgs["result"]["ticketAssignee"]>
  export type TicketAssigneeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAssigneeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAssigneeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketAssigneePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAssignee"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      userId: number
      assignedAt: Date
    }, ExtArgs["result"]["ticketAssignee"]>
    composites: {}
  }

  type TicketAssigneeGetPayload<S extends boolean | null | undefined | TicketAssigneeDefaultArgs> = $Result.GetResult<Prisma.$TicketAssigneePayload, S>

  type TicketAssigneeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAssigneeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAssigneeCountAggregateInputType | true
    }

  export interface TicketAssigneeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAssignee'], meta: { name: 'TicketAssignee' } }
    /**
     * Find zero or one TicketAssignee that matches the filter.
     * @param {TicketAssigneeFindUniqueArgs} args - Arguments to find a TicketAssignee
     * @example
     * // Get one TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAssigneeFindUniqueArgs>(args: SelectSubset<T, TicketAssigneeFindUniqueArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketAssignee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAssigneeFindUniqueOrThrowArgs} args - Arguments to find a TicketAssignee
     * @example
     * // Get one TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAssigneeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAssigneeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAssignee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeFindFirstArgs} args - Arguments to find a TicketAssignee
     * @example
     * // Get one TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAssigneeFindFirstArgs>(args?: SelectSubset<T, TicketAssigneeFindFirstArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAssignee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeFindFirstOrThrowArgs} args - Arguments to find a TicketAssignee
     * @example
     * // Get one TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAssigneeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAssigneeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketAssignees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAssignees
     * const ticketAssignees = await prisma.ticketAssignee.findMany()
     * 
     * // Get first 10 TicketAssignees
     * const ticketAssignees = await prisma.ticketAssignee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAssigneeWithIdOnly = await prisma.ticketAssignee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAssigneeFindManyArgs>(args?: SelectSubset<T, TicketAssigneeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketAssignee.
     * @param {TicketAssigneeCreateArgs} args - Arguments to create a TicketAssignee.
     * @example
     * // Create one TicketAssignee
     * const TicketAssignee = await prisma.ticketAssignee.create({
     *   data: {
     *     // ... data to create a TicketAssignee
     *   }
     * })
     * 
     */
    create<T extends TicketAssigneeCreateArgs>(args: SelectSubset<T, TicketAssigneeCreateArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketAssignees.
     * @param {TicketAssigneeCreateManyArgs} args - Arguments to create many TicketAssignees.
     * @example
     * // Create many TicketAssignees
     * const ticketAssignee = await prisma.ticketAssignee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAssigneeCreateManyArgs>(args?: SelectSubset<T, TicketAssigneeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAssignees and returns the data saved in the database.
     * @param {TicketAssigneeCreateManyAndReturnArgs} args - Arguments to create many TicketAssignees.
     * @example
     * // Create many TicketAssignees
     * const ticketAssignee = await prisma.ticketAssignee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAssignees and only return the `id`
     * const ticketAssigneeWithIdOnly = await prisma.ticketAssignee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAssigneeCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAssigneeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketAssignee.
     * @param {TicketAssigneeDeleteArgs} args - Arguments to delete one TicketAssignee.
     * @example
     * // Delete one TicketAssignee
     * const TicketAssignee = await prisma.ticketAssignee.delete({
     *   where: {
     *     // ... filter to delete one TicketAssignee
     *   }
     * })
     * 
     */
    delete<T extends TicketAssigneeDeleteArgs>(args: SelectSubset<T, TicketAssigneeDeleteArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketAssignee.
     * @param {TicketAssigneeUpdateArgs} args - Arguments to update one TicketAssignee.
     * @example
     * // Update one TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAssigneeUpdateArgs>(args: SelectSubset<T, TicketAssigneeUpdateArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketAssignees.
     * @param {TicketAssigneeDeleteManyArgs} args - Arguments to filter TicketAssignees to delete.
     * @example
     * // Delete a few TicketAssignees
     * const { count } = await prisma.ticketAssignee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAssigneeDeleteManyArgs>(args?: SelectSubset<T, TicketAssigneeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAssignees
     * const ticketAssignee = await prisma.ticketAssignee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAssigneeUpdateManyArgs>(args: SelectSubset<T, TicketAssigneeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignees and returns the data updated in the database.
     * @param {TicketAssigneeUpdateManyAndReturnArgs} args - Arguments to update many TicketAssignees.
     * @example
     * // Update many TicketAssignees
     * const ticketAssignee = await prisma.ticketAssignee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketAssignees and only return the `id`
     * const ticketAssigneeWithIdOnly = await prisma.ticketAssignee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketAssigneeUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketAssigneeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketAssignee.
     * @param {TicketAssigneeUpsertArgs} args - Arguments to update or create a TicketAssignee.
     * @example
     * // Update or create a TicketAssignee
     * const ticketAssignee = await prisma.ticketAssignee.upsert({
     *   create: {
     *     // ... data to create a TicketAssignee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAssignee we want to update
     *   }
     * })
     */
    upsert<T extends TicketAssigneeUpsertArgs>(args: SelectSubset<T, TicketAssigneeUpsertArgs<ExtArgs>>): Prisma__TicketAssigneeClient<$Result.GetResult<Prisma.$TicketAssigneePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketAssignees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeCountArgs} args - Arguments to filter TicketAssignees to count.
     * @example
     * // Count the number of TicketAssignees
     * const count = await prisma.ticketAssignee.count({
     *   where: {
     *     // ... the filter for the TicketAssignees we want to count
     *   }
     * })
    **/
    count<T extends TicketAssigneeCountArgs>(
      args?: Subset<T, TicketAssigneeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAssigneeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAssignee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAssigneeAggregateArgs>(args: Subset<T, TicketAssigneeAggregateArgs>): Prisma.PrismaPromise<GetTicketAssigneeAggregateType<T>>

    /**
     * Group by TicketAssignee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssigneeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketAssigneeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAssigneeGroupByArgs['orderBy'] }
        : { orderBy?: TicketAssigneeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketAssigneeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAssigneeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAssignee model
   */
  readonly fields: TicketAssigneeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAssignee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAssigneeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketAssignee model
   */
  interface TicketAssigneeFieldRefs {
    readonly id: FieldRef<"TicketAssignee", 'Int'>
    readonly ticketId: FieldRef<"TicketAssignee", 'Int'>
    readonly userId: FieldRef<"TicketAssignee", 'Int'>
    readonly assignedAt: FieldRef<"TicketAssignee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAssignee findUnique
   */
  export type TicketAssigneeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignee to fetch.
     */
    where: TicketAssigneeWhereUniqueInput
  }

  /**
   * TicketAssignee findUniqueOrThrow
   */
  export type TicketAssigneeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignee to fetch.
     */
    where: TicketAssigneeWhereUniqueInput
  }

  /**
   * TicketAssignee findFirst
   */
  export type TicketAssigneeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignee to fetch.
     */
    where?: TicketAssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignees to fetch.
     */
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignees.
     */
    cursor?: TicketAssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignees.
     */
    distinct?: TicketAssigneeScalarFieldEnum | TicketAssigneeScalarFieldEnum[]
  }

  /**
   * TicketAssignee findFirstOrThrow
   */
  export type TicketAssigneeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignee to fetch.
     */
    where?: TicketAssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignees to fetch.
     */
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignees.
     */
    cursor?: TicketAssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignees.
     */
    distinct?: TicketAssigneeScalarFieldEnum | TicketAssigneeScalarFieldEnum[]
  }

  /**
   * TicketAssignee findMany
   */
  export type TicketAssigneeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignees to fetch.
     */
    where?: TicketAssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignees to fetch.
     */
    orderBy?: TicketAssigneeOrderByWithRelationInput | TicketAssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAssignees.
     */
    cursor?: TicketAssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignees.
     */
    skip?: number
    distinct?: TicketAssigneeScalarFieldEnum | TicketAssigneeScalarFieldEnum[]
  }

  /**
   * TicketAssignee create
   */
  export type TicketAssigneeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAssignee.
     */
    data: XOR<TicketAssigneeCreateInput, TicketAssigneeUncheckedCreateInput>
  }

  /**
   * TicketAssignee createMany
   */
  export type TicketAssigneeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAssignees.
     */
    data: TicketAssigneeCreateManyInput | TicketAssigneeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAssignee createManyAndReturn
   */
  export type TicketAssigneeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * The data used to create many TicketAssignees.
     */
    data: TicketAssigneeCreateManyInput | TicketAssigneeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignee update
   */
  export type TicketAssigneeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAssignee.
     */
    data: XOR<TicketAssigneeUpdateInput, TicketAssigneeUncheckedUpdateInput>
    /**
     * Choose, which TicketAssignee to update.
     */
    where: TicketAssigneeWhereUniqueInput
  }

  /**
   * TicketAssignee updateMany
   */
  export type TicketAssigneeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAssignees.
     */
    data: XOR<TicketAssigneeUpdateManyMutationInput, TicketAssigneeUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignees to update
     */
    where?: TicketAssigneeWhereInput
    /**
     * Limit how many TicketAssignees to update.
     */
    limit?: number
  }

  /**
   * TicketAssignee updateManyAndReturn
   */
  export type TicketAssigneeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * The data used to update TicketAssignees.
     */
    data: XOR<TicketAssigneeUpdateManyMutationInput, TicketAssigneeUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignees to update
     */
    where?: TicketAssigneeWhereInput
    /**
     * Limit how many TicketAssignees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignee upsert
   */
  export type TicketAssigneeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAssignee to update in case it exists.
     */
    where: TicketAssigneeWhereUniqueInput
    /**
     * In case the TicketAssignee found by the `where` argument doesn't exist, create a new TicketAssignee with this data.
     */
    create: XOR<TicketAssigneeCreateInput, TicketAssigneeUncheckedCreateInput>
    /**
     * In case the TicketAssignee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAssigneeUpdateInput, TicketAssigneeUncheckedUpdateInput>
  }

  /**
   * TicketAssignee delete
   */
  export type TicketAssigneeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
    /**
     * Filter which TicketAssignee to delete.
     */
    where: TicketAssigneeWhereUniqueInput
  }

  /**
   * TicketAssignee deleteMany
   */
  export type TicketAssigneeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignees to delete
     */
    where?: TicketAssigneeWhereInput
    /**
     * Limit how many TicketAssignees to delete.
     */
    limit?: number
  }

  /**
   * TicketAssignee without action
   */
  export type TicketAssigneeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignee
     */
    select?: TicketAssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignee
     */
    omit?: TicketAssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssigneeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    ticketId: number
    userId: number
    message: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    ticketId: number
    userId: number
    message: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "userId" | "message" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      userId: number
      message: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly ticketId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    fileSize: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    fileSize: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    fileName: string | null
    filePath: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    userId: number | null
    fileName: string | null
    filePath: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    ticketId: number
    userId: number
    fileName: number
    filePath: number
    fileSize: number
    mimeType: number
    createdAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    fileSize?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    fileSize?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    ticketId: number
    userId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "userId" | "fileName" | "filePath" | "fileSize" | "mimeType" | "createdAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      userId: number
      fileName: string
      filePath: string
      fileSize: number
      mimeType: string
      createdAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'Int'>
    readonly ticketId: FieldRef<"Attachment", 'Int'>
    readonly userId: FieldRef<"Attachment", 'Int'>
    readonly fileName: FieldRef<"Attachment", 'String'>
    readonly filePath: FieldRef<"Attachment", 'String'>
    readonly fileSize: FieldRef<"Attachment", 'Int'>
    readonly mimeType: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    recipientId: number | null
    targetId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    recipientId: number | null
    targetId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    recipientId: number | null
    targetType: $Enums.NotificationTargetType | null
    targetId: number | null
    message: string | null
    subject: string | null
    emailText: string | null
    emailFrom: string | null
    emailReplyTo: string | null
    state: $Enums.NotificationState | null
    createdAt: Date | null
    readAt: Date | null
    status: $Enums.NotifyStatusType | null
    sentAt: Date | null
    emailError: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    recipientId: number | null
    targetType: $Enums.NotificationTargetType | null
    targetId: number | null
    message: string | null
    subject: string | null
    emailText: string | null
    emailFrom: string | null
    emailReplyTo: string | null
    state: $Enums.NotificationState | null
    createdAt: Date | null
    readAt: Date | null
    status: $Enums.NotifyStatusType | null
    sentAt: Date | null
    emailError: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    recipientId: number
    targetType: number
    targetId: number
    message: number
    subject: number
    emailText: number
    emailFrom: number
    emailReplyTo: number
    state: number
    createdAt: number
    readAt: number
    status: number
    sentAt: number
    emailError: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    recipientId?: true
    targetId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    recipientId?: true
    targetId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    recipientId?: true
    targetType?: true
    targetId?: true
    message?: true
    subject?: true
    emailText?: true
    emailFrom?: true
    emailReplyTo?: true
    state?: true
    createdAt?: true
    readAt?: true
    status?: true
    sentAt?: true
    emailError?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    recipientId?: true
    targetType?: true
    targetId?: true
    message?: true
    subject?: true
    emailText?: true
    emailFrom?: true
    emailReplyTo?: true
    state?: true
    createdAt?: true
    readAt?: true
    status?: true
    sentAt?: true
    emailError?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    recipientId?: true
    targetType?: true
    targetId?: true
    message?: true
    subject?: true
    emailText?: true
    emailFrom?: true
    emailReplyTo?: true
    state?: true
    createdAt?: true
    readAt?: true
    status?: true
    sentAt?: true
    emailError?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    recipientId: number
    targetType: $Enums.NotificationTargetType
    targetId: number | null
    message: string
    subject: string | null
    emailText: string | null
    emailFrom: string | null
    emailReplyTo: string | null
    state: $Enums.NotificationState
    createdAt: Date
    readAt: Date | null
    status: $Enums.NotifyStatusType | null
    sentAt: Date | null
    emailError: string | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    targetType?: boolean
    targetId?: boolean
    message?: boolean
    subject?: boolean
    emailText?: boolean
    emailFrom?: boolean
    emailReplyTo?: boolean
    state?: boolean
    createdAt?: boolean
    readAt?: boolean
    status?: boolean
    sentAt?: boolean
    emailError?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    targetType?: boolean
    targetId?: boolean
    message?: boolean
    subject?: boolean
    emailText?: boolean
    emailFrom?: boolean
    emailReplyTo?: boolean
    state?: boolean
    createdAt?: boolean
    readAt?: boolean
    status?: boolean
    sentAt?: boolean
    emailError?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    targetType?: boolean
    targetId?: boolean
    message?: boolean
    subject?: boolean
    emailText?: boolean
    emailFrom?: boolean
    emailReplyTo?: boolean
    state?: boolean
    createdAt?: boolean
    readAt?: boolean
    status?: boolean
    sentAt?: boolean
    emailError?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    recipientId?: boolean
    targetType?: boolean
    targetId?: boolean
    message?: boolean
    subject?: boolean
    emailText?: boolean
    emailFrom?: boolean
    emailReplyTo?: boolean
    state?: boolean
    createdAt?: boolean
    readAt?: boolean
    status?: boolean
    sentAt?: boolean
    emailError?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipientId" | "targetType" | "targetId" | "message" | "subject" | "emailText" | "emailFrom" | "emailReplyTo" | "state" | "createdAt" | "readAt" | "status" | "sentAt" | "emailError", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipientId: number
      targetType: $Enums.NotificationTargetType
      targetId: number | null
      message: string
      subject: string | null
      emailText: string | null
      emailFrom: string | null
      emailReplyTo: string | null
      state: $Enums.NotificationState
      createdAt: Date
      readAt: Date | null
      status: $Enums.NotifyStatusType | null
      sentAt: Date | null
      emailError: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly recipientId: FieldRef<"Notification", 'Int'>
    readonly targetType: FieldRef<"Notification", 'NotificationTargetType'>
    readonly targetId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly emailText: FieldRef<"Notification", 'String'>
    readonly emailFrom: FieldRef<"Notification", 'String'>
    readonly emailReplyTo: FieldRef<"Notification", 'String'>
    readonly state: FieldRef<"Notification", 'NotificationState'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly status: FieldRef<"Notification", 'NotifyStatusType'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly emailError: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    targetId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    targetId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    targetType: $Enums.ActivityTargetType | null
    targetId: number | null
    occurredAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    targetType: $Enums.ActivityTargetType | null
    targetId: number | null
    occurredAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    targetType: number
    targetId: number
    details: number
    occurredAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
    targetId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
    targetId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetType?: true
    targetId?: true
    occurredAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetType?: true
    targetId?: true
    occurredAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetType?: true
    targetId?: true
    details?: true
    occurredAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details: JsonValue | null
    occurredAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    occurredAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    occurredAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    occurredAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    occurredAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "targetType" | "targetId" | "details" | "occurredAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      targetType: $Enums.ActivityTargetType
      targetId: number
      details: Prisma.JsonValue | null
      occurredAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly targetType: FieldRef<"ActivityLog", 'ActivityTargetType'>
    readonly targetId: FieldRef<"ActivityLog", 'Int'>
    readonly details: FieldRef<"ActivityLog", 'Json'>
    readonly occurredAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectOwnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    company: 'company',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectOwnerScalarFieldEnum = (typeof ProjectOwnerScalarFieldEnum)[keyof typeof ProjectOwnerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categories: 'categories',
    ownerId: 'ownerId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    completion: 'completion',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectAssignmentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    roleInProject: 'roleInProject',
    assignedAt: 'assignedAt'
  };

  export type ProjectAssignmentScalarFieldEnum = (typeof ProjectAssignmentScalarFieldEnum)[keyof typeof ProjectAssignmentScalarFieldEnum]


  export const ProjectPhaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectPhaseScalarFieldEnum = (typeof ProjectPhaseScalarFieldEnum)[keyof typeof ProjectPhaseScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    requesterId: 'requesterId',
    startDate: 'startDate',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketAssigneeScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type TicketAssigneeScalarFieldEnum = (typeof TicketAssigneeScalarFieldEnum)[keyof typeof TicketAssigneeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    userId: 'userId',
    fileName: 'fileName',
    filePath: 'filePath',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    createdAt: 'createdAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    recipientId: 'recipientId',
    targetType: 'targetType',
    targetId: 'targetId',
    message: 'message',
    subject: 'subject',
    emailText: 'emailText',
    emailFrom: 'emailFrom',
    emailReplyTo: 'emailReplyTo',
    state: 'state',
    createdAt: 'createdAt',
    readAt: 'readAt',
    status: 'status',
    sentAt: 'sentAt',
    emailError: 'emailError'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    details: 'details',
    occurredAt: 'occurredAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ProjectRoleType'
   */
  export type EnumProjectRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRoleType'>
    


  /**
   * Reference to a field of type 'ProjectRoleType[]'
   */
  export type ListEnumProjectRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRoleType[]'>
    


  /**
   * Reference to a field of type 'TicketType'
   */
  export type EnumTicketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketType'>
    


  /**
   * Reference to a field of type 'TicketType[]'
   */
  export type ListEnumTicketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketType[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationTargetType'
   */
  export type EnumNotificationTargetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationTargetType'>
    


  /**
   * Reference to a field of type 'NotificationTargetType[]'
   */
  export type ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationTargetType[]'>
    


  /**
   * Reference to a field of type 'NotificationState'
   */
  export type EnumNotificationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationState'>
    


  /**
   * Reference to a field of type 'NotificationState[]'
   */
  export type ListEnumNotificationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationState[]'>
    


  /**
   * Reference to a field of type 'NotifyStatusType'
   */
  export type EnumNotifyStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotifyStatusType'>
    


  /**
   * Reference to a field of type 'NotifyStatusType[]'
   */
  export type ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotifyStatusType[]'>
    


  /**
   * Reference to a field of type 'ActivityTargetType'
   */
  export type EnumActivityTargetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityTargetType'>
    


  /**
   * Reference to a field of type 'ActivityTargetType[]'
   */
  export type ListEnumActivityTargetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityTargetType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projectAssignments?: ProjectAssignmentListRelationFilter
    requestedTickets?: TicketListRelationFilter
    ticketAssignees?: TicketAssigneeListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectAssignments?: ProjectAssignmentOrderByRelationAggregateInput
    requestedTickets?: TicketOrderByRelationAggregateInput
    ticketAssignees?: TicketAssigneeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projectAssignments?: ProjectAssignmentListRelationFilter
    requestedTickets?: TicketListRelationFilter
    ticketAssignees?: TicketAssigneeListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleTypeWithAggregatesFilter<"User"> | $Enums.RoleType
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectOwnerWhereInput = {
    AND?: ProjectOwnerWhereInput | ProjectOwnerWhereInput[]
    OR?: ProjectOwnerWhereInput[]
    NOT?: ProjectOwnerWhereInput | ProjectOwnerWhereInput[]
    id?: IntFilter<"ProjectOwner"> | number
    name?: StringFilter<"ProjectOwner"> | string
    company?: StringNullableFilter<"ProjectOwner"> | string | null
    email?: StringFilter<"ProjectOwner"> | string
    phone?: StringFilter<"ProjectOwner"> | string
    address?: StringFilter<"ProjectOwner"> | string
    createdAt?: DateTimeFilter<"ProjectOwner"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectOwner"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type ProjectOwnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ProjectOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ProjectOwnerWhereInput | ProjectOwnerWhereInput[]
    OR?: ProjectOwnerWhereInput[]
    NOT?: ProjectOwnerWhereInput | ProjectOwnerWhereInput[]
    name?: StringFilter<"ProjectOwner"> | string
    company?: StringNullableFilter<"ProjectOwner"> | string | null
    phone?: StringFilter<"ProjectOwner"> | string
    address?: StringFilter<"ProjectOwner"> | string
    createdAt?: DateTimeFilter<"ProjectOwner"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectOwner"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type ProjectOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectOwnerCountOrderByAggregateInput
    _avg?: ProjectOwnerAvgOrderByAggregateInput
    _max?: ProjectOwnerMaxOrderByAggregateInput
    _min?: ProjectOwnerMinOrderByAggregateInput
    _sum?: ProjectOwnerSumOrderByAggregateInput
  }

  export type ProjectOwnerScalarWhereWithAggregatesInput = {
    AND?: ProjectOwnerScalarWhereWithAggregatesInput | ProjectOwnerScalarWhereWithAggregatesInput[]
    OR?: ProjectOwnerScalarWhereWithAggregatesInput[]
    NOT?: ProjectOwnerScalarWhereWithAggregatesInput | ProjectOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectOwner"> | number
    name?: StringWithAggregatesFilter<"ProjectOwner"> | string
    company?: StringNullableWithAggregatesFilter<"ProjectOwner"> | string | null
    email?: StringWithAggregatesFilter<"ProjectOwner"> | string
    phone?: StringWithAggregatesFilter<"ProjectOwner"> | string
    address?: StringWithAggregatesFilter<"ProjectOwner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectOwner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectOwner"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    categories?: JsonFilter<"Project">
    ownerId?: IntFilter<"Project"> | number
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeFilter<"Project"> | Date | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completion?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<ProjectOwnerScalarRelationFilter, ProjectOwnerWhereInput>
    assignments?: ProjectAssignmentListRelationFilter
    phases?: ProjectPhaseListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    ownerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    completion?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: ProjectOwnerOrderByWithRelationInput
    assignments?: ProjectAssignmentOrderByRelationAggregateInput
    phases?: ProjectPhaseOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    categories?: JsonFilter<"Project">
    ownerId?: IntFilter<"Project"> | number
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeFilter<"Project"> | Date | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completion?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<ProjectOwnerScalarRelationFilter, ProjectOwnerWhereInput>
    assignments?: ProjectAssignmentListRelationFilter
    phases?: ProjectPhaseListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    ownerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    completion?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    categories?: JsonWithAggregatesFilter<"Project">
    ownerId?: IntWithAggregatesFilter<"Project"> | number
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    completion?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectAssignmentWhereInput = {
    AND?: ProjectAssignmentWhereInput | ProjectAssignmentWhereInput[]
    OR?: ProjectAssignmentWhereInput[]
    NOT?: ProjectAssignmentWhereInput | ProjectAssignmentWhereInput[]
    id?: IntFilter<"ProjectAssignment"> | number
    projectId?: IntFilter<"ProjectAssignment"> | number
    userId?: IntFilter<"ProjectAssignment"> | number
    roleInProject?: EnumProjectRoleTypeFilter<"ProjectAssignment"> | $Enums.ProjectRoleType
    assignedAt?: DateTimeFilter<"ProjectAssignment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleInProject?: SortOrder
    assignedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_userId_roleInProject?: ProjectAssignmentProjectIdUserIdRoleInProjectCompoundUniqueInput
    AND?: ProjectAssignmentWhereInput | ProjectAssignmentWhereInput[]
    OR?: ProjectAssignmentWhereInput[]
    NOT?: ProjectAssignmentWhereInput | ProjectAssignmentWhereInput[]
    projectId?: IntFilter<"ProjectAssignment"> | number
    userId?: IntFilter<"ProjectAssignment"> | number
    roleInProject?: EnumProjectRoleTypeFilter<"ProjectAssignment"> | $Enums.ProjectRoleType
    assignedAt?: DateTimeFilter<"ProjectAssignment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId_roleInProject">

  export type ProjectAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleInProject?: SortOrder
    assignedAt?: SortOrder
    _count?: ProjectAssignmentCountOrderByAggregateInput
    _avg?: ProjectAssignmentAvgOrderByAggregateInput
    _max?: ProjectAssignmentMaxOrderByAggregateInput
    _min?: ProjectAssignmentMinOrderByAggregateInput
    _sum?: ProjectAssignmentSumOrderByAggregateInput
  }

  export type ProjectAssignmentScalarWhereWithAggregatesInput = {
    AND?: ProjectAssignmentScalarWhereWithAggregatesInput | ProjectAssignmentScalarWhereWithAggregatesInput[]
    OR?: ProjectAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ProjectAssignmentScalarWhereWithAggregatesInput | ProjectAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectAssignment"> | number
    projectId?: IntWithAggregatesFilter<"ProjectAssignment"> | number
    userId?: IntWithAggregatesFilter<"ProjectAssignment"> | number
    roleInProject?: EnumProjectRoleTypeWithAggregatesFilter<"ProjectAssignment"> | $Enums.ProjectRoleType
    assignedAt?: DateTimeWithAggregatesFilter<"ProjectAssignment"> | Date | string
  }

  export type ProjectPhaseWhereInput = {
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    id?: IntFilter<"ProjectPhase"> | number
    name?: StringFilter<"ProjectPhase"> | string
    startDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    endDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: IntFilter<"ProjectPhase"> | number
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectPhaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_startDate_endDate?: ProjectPhaseProjectIdStartDateEndDateCompoundUniqueInput
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    name?: StringFilter<"ProjectPhase"> | string
    startDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    endDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: IntFilter<"ProjectPhase"> | number
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_startDate_endDate">

  export type ProjectPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectPhaseCountOrderByAggregateInput
    _avg?: ProjectPhaseAvgOrderByAggregateInput
    _max?: ProjectPhaseMaxOrderByAggregateInput
    _min?: ProjectPhaseMinOrderByAggregateInput
    _sum?: ProjectPhaseSumOrderByAggregateInput
  }

  export type ProjectPhaseScalarWhereWithAggregatesInput = {
    AND?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    OR?: ProjectPhaseScalarWhereWithAggregatesInput[]
    NOT?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectPhase"> | number
    name?: StringWithAggregatesFilter<"ProjectPhase"> | string
    startDate?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
    projectId?: IntWithAggregatesFilter<"ProjectPhase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    projectId?: IntFilter<"Ticket"> | number
    type?: EnumTicketTypeFilter<"Ticket"> | $Enums.TicketType
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    requesterId?: IntFilter<"Ticket"> | number
    startDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignees?: TicketAssigneeListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    requesterId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
    assignees?: TicketAssigneeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    projectId?: IntFilter<"Ticket"> | number
    type?: EnumTicketTypeFilter<"Ticket"> | $Enums.TicketType
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    requesterId?: IntFilter<"Ticket"> | number
    startDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignees?: TicketAssigneeListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    requesterId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    projectId?: IntWithAggregatesFilter<"Ticket"> | number
    type?: EnumTicketTypeWithAggregatesFilter<"Ticket"> | $Enums.TicketType
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    requesterId?: IntWithAggregatesFilter<"Ticket"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketAssigneeWhereInput = {
    AND?: TicketAssigneeWhereInput | TicketAssigneeWhereInput[]
    OR?: TicketAssigneeWhereInput[]
    NOT?: TicketAssigneeWhereInput | TicketAssigneeWhereInput[]
    id?: IntFilter<"TicketAssignee"> | number
    ticketId?: IntFilter<"TicketAssignee"> | number
    userId?: IntFilter<"TicketAssignee"> | number
    assignedAt?: DateTimeFilter<"TicketAssignee"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketAssigneeOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TicketAssigneeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticketId_userId?: TicketAssigneeTicketIdUserIdCompoundUniqueInput
    AND?: TicketAssigneeWhereInput | TicketAssigneeWhereInput[]
    OR?: TicketAssigneeWhereInput[]
    NOT?: TicketAssigneeWhereInput | TicketAssigneeWhereInput[]
    ticketId?: IntFilter<"TicketAssignee"> | number
    userId?: IntFilter<"TicketAssignee"> | number
    assignedAt?: DateTimeFilter<"TicketAssignee"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ticketId_userId">

  export type TicketAssigneeOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: TicketAssigneeCountOrderByAggregateInput
    _avg?: TicketAssigneeAvgOrderByAggregateInput
    _max?: TicketAssigneeMaxOrderByAggregateInput
    _min?: TicketAssigneeMinOrderByAggregateInput
    _sum?: TicketAssigneeSumOrderByAggregateInput
  }

  export type TicketAssigneeScalarWhereWithAggregatesInput = {
    AND?: TicketAssigneeScalarWhereWithAggregatesInput | TicketAssigneeScalarWhereWithAggregatesInput[]
    OR?: TicketAssigneeScalarWhereWithAggregatesInput[]
    NOT?: TicketAssigneeScalarWhereWithAggregatesInput | TicketAssigneeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketAssignee"> | number
    ticketId?: IntWithAggregatesFilter<"TicketAssignee"> | number
    userId?: IntWithAggregatesFilter<"TicketAssignee"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"TicketAssignee"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    ticketId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    ticketId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    ticketId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    message?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: IntFilter<"Attachment"> | number
    ticketId?: IntFilter<"Attachment"> | number
    userId?: IntFilter<"Attachment"> | number
    fileName?: StringFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    mimeType?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    ticketId?: IntFilter<"Attachment"> | number
    userId?: IntFilter<"Attachment"> | number
    fileName?: StringFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    mimeType?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachment"> | number
    ticketId?: IntWithAggregatesFilter<"Attachment"> | number
    userId?: IntWithAggregatesFilter<"Attachment"> | number
    fileName?: StringWithAggregatesFilter<"Attachment"> | string
    filePath?: StringWithAggregatesFilter<"Attachment"> | string
    fileSize?: IntWithAggregatesFilter<"Attachment"> | number
    mimeType?: StringWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    recipientId?: IntFilter<"Notification"> | number
    targetType?: EnumNotificationTargetTypeFilter<"Notification"> | $Enums.NotificationTargetType
    targetId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    emailText?: StringNullableFilter<"Notification"> | string | null
    emailFrom?: StringNullableFilter<"Notification"> | string | null
    emailReplyTo?: StringNullableFilter<"Notification"> | string | null
    state?: EnumNotificationStateFilter<"Notification"> | $Enums.NotificationState
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotifyStatusTypeNullableFilter<"Notification"> | $Enums.NotifyStatusType | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    emailError?: StringNullableFilter<"Notification"> | string | null
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrderInput | SortOrder
    message?: SortOrder
    subject?: SortOrderInput | SortOrder
    emailText?: SortOrderInput | SortOrder
    emailFrom?: SortOrderInput | SortOrder
    emailReplyTo?: SortOrderInput | SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    emailError?: SortOrderInput | SortOrder
    recipient?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    recipientId?: IntFilter<"Notification"> | number
    targetType?: EnumNotificationTargetTypeFilter<"Notification"> | $Enums.NotificationTargetType
    targetId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    emailText?: StringNullableFilter<"Notification"> | string | null
    emailFrom?: StringNullableFilter<"Notification"> | string | null
    emailReplyTo?: StringNullableFilter<"Notification"> | string | null
    state?: EnumNotificationStateFilter<"Notification"> | $Enums.NotificationState
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotifyStatusTypeNullableFilter<"Notification"> | $Enums.NotifyStatusType | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    emailError?: StringNullableFilter<"Notification"> | string | null
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrderInput | SortOrder
    message?: SortOrder
    subject?: SortOrderInput | SortOrder
    emailText?: SortOrderInput | SortOrder
    emailFrom?: SortOrderInput | SortOrder
    emailReplyTo?: SortOrderInput | SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    emailError?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    recipientId?: IntWithAggregatesFilter<"Notification"> | number
    targetType?: EnumNotificationTargetTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationTargetType
    targetId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    subject?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    emailText?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    emailFrom?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    emailReplyTo?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    state?: EnumNotificationStateWithAggregatesFilter<"Notification"> | $Enums.NotificationState
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    status?: EnumNotifyStatusTypeNullableWithAggregatesFilter<"Notification"> | $Enums.NotifyStatusType | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    emailError?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    targetType?: EnumActivityTargetTypeFilter<"ActivityLog"> | $Enums.ActivityTargetType
    targetId?: IntFilter<"ActivityLog"> | number
    details?: JsonNullableFilter<"ActivityLog">
    occurredAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    details?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    targetType?: EnumActivityTargetTypeFilter<"ActivityLog"> | $Enums.ActivityTargetType
    targetId?: IntFilter<"ActivityLog"> | number
    details?: JsonNullableFilter<"ActivityLog">
    occurredAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    details?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    userId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    targetType?: EnumActivityTargetTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityTargetType
    targetId?: IntWithAggregatesFilter<"ActivityLog"> | number
    details?: JsonNullableWithAggregatesFilter<"ActivityLog">
    occurredAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectOwnerCreateInput = {
    name: string
    company?: string | null
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type ProjectOwnerUncheckedCreateInput = {
    id?: number
    name: string
    company?: string | null
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ProjectOwnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type ProjectOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ProjectOwnerCreateManyInput = {
    id?: number
    name: string
    company?: string | null
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectOwnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProjectOwnerCreateNestedOneWithoutProjectsInput
    assignments?: ProjectAssignmentCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    ownerId: number
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProjectOwnerUpdateOneRequiredWithoutProjectsNestedInput
    assignments?: ProjectAssignmentUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    ownerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ProjectAssignmentUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    ownerId: number
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    ownerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentCreateInput = {
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutProjectAssignmentsInput
  }

  export type ProjectAssignmentUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type ProjectAssignmentUpdateInput = {
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutProjectAssignmentsNestedInput
  }

  export type ProjectAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type ProjectAssignmentUpdateManyMutationInput = {
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPhasesInput
  }

  export type ProjectPhaseUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    projectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPhaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type ProjectPhaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    projectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPhaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTicketsInput
    requester: UserCreateNestedOneWithoutRequestedTicketsInput
    assignees?: TicketAssigneeCreateNestedManyWithoutTicketInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: AttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignees?: TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestedTicketsNestedInput
    assignees?: TicketAssigneeUpdateManyWithoutTicketNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignees?: TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeCreateInput = {
    assignedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAssigneesInput
    user: UserCreateNestedOneWithoutTicketAssigneesInput
  }

  export type TicketAssigneeUncheckedCreateInput = {
    id?: number
    ticketId: number
    userId: number
    assignedAt?: Date | string
  }

  export type TicketAssigneeUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAssigneesNestedInput
    user?: UserUpdateOneRequiredWithoutTicketAssigneesNestedInput
  }

  export type TicketAssigneeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeCreateManyInput = {
    id?: number
    ticketId: number
    userId: number
    assignedAt?: Date | string
  }

  export type TicketAssigneeUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    message: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    ticketId: number
    userId: number
    message: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    ticketId: number
    userId: number
    message: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAttachmentsInput
    user: UserCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: number
    ticketId: number
    userId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAttachmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: number
    ticketId: number
    userId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
    recipient: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    recipientId: number
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
  }

  export type NotificationUpdateInput = {
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    recipientId: number
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogCreateInput = {
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectAssignmentListRelationFilter = {
    every?: ProjectAssignmentWhereInput
    some?: ProjectAssignmentWhereInput
    none?: ProjectAssignmentWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketAssigneeListRelationFilter = {
    every?: TicketAssigneeWhereInput
    some?: TicketAssigneeWhereInput
    none?: TicketAssigneeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ProjectAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAssigneeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectOwnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectOwnerScalarRelationFilter = {
    is?: ProjectOwnerWhereInput
    isNot?: ProjectOwnerWhereInput
  }

  export type ProjectPhaseListRelationFilter = {
    every?: ProjectPhaseWhereInput
    some?: ProjectPhaseWhereInput
    none?: ProjectPhaseWhereInput
  }

  export type ProjectPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    ownerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    completion?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    completion?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    completion?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    completion?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    completion?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumProjectRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRoleType | EnumProjectRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleTypeFilter<$PrismaModel> | $Enums.ProjectRoleType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectAssignmentProjectIdUserIdRoleInProjectCompoundUniqueInput = {
    projectId: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
  }

  export type ProjectAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleInProject?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleInProject?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleInProject?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type EnumProjectRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRoleType | EnumProjectRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleTypeFilter<$PrismaModel>
  }

  export type ProjectPhaseProjectIdStartDateEndDateCompoundUniqueInput = {
    projectId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type ProjectPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type EnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    requesterId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    requesterId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    requesterId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
  }

  export type EnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketAssigneeTicketIdUserIdCompoundUniqueInput = {
    ticketId: number
    userId: number
  }

  export type TicketAssigneeCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TicketAssigneeAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type TicketAssigneeMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TicketAssigneeMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TicketAssigneeSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
  }

  export type EnumNotificationTargetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTargetType | EnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTargetTypeFilter<$PrismaModel> | $Enums.NotificationTargetType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumNotificationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationState | EnumNotificationStateFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStateFilter<$PrismaModel> | $Enums.NotificationState
  }

  export type EnumNotifyStatusTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifyStatusType | EnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel> | $Enums.NotifyStatusType | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    emailText?: SortOrder
    emailFrom?: SortOrder
    emailReplyTo?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    emailError?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    emailText?: SortOrder
    emailFrom?: SortOrder
    emailReplyTo?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    emailError?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    emailText?: SortOrder
    emailFrom?: SortOrder
    emailReplyTo?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    emailError?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    targetId?: SortOrder
  }

  export type EnumNotificationTargetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTargetType | EnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTargetTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationTargetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTargetTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTargetTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumNotificationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationState | EnumNotificationStateFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStateWithAggregatesFilter<$PrismaModel> | $Enums.NotificationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStateFilter<$PrismaModel>
    _max?: NestedEnumNotificationStateFilter<$PrismaModel>
  }

  export type EnumNotifyStatusTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifyStatusType | EnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotifyStatusTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotifyStatusType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel>
  }

  export type EnumActivityTargetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityTargetType | EnumActivityTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTargetTypeFilter<$PrismaModel> | $Enums.ActivityTargetType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    details?: SortOrder
    occurredAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    occurredAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    occurredAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetId?: SortOrder
  }

  export type EnumActivityTargetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityTargetType | EnumActivityTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTargetTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityTargetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTargetTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTargetTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProjectAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput> | ProjectAssignmentCreateWithoutUserInput[] | ProjectAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutUserInput | ProjectAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ProjectAssignmentCreateManyUserInputEnvelope
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutRequesterInput = {
    create?: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput> | TicketCreateWithoutRequesterInput[] | TicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutRequesterInput | TicketCreateOrConnectWithoutRequesterInput[]
    createMany?: TicketCreateManyRequesterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketAssigneeCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput> | TicketAssigneeCreateWithoutUserInput[] | TicketAssigneeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutUserInput | TicketAssigneeCreateOrConnectWithoutUserInput[]
    createMany?: TicketAssigneeCreateManyUserInputEnvelope
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutRecipientInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput> | ProjectAssignmentCreateWithoutUserInput[] | ProjectAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutUserInput | ProjectAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ProjectAssignmentCreateManyUserInputEnvelope
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput> | TicketCreateWithoutRequesterInput[] | TicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutRequesterInput | TicketCreateOrConnectWithoutRequesterInput[]
    createMany?: TicketCreateManyRequesterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketAssigneeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput> | TicketAssigneeCreateWithoutUserInput[] | TicketAssigneeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutUserInput | TicketAssigneeCreateOrConnectWithoutUserInput[]
    createMany?: TicketAssigneeCreateManyUserInputEnvelope
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput> | ProjectAssignmentCreateWithoutUserInput[] | ProjectAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutUserInput | ProjectAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ProjectAssignmentUpsertWithWhereUniqueWithoutUserInput | ProjectAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectAssignmentCreateManyUserInputEnvelope
    set?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    disconnect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    delete?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    update?: ProjectAssignmentUpdateWithWhereUniqueWithoutUserInput | ProjectAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectAssignmentUpdateManyWithWhereWithoutUserInput | ProjectAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput> | TicketCreateWithoutRequesterInput[] | TicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutRequesterInput | TicketCreateOrConnectWithoutRequesterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutRequesterInput | TicketUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: TicketCreateManyRequesterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutRequesterInput | TicketUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutRequesterInput | TicketUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketAssigneeUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput> | TicketAssigneeCreateWithoutUserInput[] | TicketAssigneeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutUserInput | TicketAssigneeCreateOrConnectWithoutUserInput[]
    upsert?: TicketAssigneeUpsertWithWhereUniqueWithoutUserInput | TicketAssigneeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketAssigneeCreateManyUserInputEnvelope
    set?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    disconnect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    delete?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    update?: TicketAssigneeUpdateWithWhereUniqueWithoutUserInput | TicketAssigneeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketAssigneeUpdateManyWithWhereWithoutUserInput | TicketAssigneeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUserInput | AttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUserInput | AttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUserInput | AttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRecipientInput | NotificationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRecipientInput | NotificationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRecipientInput | NotificationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput> | ProjectAssignmentCreateWithoutUserInput[] | ProjectAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutUserInput | ProjectAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ProjectAssignmentUpsertWithWhereUniqueWithoutUserInput | ProjectAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectAssignmentCreateManyUserInputEnvelope
    set?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    disconnect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    delete?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    update?: ProjectAssignmentUpdateWithWhereUniqueWithoutUserInput | ProjectAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectAssignmentUpdateManyWithWhereWithoutUserInput | ProjectAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput> | TicketCreateWithoutRequesterInput[] | TicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutRequesterInput | TicketCreateOrConnectWithoutRequesterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutRequesterInput | TicketUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: TicketCreateManyRequesterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutRequesterInput | TicketUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutRequesterInput | TicketUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput> | TicketAssigneeCreateWithoutUserInput[] | TicketAssigneeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutUserInput | TicketAssigneeCreateOrConnectWithoutUserInput[]
    upsert?: TicketAssigneeUpsertWithWhereUniqueWithoutUserInput | TicketAssigneeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketAssigneeCreateManyUserInputEnvelope
    set?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    disconnect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    delete?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    update?: TicketAssigneeUpdateWithWhereUniqueWithoutUserInput | TicketAssigneeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketAssigneeUpdateManyWithWhereWithoutUserInput | TicketAssigneeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUserInput | AttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUserInput | AttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUserInput | AttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRecipientInput | NotificationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRecipientInput | NotificationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRecipientInput | NotificationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectOwnerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectOwnerCreateWithoutProjectsInput, ProjectOwnerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectOwnerCreateOrConnectWithoutProjectsInput
    connect?: ProjectOwnerWhereUniqueInput
  }

  export type ProjectAssignmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput> | ProjectAssignmentCreateWithoutProjectInput[] | ProjectAssignmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutProjectInput | ProjectAssignmentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssignmentCreateManyProjectInputEnvelope
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
  }

  export type ProjectPhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ProjectAssignmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput> | ProjectAssignmentCreateWithoutProjectInput[] | ProjectAssignmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutProjectInput | ProjectAssignmentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssignmentCreateManyProjectInputEnvelope
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
  }

  export type ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProjectOwnerUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectOwnerCreateWithoutProjectsInput, ProjectOwnerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectOwnerCreateOrConnectWithoutProjectsInput
    upsert?: ProjectOwnerUpsertWithoutProjectsInput
    connect?: ProjectOwnerWhereUniqueInput
    update?: XOR<XOR<ProjectOwnerUpdateToOneWithWhereWithoutProjectsInput, ProjectOwnerUpdateWithoutProjectsInput>, ProjectOwnerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectAssignmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput> | ProjectAssignmentCreateWithoutProjectInput[] | ProjectAssignmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutProjectInput | ProjectAssignmentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssignmentUpsertWithWhereUniqueWithoutProjectInput | ProjectAssignmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssignmentCreateManyProjectInputEnvelope
    set?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    disconnect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    delete?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    update?: ProjectAssignmentUpdateWithWhereUniqueWithoutProjectInput | ProjectAssignmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssignmentUpdateManyWithWhereWithoutProjectInput | ProjectAssignmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
  }

  export type ProjectPhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProjectInput | TicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProjectInput | TicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProjectInput | TicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ProjectAssignmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput> | ProjectAssignmentCreateWithoutProjectInput[] | ProjectAssignmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssignmentCreateOrConnectWithoutProjectInput | ProjectAssignmentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssignmentUpsertWithWhereUniqueWithoutProjectInput | ProjectAssignmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssignmentCreateManyProjectInputEnvelope
    set?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    disconnect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    delete?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    connect?: ProjectAssignmentWhereUniqueInput | ProjectAssignmentWhereUniqueInput[]
    update?: ProjectAssignmentUpdateWithWhereUniqueWithoutProjectInput | ProjectAssignmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssignmentUpdateManyWithWhereWithoutProjectInput | ProjectAssignmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProjectInput | TicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProjectInput | TicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProjectInput | TicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ProjectCreateWithoutAssignmentsInput, ProjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssignmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectAssignmentsInput = {
    create?: XOR<UserCreateWithoutProjectAssignmentsInput, UserUncheckedCreateWithoutProjectAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProjectRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRoleType
  }

  export type ProjectUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutAssignmentsInput, ProjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssignmentsInput
    upsert?: ProjectUpsertWithoutAssignmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAssignmentsInput, ProjectUpdateWithoutAssignmentsInput>, ProjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutProjectAssignmentsInput, UserUncheckedCreateWithoutProjectAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectAssignmentsInput
    upsert?: UserUpsertWithoutProjectAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectAssignmentsInput, UserUpdateWithoutProjectAssignmentsInput>, UserUncheckedUpdateWithoutProjectAssignmentsInput>
  }

  export type ProjectCreateNestedOneWithoutPhasesInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    upsert?: ProjectUpsertWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPhasesInput, ProjectUpdateWithoutPhasesInput>, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTicketsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestedTicketsInput = {
    create?: XOR<UserCreateWithoutRequestedTicketsInput, UserUncheckedCreateWithoutRequestedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketAssigneeCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput> | TicketAssigneeCreateWithoutTicketInput[] | TicketAssigneeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutTicketInput | TicketAssigneeCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssigneeCreateManyTicketInputEnvelope
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutTicketInput = {
    create?: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput> | AttachmentCreateWithoutTicketInput[] | AttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput | AttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: AttachmentCreateManyTicketInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput> | TicketAssigneeCreateWithoutTicketInput[] | TicketAssigneeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutTicketInput | TicketAssigneeCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssigneeCreateManyTicketInputEnvelope
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput> | AttachmentCreateWithoutTicketInput[] | AttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput | AttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: AttachmentCreateManyTicketInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type EnumTicketTypeFieldUpdateOperationsInput = {
    set?: $Enums.TicketType
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTicketsInput
    upsert?: ProjectUpsertWithoutTicketsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTicketsInput, ProjectUpdateWithoutTicketsInput>, ProjectUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutRequestedTicketsInput, UserUncheckedCreateWithoutRequestedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedTicketsInput
    upsert?: UserUpsertWithoutRequestedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestedTicketsInput, UserUpdateWithoutRequestedTicketsInput>, UserUncheckedUpdateWithoutRequestedTicketsInput>
  }

  export type TicketAssigneeUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput> | TicketAssigneeCreateWithoutTicketInput[] | TicketAssigneeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutTicketInput | TicketAssigneeCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssigneeUpsertWithWhereUniqueWithoutTicketInput | TicketAssigneeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssigneeCreateManyTicketInputEnvelope
    set?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    disconnect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    delete?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    update?: TicketAssigneeUpdateWithWhereUniqueWithoutTicketInput | TicketAssigneeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssigneeUpdateManyWithWhereWithoutTicketInput | TicketAssigneeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput> | AttachmentCreateWithoutTicketInput[] | AttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput | AttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTicketInput | AttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: AttachmentCreateManyTicketInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTicketInput | AttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTicketInput | AttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput> | TicketAssigneeCreateWithoutTicketInput[] | TicketAssigneeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssigneeCreateOrConnectWithoutTicketInput | TicketAssigneeCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssigneeUpsertWithWhereUniqueWithoutTicketInput | TicketAssigneeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssigneeCreateManyTicketInputEnvelope
    set?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    disconnect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    delete?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    connect?: TicketAssigneeWhereUniqueInput | TicketAssigneeWhereUniqueInput[]
    update?: TicketAssigneeUpdateWithWhereUniqueWithoutTicketInput | TicketAssigneeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssigneeUpdateManyWithWhereWithoutTicketInput | TicketAssigneeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput> | AttachmentCreateWithoutTicketInput[] | AttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput | AttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTicketInput | AttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: AttachmentCreateManyTicketInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTicketInput | AttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTicketInput | AttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutAssigneesInput = {
    create?: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssigneesInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketAssigneesInput = {
    create?: XOR<UserCreateWithoutTicketAssigneesInput, UserUncheckedCreateWithoutTicketAssigneesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketAssigneesInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutAssigneesNestedInput = {
    create?: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssigneesInput
    upsert?: TicketUpsertWithoutAssigneesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAssigneesInput, TicketUpdateWithoutAssigneesInput>, TicketUncheckedUpdateWithoutAssigneesInput>
  }

  export type UserUpdateOneRequiredWithoutTicketAssigneesNestedInput = {
    create?: XOR<UserCreateWithoutTicketAssigneesInput, UserUncheckedCreateWithoutTicketAssigneesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketAssigneesInput
    upsert?: UserUpsertWithoutTicketAssigneesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketAssigneesInput, UserUpdateWithoutTicketAssigneesInput>, UserUncheckedUpdateWithoutTicketAssigneesInput>
  }

  export type TicketCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    upsert?: TicketUpsertWithoutCommentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutCommentsInput, TicketUpdateWithoutCommentsInput>, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TicketCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttachmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    upsert?: TicketUpsertWithoutAttachmentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAttachmentsInput, TicketUpdateWithoutAttachmentsInput>, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttachmentsInput
    upsert?: UserUpsertWithoutAttachmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttachmentsInput, UserUpdateWithoutAttachmentsInput>, UserUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTargetTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationTargetType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumNotificationStateFieldUpdateOperationsInput = {
    set?: $Enums.NotificationState
  }

  export type NullableEnumNotifyStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotifyStatusType | null
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTargetTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityTargetType
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumProjectRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRoleType | EnumProjectRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleTypeFilter<$PrismaModel> | $Enums.ProjectRoleType
  }

  export type NestedEnumProjectRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRoleType | EnumProjectRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRoleType[] | ListEnumProjectRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleTypeFilter<$PrismaModel>
  }

  export type NestedEnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTargetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTargetType | EnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTargetTypeFilter<$PrismaModel> | $Enums.NotificationTargetType
  }

  export type NestedEnumNotificationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationState | EnumNotificationStateFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStateFilter<$PrismaModel> | $Enums.NotificationState
  }

  export type NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifyStatusType | EnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel> | $Enums.NotifyStatusType | null
  }

  export type NestedEnumNotificationTargetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTargetType | EnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTargetType[] | ListEnumNotificationTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTargetTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationTargetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTargetTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTargetTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumNotificationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationState | EnumNotificationStateFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationState[] | ListEnumNotificationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStateWithAggregatesFilter<$PrismaModel> | $Enums.NotificationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStateFilter<$PrismaModel>
    _max?: NestedEnumNotificationStateFilter<$PrismaModel>
  }

  export type NestedEnumNotifyStatusTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifyStatusType | EnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotifyStatusType[] | ListEnumNotifyStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotifyStatusTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotifyStatusType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotifyStatusTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityTargetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityTargetType | EnumActivityTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTargetTypeFilter<$PrismaModel> | $Enums.ActivityTargetType
  }

  export type NestedEnumActivityTargetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityTargetType | EnumActivityTargetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityTargetType[] | ListEnumActivityTargetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTargetTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityTargetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTargetTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTargetTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectAssignmentCreateWithoutUserInput = {
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssignmentsInput
  }

  export type ProjectAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type ProjectAssignmentCreateOrConnectWithoutUserInput = {
    where: ProjectAssignmentWhereUniqueInput
    create: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ProjectAssignmentCreateManyUserInputEnvelope = {
    data: ProjectAssignmentCreateManyUserInput | ProjectAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutRequesterInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTicketsInput
    assignees?: TicketAssigneeCreateNestedManyWithoutTicketInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: AttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutRequesterInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignees?: TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutRequesterInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput>
  }

  export type TicketCreateManyRequesterInputEnvelope = {
    data: TicketCreateManyRequesterInput | TicketCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type TicketAssigneeCreateWithoutUserInput = {
    assignedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAssigneesInput
  }

  export type TicketAssigneeUncheckedCreateWithoutUserInput = {
    id?: number
    ticketId: number
    assignedAt?: Date | string
  }

  export type TicketAssigneeCreateOrConnectWithoutUserInput = {
    where: TicketAssigneeWhereUniqueInput
    create: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput>
  }

  export type TicketAssigneeCreateManyUserInputEnvelope = {
    data: TicketAssigneeCreateManyUserInput | TicketAssigneeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    ticketId: number
    message: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutUserInput = {
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutUserInput = {
    id?: number
    ticketId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput>
  }

  export type AttachmentCreateManyUserInputEnvelope = {
    data: AttachmentCreateManyUserInput | AttachmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutRecipientInput = {
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
  }

  export type NotificationUncheckedCreateWithoutRecipientInput = {
    id?: number
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
  }

  export type NotificationCreateOrConnectWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput>
  }

  export type NotificationCreateManyRecipientInputEnvelope = {
    data: NotificationCreateManyRecipientInput | NotificationCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectAssignmentWhereUniqueInput
    update: XOR<ProjectAssignmentUpdateWithoutUserInput, ProjectAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectAssignmentCreateWithoutUserInput, ProjectAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ProjectAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectAssignmentWhereUniqueInput
    data: XOR<ProjectAssignmentUpdateWithoutUserInput, ProjectAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ProjectAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ProjectAssignmentScalarWhereInput
    data: XOR<ProjectAssignmentUpdateManyMutationInput, ProjectAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectAssignmentScalarWhereInput = {
    AND?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
    OR?: ProjectAssignmentScalarWhereInput[]
    NOT?: ProjectAssignmentScalarWhereInput | ProjectAssignmentScalarWhereInput[]
    id?: IntFilter<"ProjectAssignment"> | number
    projectId?: IntFilter<"ProjectAssignment"> | number
    userId?: IntFilter<"ProjectAssignment"> | number
    roleInProject?: EnumProjectRoleTypeFilter<"ProjectAssignment"> | $Enums.ProjectRoleType
    assignedAt?: DateTimeFilter<"ProjectAssignment"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutRequesterInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutRequesterInput, TicketUncheckedUpdateWithoutRequesterInput>
    create: XOR<TicketCreateWithoutRequesterInput, TicketUncheckedCreateWithoutRequesterInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutRequesterInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutRequesterInput, TicketUncheckedUpdateWithoutRequesterInput>
  }

  export type TicketUpdateManyWithWhereWithoutRequesterInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutRequesterInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    projectId?: IntFilter<"Ticket"> | number
    type?: EnumTicketTypeFilter<"Ticket"> | $Enums.TicketType
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    requesterId?: IntFilter<"Ticket"> | number
    startDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketAssigneeUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketAssigneeWhereUniqueInput
    update: XOR<TicketAssigneeUpdateWithoutUserInput, TicketAssigneeUncheckedUpdateWithoutUserInput>
    create: XOR<TicketAssigneeCreateWithoutUserInput, TicketAssigneeUncheckedCreateWithoutUserInput>
  }

  export type TicketAssigneeUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketAssigneeWhereUniqueInput
    data: XOR<TicketAssigneeUpdateWithoutUserInput, TicketAssigneeUncheckedUpdateWithoutUserInput>
  }

  export type TicketAssigneeUpdateManyWithWhereWithoutUserInput = {
    where: TicketAssigneeScalarWhereInput
    data: XOR<TicketAssigneeUpdateManyMutationInput, TicketAssigneeUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketAssigneeScalarWhereInput = {
    AND?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
    OR?: TicketAssigneeScalarWhereInput[]
    NOT?: TicketAssigneeScalarWhereInput | TicketAssigneeScalarWhereInput[]
    id?: IntFilter<"TicketAssignee"> | number
    ticketId?: IntFilter<"TicketAssignee"> | number
    userId?: IntFilter<"TicketAssignee"> | number
    assignedAt?: DateTimeFilter<"TicketAssignee"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    ticketId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type AttachmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutUserInput, AttachmentUncheckedUpdateWithoutUserInput>
    create: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutUserInput, AttachmentUncheckedUpdateWithoutUserInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutUserInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: IntFilter<"Attachment"> | number
    ticketId?: IntFilter<"Attachment"> | number
    userId?: IntFilter<"Attachment"> | number
    fileName?: StringFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    mimeType?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutRecipientInput, NotificationUncheckedUpdateWithoutRecipientInput>
    create: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutRecipientInput, NotificationUncheckedUpdateWithoutRecipientInput>
  }

  export type NotificationUpdateManyWithWhereWithoutRecipientInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutRecipientInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    recipientId?: IntFilter<"Notification"> | number
    targetType?: EnumNotificationTargetTypeFilter<"Notification"> | $Enums.NotificationTargetType
    targetId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    emailText?: StringNullableFilter<"Notification"> | string | null
    emailFrom?: StringNullableFilter<"Notification"> | string | null
    emailReplyTo?: StringNullableFilter<"Notification"> | string | null
    state?: EnumNotificationStateFilter<"Notification"> | $Enums.NotificationState
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotifyStatusTypeNullableFilter<"Notification"> | $Enums.NotifyStatusType | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    emailError?: StringNullableFilter<"Notification"> | string | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    targetType?: EnumActivityTargetTypeFilter<"ActivityLog"> | $Enums.ActivityTargetType
    targetId?: IntFilter<"ActivityLog"> | number
    details?: JsonNullableFilter<"ActivityLog">
    occurredAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ProjectCreateWithoutOwnerInput = {
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ProjectAssignmentCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    categories?: JsonFilter<"Project">
    ownerId?: IntFilter<"Project"> | number
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeFilter<"Project"> | Date | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completion?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOwnerCreateWithoutProjectsInput = {
    name: string
    company?: string | null
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectOwnerUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    company?: string | null
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectOwnerCreateOrConnectWithoutProjectsInput = {
    where: ProjectOwnerWhereUniqueInput
    create: XOR<ProjectOwnerCreateWithoutProjectsInput, ProjectOwnerUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectAssignmentCreateWithoutProjectInput = {
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectAssignmentsInput
  }

  export type ProjectAssignmentUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type ProjectAssignmentCreateOrConnectWithoutProjectInput = {
    where: ProjectAssignmentWhereUniqueInput
    create: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssignmentCreateManyProjectInputEnvelope = {
    data: ProjectAssignmentCreateManyProjectInput | ProjectAssignmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectPhaseCreateWithoutProjectInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPhaseUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPhaseCreateOrConnectWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseCreateManyProjectInputEnvelope = {
    data: ProjectPhaseCreateManyProjectInput | ProjectPhaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutProjectInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestedTicketsInput
    assignees?: TicketAssigneeCreateNestedManyWithoutTicketInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: AttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutProjectInput = {
    id?: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignees?: TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutProjectInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput>
  }

  export type TicketCreateManyProjectInputEnvelope = {
    data: TicketCreateManyProjectInput | TicketCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectOwnerUpsertWithoutProjectsInput = {
    update: XOR<ProjectOwnerUpdateWithoutProjectsInput, ProjectOwnerUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectOwnerCreateWithoutProjectsInput, ProjectOwnerUncheckedCreateWithoutProjectsInput>
    where?: ProjectOwnerWhereInput
  }

  export type ProjectOwnerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectOwnerWhereInput
    data: XOR<ProjectOwnerUpdateWithoutProjectsInput, ProjectOwnerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectOwnerUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectOwnerUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssignmentWhereUniqueInput
    update: XOR<ProjectAssignmentUpdateWithoutProjectInput, ProjectAssignmentUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectAssignmentCreateWithoutProjectInput, ProjectAssignmentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssignmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssignmentWhereUniqueInput
    data: XOR<ProjectAssignmentUpdateWithoutProjectInput, ProjectAssignmentUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAssignmentUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectAssignmentScalarWhereInput
    data: XOR<ProjectAssignmentUpdateManyMutationInput, ProjectAssignmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    update: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    data: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectPhaseScalarWhereInput
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPhaseScalarWhereInput = {
    AND?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    OR?: ProjectPhaseScalarWhereInput[]
    NOT?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    id?: IntFilter<"ProjectPhase"> | number
    name?: StringFilter<"ProjectPhase"> | string
    startDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    endDate?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: IntFilter<"ProjectPhase"> | number
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutProjectInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutProjectInput, TicketUncheckedUpdateWithoutProjectInput>
    create: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutProjectInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutProjectInput, TicketUncheckedUpdateWithoutProjectInput>
  }

  export type TicketUpdateManyWithWhereWithoutProjectInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutAssignmentsInput = {
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProjectOwnerCreateNestedOneWithoutProjectsInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    ownerId: number
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAssignmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAssignmentsInput, ProjectUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutProjectAssignmentsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectAssignmentsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectAssignmentsInput, UserUncheckedCreateWithoutProjectAssignmentsInput>
  }

  export type ProjectUpsertWithoutAssignmentsInput = {
    update: XOR<ProjectUpdateWithoutAssignmentsInput, ProjectUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ProjectCreateWithoutAssignmentsInput, ProjectUncheckedCreateWithoutAssignmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAssignmentsInput, ProjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ProjectUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProjectOwnerUpdateOneRequiredWithoutProjectsNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    ownerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectAssignmentsInput = {
    update: XOR<UserUpdateWithoutProjectAssignmentsInput, UserUncheckedUpdateWithoutProjectAssignmentsInput>
    create: XOR<UserCreateWithoutProjectAssignmentsInput, UserUncheckedCreateWithoutProjectAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectAssignmentsInput, UserUncheckedUpdateWithoutProjectAssignmentsInput>
  }

  export type UserUpdateWithoutProjectAssignmentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutPhasesInput = {
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProjectOwnerCreateNestedOneWithoutProjectsInput
    assignments?: ProjectAssignmentCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPhasesInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    ownerId: number
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
  }

  export type ProjectUpsertWithoutPhasesInput = {
    update: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPhasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectUpdateWithoutPhasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProjectOwnerUpdateOneRequiredWithoutProjectsNestedInput
    assignments?: ProjectAssignmentUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPhasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    ownerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ProjectAssignmentUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTicketsInput = {
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProjectOwnerCreateNestedOneWithoutProjectsInput
    assignments?: ProjectAssignmentCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    ownerId: number
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTicketsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutRequestedTicketsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestedTicketsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedTicketsInput, UserUncheckedCreateWithoutRequestedTicketsInput>
  }

  export type TicketAssigneeCreateWithoutTicketInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutTicketAssigneesInput
  }

  export type TicketAssigneeUncheckedCreateWithoutTicketInput = {
    id?: number
    userId: number
    assignedAt?: Date | string
  }

  export type TicketAssigneeCreateOrConnectWithoutTicketInput = {
    where: TicketAssigneeWhereUniqueInput
    create: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssigneeCreateManyTicketInputEnvelope = {
    data: TicketAssigneeCreateManyTicketInput | TicketAssigneeCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutTicketInput = {
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTicketInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutTicketInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentCreateManyTicketInputEnvelope = {
    data: CommentCreateManyTicketInput | CommentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutTicketInput = {
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutTicketInput = {
    id?: number
    userId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutTicketInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput>
  }

  export type AttachmentCreateManyTicketInputEnvelope = {
    data: AttachmentCreateManyTicketInput | AttachmentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutTicketsInput = {
    update: XOR<ProjectUpdateWithoutTicketsInput, ProjectUncheckedUpdateWithoutTicketsInput>
    create: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTicketsInput, ProjectUncheckedUpdateWithoutTicketsInput>
  }

  export type ProjectUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProjectOwnerUpdateOneRequiredWithoutProjectsNestedInput
    assignments?: ProjectAssignmentUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    ownerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ProjectAssignmentUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutRequestedTicketsInput = {
    update: XOR<UserUpdateWithoutRequestedTicketsInput, UserUncheckedUpdateWithoutRequestedTicketsInput>
    create: XOR<UserCreateWithoutRequestedTicketsInput, UserUncheckedCreateWithoutRequestedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestedTicketsInput, UserUncheckedUpdateWithoutRequestedTicketsInput>
  }

  export type UserUpdateWithoutRequestedTicketsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketAssigneeUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAssigneeWhereUniqueInput
    update: XOR<TicketAssigneeUpdateWithoutTicketInput, TicketAssigneeUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAssigneeCreateWithoutTicketInput, TicketAssigneeUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssigneeUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAssigneeWhereUniqueInput
    data: XOR<TicketAssigneeUpdateWithoutTicketInput, TicketAssigneeUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAssigneeUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAssigneeScalarWhereInput
    data: XOR<TicketAssigneeUpdateManyMutationInput, TicketAssigneeUncheckedUpdateManyWithoutTicketInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
  }

  export type CommentUpdateManyWithWhereWithoutTicketInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTicketInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTicketInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTicketInput, AttachmentUncheckedUpdateWithoutTicketInput>
    create: XOR<AttachmentCreateWithoutTicketInput, AttachmentUncheckedCreateWithoutTicketInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTicketInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTicketInput, AttachmentUncheckedUpdateWithoutTicketInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTicketInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutAssigneesInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTicketsInput
    requester: UserCreateNestedOneWithoutRequestedTicketsInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: AttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAssigneesInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssigneesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
  }

  export type UserCreateWithoutTicketAssigneesInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketAssigneesInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketAssigneesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketAssigneesInput, UserUncheckedCreateWithoutTicketAssigneesInput>
  }

  export type TicketUpsertWithoutAssigneesInput = {
    update: XOR<TicketUpdateWithoutAssigneesInput, TicketUncheckedUpdateWithoutAssigneesInput>
    create: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAssigneesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAssigneesInput, TicketUncheckedUpdateWithoutAssigneesInput>
  }

  export type TicketUpdateWithoutAssigneesInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestedTicketsNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssigneesInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTicketAssigneesInput = {
    update: XOR<UserUpdateWithoutTicketAssigneesInput, UserUncheckedUpdateWithoutTicketAssigneesInput>
    create: XOR<UserCreateWithoutTicketAssigneesInput, UserUncheckedCreateWithoutTicketAssigneesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketAssigneesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketAssigneesInput, UserUncheckedUpdateWithoutTicketAssigneesInput>
  }

  export type UserUpdateWithoutTicketAssigneesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketAssigneesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketCreateWithoutCommentsInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTicketsInput
    requester: UserCreateNestedOneWithoutRequestedTicketsInput
    assignees?: TicketAssigneeCreateNestedManyWithoutTicketInput
    attachments?: AttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCommentsInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignees?: TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCommentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TicketUpsertWithoutCommentsInput = {
    update: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type TicketUpdateWithoutCommentsInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestedTicketsNestedInput
    assignees?: TicketAssigneeUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignees?: TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketCreateWithoutAttachmentsInput = {
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTicketsInput
    requester: UserCreateNestedOneWithoutRequestedTicketsInput
    assignees?: TicketAssigneeCreateNestedManyWithoutTicketInput
    comments?: CommentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignees?: TicketAssigneeUncheckedCreateNestedManyWithoutTicketInput
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAttachmentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
  }

  export type UserCreateWithoutAttachmentsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttachmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
  }

  export type TicketUpsertWithoutAttachmentsInput = {
    update: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketUpdateWithoutAttachmentsInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestedTicketsNestedInput
    assignees?: TicketAssigneeUpdateManyWithoutTicketNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignees?: TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutAttachmentsInput = {
    update: XOR<UserUpdateWithoutAttachmentsInput, UserUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttachmentsInput, UserUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateWithoutAttachmentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentCreateNestedManyWithoutUserInput
    requestedTickets?: TicketCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.RoleType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssignments?: ProjectAssignmentUncheckedCreateNestedManyWithoutUserInput
    requestedTickets?: TicketUncheckedCreateNestedManyWithoutRequesterInput
    ticketAssignees?: TicketAssigneeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssignments?: ProjectAssignmentUncheckedUpdateManyWithoutUserNestedInput
    requestedTickets?: TicketUncheckedUpdateManyWithoutRequesterNestedInput
    ticketAssignees?: TicketAssigneeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type ProjectAssignmentCreateManyUserInput = {
    id?: number
    projectId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type TicketCreateManyRequesterInput = {
    id?: number
    projectId: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketAssigneeCreateManyUserInput = {
    id?: number
    ticketId: number
    assignedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    ticketId: number
    message: string
    createdAt?: Date | string
  }

  export type AttachmentCreateManyUserInput = {
    id?: number
    ticketId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyRecipientInput = {
    id?: number
    targetType: $Enums.NotificationTargetType
    targetId?: number | null
    message: string
    subject?: string | null
    emailText?: string | null
    emailFrom?: string | null
    emailReplyTo?: string | null
    state?: $Enums.NotificationState
    createdAt?: Date | string
    readAt?: Date | string | null
    status?: $Enums.NotifyStatusType | null
    sentAt?: Date | string | null
    emailError?: string | null
  }

  export type ActivityLogCreateManyUserInput = {
    id?: number
    action: string
    targetType: $Enums.ActivityTargetType
    targetId: number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type ProjectAssignmentUpdateWithoutUserInput = {
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ProjectAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutRequesterInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
    assignees?: TicketAssigneeUpdateManyWithoutTicketNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignees?: TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAssigneesNestedInput
  }

  export type TicketAssigneeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutUserInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutRecipientInput = {
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetType?: EnumNotificationTargetTypeFieldUpdateOperationsInput | $Enums.NotificationTargetType
    targetId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    emailText?: NullableStringFieldUpdateOperationsInput | string | null
    emailFrom?: NullableStringFieldUpdateOperationsInput | string | null
    emailReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumNotificationStateFieldUpdateOperationsInput | $Enums.NotificationState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumNotifyStatusTypeFieldUpdateOperationsInput | $Enums.NotifyStatusType | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: EnumActivityTargetTypeFieldUpdateOperationsInput | $Enums.ActivityTargetType
    targetId?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: number
    name: string
    categories: JsonNullValueInput | InputJsonValue
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.ProjectStatus
    completion?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ProjectAssignmentUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ProjectAssignmentUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentCreateManyProjectInput = {
    id?: number
    userId: number
    roleInProject: $Enums.ProjectRoleType
    assignedAt?: Date | string
  }

  export type ProjectPhaseCreateManyProjectInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyProjectInput = {
    id?: number
    type: $Enums.TicketType
    title: string
    description?: string | null
    priority: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    requesterId: number
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAssignmentUpdateWithoutProjectInput = {
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectAssignmentsNestedInput
  }

  export type ProjectAssignmentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssignmentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleInProject?: EnumProjectRoleTypeFieldUpdateOperationsInput | $Enums.ProjectRoleType
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutProjectInput = {
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestedTicketsNestedInput
    assignees?: TicketAssigneeUpdateManyWithoutTicketNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignees?: TicketAssigneeUncheckedUpdateManyWithoutTicketNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    requesterId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeCreateManyTicketInput = {
    id?: number
    userId: number
    assignedAt?: Date | string
  }

  export type CommentCreateManyTicketInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
  }

  export type AttachmentCreateManyTicketInput = {
    id?: number
    userId: number
    fileName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
  }

  export type TicketAssigneeUpdateWithoutTicketInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketAssigneesNestedInput
  }

  export type TicketAssigneeUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssigneeUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutTicketInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutTicketInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}