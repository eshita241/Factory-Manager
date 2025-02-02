
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Sku
 * 
 */
export type Sku = $Result.DefaultSelection<Prisma.$SkuPayload>
/**
 * Model BatchNum
 * 
 */
export type BatchNum = $Result.DefaultSelection<Prisma.$BatchNumPayload>
/**
 * Model CompanySku
 * 
 */
export type CompanySku = $Result.DefaultSelection<Prisma.$CompanySkuPayload>
/**
 * Model CompanySkuBatchNumRelation
 * 
 */
export type CompanySkuBatchNumRelation = $Result.DefaultSelection<Prisma.$CompanySkuBatchNumRelationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sku`: Exposes CRUD operations for the **Sku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skus
    * const skus = await prisma.sku.findMany()
    * ```
    */
  get sku(): Prisma.SkuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchNum`: Exposes CRUD operations for the **BatchNum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchNums
    * const batchNums = await prisma.batchNum.findMany()
    * ```
    */
  get batchNum(): Prisma.BatchNumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companySku`: Exposes CRUD operations for the **CompanySku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySkus
    * const companySkus = await prisma.companySku.findMany()
    * ```
    */
  get companySku(): Prisma.CompanySkuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companySkuBatchNumRelation`: Exposes CRUD operations for the **CompanySkuBatchNumRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySkuBatchNumRelations
    * const companySkuBatchNumRelations = await prisma.companySkuBatchNumRelation.findMany()
    * ```
    */
  get companySkuBatchNumRelation(): Prisma.CompanySkuBatchNumRelationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Company: 'Company',
    Sku: 'Sku',
    BatchNum: 'BatchNum',
    CompanySku: 'CompanySku',
    CompanySkuBatchNumRelation: 'CompanySkuBatchNumRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "company" | "sku" | "batchNum" | "companySku" | "companySkuBatchNumRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Sku: {
        payload: Prisma.$SkuPayload<ExtArgs>
        fields: Prisma.SkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          findFirst: {
            args: Prisma.SkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          findMany: {
            args: Prisma.SkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>[]
          }
          create: {
            args: Prisma.SkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          createMany: {
            args: Prisma.SkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>[]
          }
          delete: {
            args: Prisma.SkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          update: {
            args: Prisma.SkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          deleteMany: {
            args: Prisma.SkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>[]
          }
          upsert: {
            args: Prisma.SkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          aggregate: {
            args: Prisma.SkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSku>
          }
          groupBy: {
            args: Prisma.SkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkuCountArgs<ExtArgs>
            result: $Utils.Optional<SkuCountAggregateOutputType> | number
          }
        }
      }
      BatchNum: {
        payload: Prisma.$BatchNumPayload<ExtArgs>
        fields: Prisma.BatchNumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchNumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchNumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          findFirst: {
            args: Prisma.BatchNumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchNumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          findMany: {
            args: Prisma.BatchNumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>[]
          }
          create: {
            args: Prisma.BatchNumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          createMany: {
            args: Prisma.BatchNumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchNumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>[]
          }
          delete: {
            args: Prisma.BatchNumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          update: {
            args: Prisma.BatchNumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          deleteMany: {
            args: Prisma.BatchNumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchNumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchNumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>[]
          }
          upsert: {
            args: Prisma.BatchNumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchNumPayload>
          }
          aggregate: {
            args: Prisma.BatchNumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchNum>
          }
          groupBy: {
            args: Prisma.BatchNumGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchNumGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchNumCountArgs<ExtArgs>
            result: $Utils.Optional<BatchNumCountAggregateOutputType> | number
          }
        }
      }
      CompanySku: {
        payload: Prisma.$CompanySkuPayload<ExtArgs>
        fields: Prisma.CompanySkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          findFirst: {
            args: Prisma.CompanySkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          findMany: {
            args: Prisma.CompanySkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>[]
          }
          create: {
            args: Prisma.CompanySkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          createMany: {
            args: Prisma.CompanySkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySkuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>[]
          }
          delete: {
            args: Prisma.CompanySkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          update: {
            args: Prisma.CompanySkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          deleteMany: {
            args: Prisma.CompanySkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySkuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>[]
          }
          upsert: {
            args: Prisma.CompanySkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuPayload>
          }
          aggregate: {
            args: Prisma.CompanySkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySku>
          }
          groupBy: {
            args: Prisma.CompanySkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySkuCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySkuCountAggregateOutputType> | number
          }
        }
      }
      CompanySkuBatchNumRelation: {
        payload: Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>
        fields: Prisma.CompanySkuBatchNumRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySkuBatchNumRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySkuBatchNumRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          findFirst: {
            args: Prisma.CompanySkuBatchNumRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySkuBatchNumRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          findMany: {
            args: Prisma.CompanySkuBatchNumRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>[]
          }
          create: {
            args: Prisma.CompanySkuBatchNumRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          createMany: {
            args: Prisma.CompanySkuBatchNumRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySkuBatchNumRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>[]
          }
          delete: {
            args: Prisma.CompanySkuBatchNumRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          update: {
            args: Prisma.CompanySkuBatchNumRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          deleteMany: {
            args: Prisma.CompanySkuBatchNumRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySkuBatchNumRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySkuBatchNumRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>[]
          }
          upsert: {
            args: Prisma.CompanySkuBatchNumRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySkuBatchNumRelationPayload>
          }
          aggregate: {
            args: Prisma.CompanySkuBatchNumRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySkuBatchNumRelation>
          }
          groupBy: {
            args: Prisma.CompanySkuBatchNumRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySkuBatchNumRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySkuBatchNumRelationCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySkuBatchNumRelationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    company?: CompanyOmit
    sku?: SkuOmit
    batchNum?: BatchNumOmit
    companySku?: CompanySkuOmit
    companySkuBatchNumRelation?: CompanySkuBatchNumRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    companySkus: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkus?: boolean | CompanyCountOutputTypeCountCompanySkusArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanySkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuWhereInput
  }


  /**
   * Count Type SkuCountOutputType
   */

  export type SkuCountOutputType = {
    companySkus: number
  }

  export type SkuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkus?: boolean | SkuCountOutputTypeCountCompanySkusArgs
  }

  // Custom InputTypes
  /**
   * SkuCountOutputType without action
   */
  export type SkuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkuCountOutputType
     */
    select?: SkuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkuCountOutputType without action
   */
  export type SkuCountOutputTypeCountCompanySkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuWhereInput
  }


  /**
   * Count Type BatchNumCountOutputType
   */

  export type BatchNumCountOutputType = {
    companySkuBatches: number
  }

  export type BatchNumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkuBatches?: boolean | BatchNumCountOutputTypeCountCompanySkuBatchesArgs
  }

  // Custom InputTypes
  /**
   * BatchNumCountOutputType without action
   */
  export type BatchNumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNumCountOutputType
     */
    select?: BatchNumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchNumCountOutputType without action
   */
  export type BatchNumCountOutputTypeCountCompanySkuBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuBatchNumRelationWhereInput
  }


  /**
   * Count Type CompanySkuCountOutputType
   */

  export type CompanySkuCountOutputType = {
    companySkuBatches: number
  }

  export type CompanySkuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkuBatches?: boolean | CompanySkuCountOutputTypeCountCompanySkuBatchesArgs
  }

  // Custom InputTypes
  /**
   * CompanySkuCountOutputType without action
   */
  export type CompanySkuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuCountOutputType
     */
    select?: CompanySkuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanySkuCountOutputType without action
   */
  export type CompanySkuCountOutputTypeCountCompanySkuBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuBatchNumRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companySkus?: boolean | Company$companySkusArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkus?: boolean | Company$companySkusArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      companySkus: Prisma.$CompanySkuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companySkus<T extends Company$companySkusArgs<ExtArgs> = {}>(args?: Subset<T, Company$companySkusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.companySkus
   */
  export type Company$companySkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    where?: CompanySkuWhereInput
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    cursor?: CompanySkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanySkuScalarFieldEnum | CompanySkuScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Sku
   */

  export type AggregateSku = {
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  export type SkuAvgAggregateOutputType = {
    id: number | null
  }

  export type SkuSumAggregateOutputType = {
    id: number | null
  }

  export type SkuMinAggregateOutputType = {
    id: number | null
    sku_name: string | null
  }

  export type SkuMaxAggregateOutputType = {
    id: number | null
    sku_name: string | null
  }

  export type SkuCountAggregateOutputType = {
    id: number
    sku_name: number
    _all: number
  }


  export type SkuAvgAggregateInputType = {
    id?: true
  }

  export type SkuSumAggregateInputType = {
    id?: true
  }

  export type SkuMinAggregateInputType = {
    id?: true
    sku_name?: true
  }

  export type SkuMaxAggregateInputType = {
    id?: true
    sku_name?: true
  }

  export type SkuCountAggregateInputType = {
    id?: true
    sku_name?: true
    _all?: true
  }

  export type SkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sku to aggregate.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skus
    **/
    _count?: true | SkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkuMaxAggregateInputType
  }

  export type GetSkuAggregateType<T extends SkuAggregateArgs> = {
        [P in keyof T & keyof AggregateSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSku[P]>
      : GetScalarType<T[P], AggregateSku[P]>
  }




  export type SkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkuWhereInput
    orderBy?: SkuOrderByWithAggregationInput | SkuOrderByWithAggregationInput[]
    by: SkuScalarFieldEnum[] | SkuScalarFieldEnum
    having?: SkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkuCountAggregateInputType | true
    _avg?: SkuAvgAggregateInputType
    _sum?: SkuSumAggregateInputType
    _min?: SkuMinAggregateInputType
    _max?: SkuMaxAggregateInputType
  }

  export type SkuGroupByOutputType = {
    id: number
    sku_name: string
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  type GetSkuGroupByPayload<T extends SkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkuGroupByOutputType[P]>
            : GetScalarType<T[P], SkuGroupByOutputType[P]>
        }
      >
    >


  export type SkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku_name?: boolean
    companySkus?: boolean | Sku$companySkusArgs<ExtArgs>
    _count?: boolean | SkuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sku"]>

  export type SkuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku_name?: boolean
  }, ExtArgs["result"]["sku"]>

  export type SkuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku_name?: boolean
  }, ExtArgs["result"]["sku"]>

  export type SkuSelectScalar = {
    id?: boolean
    sku_name?: boolean
  }

  export type SkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku_name", ExtArgs["result"]["sku"]>
  export type SkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkus?: boolean | Sku$companySkusArgs<ExtArgs>
    _count?: boolean | SkuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sku"
    objects: {
      companySkus: Prisma.$CompanySkuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku_name: string
    }, ExtArgs["result"]["sku"]>
    composites: {}
  }

  type SkuGetPayload<S extends boolean | null | undefined | SkuDefaultArgs> = $Result.GetResult<Prisma.$SkuPayload, S>

  type SkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkuCountAggregateInputType | true
    }

  export interface SkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sku'], meta: { name: 'Sku' } }
    /**
     * Find zero or one Sku that matches the filter.
     * @param {SkuFindUniqueArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkuFindUniqueArgs>(args: SelectSubset<T, SkuFindUniqueArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkuFindUniqueOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkuFindUniqueOrThrowArgs>(args: SelectSubset<T, SkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkuFindFirstArgs>(args?: SelectSubset<T, SkuFindFirstArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkuFindFirstOrThrowArgs>(args?: SelectSubset<T, SkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skus
     * const skus = await prisma.sku.findMany()
     * 
     * // Get first 10 Skus
     * const skus = await prisma.sku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skuWithIdOnly = await prisma.sku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkuFindManyArgs>(args?: SelectSubset<T, SkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sku.
     * @param {SkuCreateArgs} args - Arguments to create a Sku.
     * @example
     * // Create one Sku
     * const Sku = await prisma.sku.create({
     *   data: {
     *     // ... data to create a Sku
     *   }
     * })
     * 
     */
    create<T extends SkuCreateArgs>(args: SelectSubset<T, SkuCreateArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Skus.
     * @param {SkuCreateManyArgs} args - Arguments to create many Skus.
     * @example
     * // Create many Skus
     * const sku = await prisma.sku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkuCreateManyArgs>(args?: SelectSubset<T, SkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skus and returns the data saved in the database.
     * @param {SkuCreateManyAndReturnArgs} args - Arguments to create many Skus.
     * @example
     * // Create many Skus
     * const sku = await prisma.sku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skus and only return the `id`
     * const skuWithIdOnly = await prisma.sku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkuCreateManyAndReturnArgs>(args?: SelectSubset<T, SkuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Sku.
     * @param {SkuDeleteArgs} args - Arguments to delete one Sku.
     * @example
     * // Delete one Sku
     * const Sku = await prisma.sku.delete({
     *   where: {
     *     // ... filter to delete one Sku
     *   }
     * })
     * 
     */
    delete<T extends SkuDeleteArgs>(args: SelectSubset<T, SkuDeleteArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sku.
     * @param {SkuUpdateArgs} args - Arguments to update one Sku.
     * @example
     * // Update one Sku
     * const sku = await prisma.sku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkuUpdateArgs>(args: SelectSubset<T, SkuUpdateArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Skus.
     * @param {SkuDeleteManyArgs} args - Arguments to filter Skus to delete.
     * @example
     * // Delete a few Skus
     * const { count } = await prisma.sku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkuDeleteManyArgs>(args?: SelectSubset<T, SkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skus
     * const sku = await prisma.sku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkuUpdateManyArgs>(args: SelectSubset<T, SkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skus and returns the data updated in the database.
     * @param {SkuUpdateManyAndReturnArgs} args - Arguments to update many Skus.
     * @example
     * // Update many Skus
     * const sku = await prisma.sku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skus and only return the `id`
     * const skuWithIdOnly = await prisma.sku.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkuUpdateManyAndReturnArgs>(args: SelectSubset<T, SkuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Sku.
     * @param {SkuUpsertArgs} args - Arguments to update or create a Sku.
     * @example
     * // Update or create a Sku
     * const sku = await prisma.sku.upsert({
     *   create: {
     *     // ... data to create a Sku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sku we want to update
     *   }
     * })
     */
    upsert<T extends SkuUpsertArgs>(args: SelectSubset<T, SkuUpsertArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuCountArgs} args - Arguments to filter Skus to count.
     * @example
     * // Count the number of Skus
     * const count = await prisma.sku.count({
     *   where: {
     *     // ... the filter for the Skus we want to count
     *   }
     * })
    **/
    count<T extends SkuCountArgs>(
      args?: Subset<T, SkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkuAggregateArgs>(args: Subset<T, SkuAggregateArgs>): Prisma.PrismaPromise<GetSkuAggregateType<T>>

    /**
     * Group by Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuGroupByArgs} args - Group by arguments.
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
      T extends SkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkuGroupByArgs['orderBy'] }
        : { orderBy?: SkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sku model
   */
  readonly fields: SkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companySkus<T extends Sku$companySkusArgs<ExtArgs> = {}>(args?: Subset<T, Sku$companySkusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Sku model
   */ 
  interface SkuFieldRefs {
    readonly id: FieldRef<"Sku", 'Int'>
    readonly sku_name: FieldRef<"Sku", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sku findUnique
   */
  export type SkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku findUniqueOrThrow
   */
  export type SkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku findFirst
   */
  export type SkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     */
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku findFirstOrThrow
   */
  export type SkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     */
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku findMany
   */
  export type SkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter, which Skus to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku create
   */
  export type SkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * The data needed to create a Sku.
     */
    data: XOR<SkuCreateInput, SkuUncheckedCreateInput>
  }

  /**
   * Sku createMany
   */
  export type SkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skus.
     */
    data: SkuCreateManyInput | SkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sku createManyAndReturn
   */
  export type SkuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * The data used to create many Skus.
     */
    data: SkuCreateManyInput | SkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sku update
   */
  export type SkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * The data needed to update a Sku.
     */
    data: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
    /**
     * Choose, which Sku to update.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku updateMany
   */
  export type SkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skus.
     */
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyInput>
    /**
     * Filter which Skus to update
     */
    where?: SkuWhereInput
  }

  /**
   * Sku updateManyAndReturn
   */
  export type SkuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * The data used to update Skus.
     */
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyInput>
    /**
     * Filter which Skus to update
     */
    where?: SkuWhereInput
  }

  /**
   * Sku upsert
   */
  export type SkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * The filter to search for the Sku to update in case it exists.
     */
    where: SkuWhereUniqueInput
    /**
     * In case the Sku found by the `where` argument doesn't exist, create a new Sku with this data.
     */
    create: XOR<SkuCreateInput, SkuUncheckedCreateInput>
    /**
     * In case the Sku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
  }

  /**
   * Sku delete
   */
  export type SkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
    /**
     * Filter which Sku to delete.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku deleteMany
   */
  export type SkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skus to delete
     */
    where?: SkuWhereInput
  }

  /**
   * Sku.companySkus
   */
  export type Sku$companySkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    where?: CompanySkuWhereInput
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    cursor?: CompanySkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanySkuScalarFieldEnum | CompanySkuScalarFieldEnum[]
  }

  /**
   * Sku without action
   */
  export type SkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sku
     */
    omit?: SkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkuInclude<ExtArgs> | null
  }


  /**
   * Model BatchNum
   */

  export type AggregateBatchNum = {
    _count: BatchNumCountAggregateOutputType | null
    _avg: BatchNumAvgAggregateOutputType | null
    _sum: BatchNumSumAggregateOutputType | null
    _min: BatchNumMinAggregateOutputType | null
    _max: BatchNumMaxAggregateOutputType | null
  }

  export type BatchNumAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BatchNumSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BatchNumMinAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BatchNumMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BatchNumCountAggregateOutputType = {
    id: number
    quantity: number
    _all: number
  }


  export type BatchNumAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BatchNumSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BatchNumMinAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BatchNumMaxAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BatchNumCountAggregateInputType = {
    id?: true
    quantity?: true
    _all?: true
  }

  export type BatchNumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchNum to aggregate.
     */
    where?: BatchNumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchNums to fetch.
     */
    orderBy?: BatchNumOrderByWithRelationInput | BatchNumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchNumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchNums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchNums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchNums
    **/
    _count?: true | BatchNumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchNumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchNumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchNumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchNumMaxAggregateInputType
  }

  export type GetBatchNumAggregateType<T extends BatchNumAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchNum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchNum[P]>
      : GetScalarType<T[P], AggregateBatchNum[P]>
  }




  export type BatchNumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchNumWhereInput
    orderBy?: BatchNumOrderByWithAggregationInput | BatchNumOrderByWithAggregationInput[]
    by: BatchNumScalarFieldEnum[] | BatchNumScalarFieldEnum
    having?: BatchNumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchNumCountAggregateInputType | true
    _avg?: BatchNumAvgAggregateInputType
    _sum?: BatchNumSumAggregateInputType
    _min?: BatchNumMinAggregateInputType
    _max?: BatchNumMaxAggregateInputType
  }

  export type BatchNumGroupByOutputType = {
    id: number
    quantity: number
    _count: BatchNumCountAggregateOutputType | null
    _avg: BatchNumAvgAggregateOutputType | null
    _sum: BatchNumSumAggregateOutputType | null
    _min: BatchNumMinAggregateOutputType | null
    _max: BatchNumMaxAggregateOutputType | null
  }

  type GetBatchNumGroupByPayload<T extends BatchNumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchNumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchNumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchNumGroupByOutputType[P]>
            : GetScalarType<T[P], BatchNumGroupByOutputType[P]>
        }
      >
    >


  export type BatchNumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    companySkuBatches?: boolean | BatchNum$companySkuBatchesArgs<ExtArgs>
    _count?: boolean | BatchNumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchNum"]>

  export type BatchNumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["batchNum"]>

  export type BatchNumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["batchNum"]>

  export type BatchNumSelectScalar = {
    id?: boolean
    quantity?: boolean
  }

  export type BatchNumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity", ExtArgs["result"]["batchNum"]>
  export type BatchNumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySkuBatches?: boolean | BatchNum$companySkuBatchesArgs<ExtArgs>
    _count?: boolean | BatchNumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchNumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BatchNumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BatchNumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchNum"
    objects: {
      companySkuBatches: Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
    }, ExtArgs["result"]["batchNum"]>
    composites: {}
  }

  type BatchNumGetPayload<S extends boolean | null | undefined | BatchNumDefaultArgs> = $Result.GetResult<Prisma.$BatchNumPayload, S>

  type BatchNumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchNumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchNumCountAggregateInputType | true
    }

  export interface BatchNumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchNum'], meta: { name: 'BatchNum' } }
    /**
     * Find zero or one BatchNum that matches the filter.
     * @param {BatchNumFindUniqueArgs} args - Arguments to find a BatchNum
     * @example
     * // Get one BatchNum
     * const batchNum = await prisma.batchNum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchNumFindUniqueArgs>(args: SelectSubset<T, BatchNumFindUniqueArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BatchNum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchNumFindUniqueOrThrowArgs} args - Arguments to find a BatchNum
     * @example
     * // Get one BatchNum
     * const batchNum = await prisma.batchNum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchNumFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchNumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BatchNum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumFindFirstArgs} args - Arguments to find a BatchNum
     * @example
     * // Get one BatchNum
     * const batchNum = await prisma.batchNum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchNumFindFirstArgs>(args?: SelectSubset<T, BatchNumFindFirstArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BatchNum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumFindFirstOrThrowArgs} args - Arguments to find a BatchNum
     * @example
     * // Get one BatchNum
     * const batchNum = await prisma.batchNum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchNumFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchNumFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BatchNums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchNums
     * const batchNums = await prisma.batchNum.findMany()
     * 
     * // Get first 10 BatchNums
     * const batchNums = await prisma.batchNum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchNumWithIdOnly = await prisma.batchNum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchNumFindManyArgs>(args?: SelectSubset<T, BatchNumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BatchNum.
     * @param {BatchNumCreateArgs} args - Arguments to create a BatchNum.
     * @example
     * // Create one BatchNum
     * const BatchNum = await prisma.batchNum.create({
     *   data: {
     *     // ... data to create a BatchNum
     *   }
     * })
     * 
     */
    create<T extends BatchNumCreateArgs>(args: SelectSubset<T, BatchNumCreateArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BatchNums.
     * @param {BatchNumCreateManyArgs} args - Arguments to create many BatchNums.
     * @example
     * // Create many BatchNums
     * const batchNum = await prisma.batchNum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchNumCreateManyArgs>(args?: SelectSubset<T, BatchNumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BatchNums and returns the data saved in the database.
     * @param {BatchNumCreateManyAndReturnArgs} args - Arguments to create many BatchNums.
     * @example
     * // Create many BatchNums
     * const batchNum = await prisma.batchNum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BatchNums and only return the `id`
     * const batchNumWithIdOnly = await prisma.batchNum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchNumCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchNumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BatchNum.
     * @param {BatchNumDeleteArgs} args - Arguments to delete one BatchNum.
     * @example
     * // Delete one BatchNum
     * const BatchNum = await prisma.batchNum.delete({
     *   where: {
     *     // ... filter to delete one BatchNum
     *   }
     * })
     * 
     */
    delete<T extends BatchNumDeleteArgs>(args: SelectSubset<T, BatchNumDeleteArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BatchNum.
     * @param {BatchNumUpdateArgs} args - Arguments to update one BatchNum.
     * @example
     * // Update one BatchNum
     * const batchNum = await prisma.batchNum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchNumUpdateArgs>(args: SelectSubset<T, BatchNumUpdateArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BatchNums.
     * @param {BatchNumDeleteManyArgs} args - Arguments to filter BatchNums to delete.
     * @example
     * // Delete a few BatchNums
     * const { count } = await prisma.batchNum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchNumDeleteManyArgs>(args?: SelectSubset<T, BatchNumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchNums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchNums
     * const batchNum = await prisma.batchNum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchNumUpdateManyArgs>(args: SelectSubset<T, BatchNumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchNums and returns the data updated in the database.
     * @param {BatchNumUpdateManyAndReturnArgs} args - Arguments to update many BatchNums.
     * @example
     * // Update many BatchNums
     * const batchNum = await prisma.batchNum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BatchNums and only return the `id`
     * const batchNumWithIdOnly = await prisma.batchNum.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchNumUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchNumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BatchNum.
     * @param {BatchNumUpsertArgs} args - Arguments to update or create a BatchNum.
     * @example
     * // Update or create a BatchNum
     * const batchNum = await prisma.batchNum.upsert({
     *   create: {
     *     // ... data to create a BatchNum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchNum we want to update
     *   }
     * })
     */
    upsert<T extends BatchNumUpsertArgs>(args: SelectSubset<T, BatchNumUpsertArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BatchNums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumCountArgs} args - Arguments to filter BatchNums to count.
     * @example
     * // Count the number of BatchNums
     * const count = await prisma.batchNum.count({
     *   where: {
     *     // ... the filter for the BatchNums we want to count
     *   }
     * })
    **/
    count<T extends BatchNumCountArgs>(
      args?: Subset<T, BatchNumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchNumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchNum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchNumAggregateArgs>(args: Subset<T, BatchNumAggregateArgs>): Prisma.PrismaPromise<GetBatchNumAggregateType<T>>

    /**
     * Group by BatchNum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchNumGroupByArgs} args - Group by arguments.
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
      T extends BatchNumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchNumGroupByArgs['orderBy'] }
        : { orderBy?: BatchNumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchNumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchNumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchNum model
   */
  readonly fields: BatchNumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchNum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchNumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companySkuBatches<T extends BatchNum$companySkuBatchesArgs<ExtArgs> = {}>(args?: Subset<T, BatchNum$companySkuBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the BatchNum model
   */ 
  interface BatchNumFieldRefs {
    readonly id: FieldRef<"BatchNum", 'Int'>
    readonly quantity: FieldRef<"BatchNum", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BatchNum findUnique
   */
  export type BatchNumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter, which BatchNum to fetch.
     */
    where: BatchNumWhereUniqueInput
  }

  /**
   * BatchNum findUniqueOrThrow
   */
  export type BatchNumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter, which BatchNum to fetch.
     */
    where: BatchNumWhereUniqueInput
  }

  /**
   * BatchNum findFirst
   */
  export type BatchNumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter, which BatchNum to fetch.
     */
    where?: BatchNumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchNums to fetch.
     */
    orderBy?: BatchNumOrderByWithRelationInput | BatchNumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchNums.
     */
    cursor?: BatchNumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchNums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchNums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchNums.
     */
    distinct?: BatchNumScalarFieldEnum | BatchNumScalarFieldEnum[]
  }

  /**
   * BatchNum findFirstOrThrow
   */
  export type BatchNumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter, which BatchNum to fetch.
     */
    where?: BatchNumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchNums to fetch.
     */
    orderBy?: BatchNumOrderByWithRelationInput | BatchNumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchNums.
     */
    cursor?: BatchNumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchNums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchNums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchNums.
     */
    distinct?: BatchNumScalarFieldEnum | BatchNumScalarFieldEnum[]
  }

  /**
   * BatchNum findMany
   */
  export type BatchNumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter, which BatchNums to fetch.
     */
    where?: BatchNumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchNums to fetch.
     */
    orderBy?: BatchNumOrderByWithRelationInput | BatchNumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchNums.
     */
    cursor?: BatchNumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchNums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchNums.
     */
    skip?: number
    distinct?: BatchNumScalarFieldEnum | BatchNumScalarFieldEnum[]
  }

  /**
   * BatchNum create
   */
  export type BatchNumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * The data needed to create a BatchNum.
     */
    data: XOR<BatchNumCreateInput, BatchNumUncheckedCreateInput>
  }

  /**
   * BatchNum createMany
   */
  export type BatchNumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchNums.
     */
    data: BatchNumCreateManyInput | BatchNumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchNum createManyAndReturn
   */
  export type BatchNumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * The data used to create many BatchNums.
     */
    data: BatchNumCreateManyInput | BatchNumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchNum update
   */
  export type BatchNumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * The data needed to update a BatchNum.
     */
    data: XOR<BatchNumUpdateInput, BatchNumUncheckedUpdateInput>
    /**
     * Choose, which BatchNum to update.
     */
    where: BatchNumWhereUniqueInput
  }

  /**
   * BatchNum updateMany
   */
  export type BatchNumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchNums.
     */
    data: XOR<BatchNumUpdateManyMutationInput, BatchNumUncheckedUpdateManyInput>
    /**
     * Filter which BatchNums to update
     */
    where?: BatchNumWhereInput
  }

  /**
   * BatchNum updateManyAndReturn
   */
  export type BatchNumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * The data used to update BatchNums.
     */
    data: XOR<BatchNumUpdateManyMutationInput, BatchNumUncheckedUpdateManyInput>
    /**
     * Filter which BatchNums to update
     */
    where?: BatchNumWhereInput
  }

  /**
   * BatchNum upsert
   */
  export type BatchNumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * The filter to search for the BatchNum to update in case it exists.
     */
    where: BatchNumWhereUniqueInput
    /**
     * In case the BatchNum found by the `where` argument doesn't exist, create a new BatchNum with this data.
     */
    create: XOR<BatchNumCreateInput, BatchNumUncheckedCreateInput>
    /**
     * In case the BatchNum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchNumUpdateInput, BatchNumUncheckedUpdateInput>
  }

  /**
   * BatchNum delete
   */
  export type BatchNumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
    /**
     * Filter which BatchNum to delete.
     */
    where: BatchNumWhereUniqueInput
  }

  /**
   * BatchNum deleteMany
   */
  export type BatchNumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchNums to delete
     */
    where?: BatchNumWhereInput
  }

  /**
   * BatchNum.companySkuBatches
   */
  export type BatchNum$companySkuBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    where?: CompanySkuBatchNumRelationWhereInput
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanySkuBatchNumRelationScalarFieldEnum | CompanySkuBatchNumRelationScalarFieldEnum[]
  }

  /**
   * BatchNum without action
   */
  export type BatchNumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchNum
     */
    select?: BatchNumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchNum
     */
    omit?: BatchNumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchNumInclude<ExtArgs> | null
  }


  /**
   * Model CompanySku
   */

  export type AggregateCompanySku = {
    _count: CompanySkuCountAggregateOutputType | null
    _avg: CompanySkuAvgAggregateOutputType | null
    _sum: CompanySkuSumAggregateOutputType | null
    _min: CompanySkuMinAggregateOutputType | null
    _max: CompanySkuMaxAggregateOutputType | null
  }

  export type CompanySkuAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    sku_id: number | null
  }

  export type CompanySkuSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    sku_id: number | null
  }

  export type CompanySkuMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    sku_id: number | null
  }

  export type CompanySkuMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    sku_id: number | null
  }

  export type CompanySkuCountAggregateOutputType = {
    id: number
    company_id: number
    sku_id: number
    _all: number
  }


  export type CompanySkuAvgAggregateInputType = {
    id?: true
    company_id?: true
    sku_id?: true
  }

  export type CompanySkuSumAggregateInputType = {
    id?: true
    company_id?: true
    sku_id?: true
  }

  export type CompanySkuMinAggregateInputType = {
    id?: true
    company_id?: true
    sku_id?: true
  }

  export type CompanySkuMaxAggregateInputType = {
    id?: true
    company_id?: true
    sku_id?: true
  }

  export type CompanySkuCountAggregateInputType = {
    id?: true
    company_id?: true
    sku_id?: true
    _all?: true
  }

  export type CompanySkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySku to aggregate.
     */
    where?: CompanySkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkus to fetch.
     */
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySkus
    **/
    _count?: true | CompanySkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySkuMaxAggregateInputType
  }

  export type GetCompanySkuAggregateType<T extends CompanySkuAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySku[P]>
      : GetScalarType<T[P], AggregateCompanySku[P]>
  }




  export type CompanySkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuWhereInput
    orderBy?: CompanySkuOrderByWithAggregationInput | CompanySkuOrderByWithAggregationInput[]
    by: CompanySkuScalarFieldEnum[] | CompanySkuScalarFieldEnum
    having?: CompanySkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySkuCountAggregateInputType | true
    _avg?: CompanySkuAvgAggregateInputType
    _sum?: CompanySkuSumAggregateInputType
    _min?: CompanySkuMinAggregateInputType
    _max?: CompanySkuMaxAggregateInputType
  }

  export type CompanySkuGroupByOutputType = {
    id: number
    company_id: number
    sku_id: number
    _count: CompanySkuCountAggregateOutputType | null
    _avg: CompanySkuAvgAggregateOutputType | null
    _sum: CompanySkuSumAggregateOutputType | null
    _min: CompanySkuMinAggregateOutputType | null
    _max: CompanySkuMaxAggregateOutputType | null
  }

  type GetCompanySkuGroupByPayload<T extends CompanySkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySkuGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySkuGroupByOutputType[P]>
        }
      >
    >


  export type CompanySkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    sku_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
    companySkuBatches?: boolean | CompanySku$companySkuBatchesArgs<ExtArgs>
    _count?: boolean | CompanySkuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySku"]>

  export type CompanySkuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    sku_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySku"]>

  export type CompanySkuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    sku_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySku"]>

  export type CompanySkuSelectScalar = {
    id?: boolean
    company_id?: boolean
    sku_id?: boolean
  }

  export type CompanySkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "sku_id", ExtArgs["result"]["companySku"]>
  export type CompanySkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
    companySkuBatches?: boolean | CompanySku$companySkuBatchesArgs<ExtArgs>
    _count?: boolean | CompanySkuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanySkuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
  }
  export type CompanySkuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sku?: boolean | SkuDefaultArgs<ExtArgs>
  }

  export type $CompanySkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySku"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      sku: Prisma.$SkuPayload<ExtArgs>
      companySkuBatches: Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      sku_id: number
    }, ExtArgs["result"]["companySku"]>
    composites: {}
  }

  type CompanySkuGetPayload<S extends boolean | null | undefined | CompanySkuDefaultArgs> = $Result.GetResult<Prisma.$CompanySkuPayload, S>

  type CompanySkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySkuCountAggregateInputType | true
    }

  export interface CompanySkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySku'], meta: { name: 'CompanySku' } }
    /**
     * Find zero or one CompanySku that matches the filter.
     * @param {CompanySkuFindUniqueArgs} args - Arguments to find a CompanySku
     * @example
     * // Get one CompanySku
     * const companySku = await prisma.companySku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySkuFindUniqueArgs>(args: SelectSubset<T, CompanySkuFindUniqueArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CompanySku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySkuFindUniqueOrThrowArgs} args - Arguments to find a CompanySku
     * @example
     * // Get one CompanySku
     * const companySku = await prisma.companySku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySkuFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CompanySku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuFindFirstArgs} args - Arguments to find a CompanySku
     * @example
     * // Get one CompanySku
     * const companySku = await prisma.companySku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySkuFindFirstArgs>(args?: SelectSubset<T, CompanySkuFindFirstArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CompanySku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuFindFirstOrThrowArgs} args - Arguments to find a CompanySku
     * @example
     * // Get one CompanySku
     * const companySku = await prisma.companySku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySkuFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CompanySkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySkus
     * const companySkus = await prisma.companySku.findMany()
     * 
     * // Get first 10 CompanySkus
     * const companySkus = await prisma.companySku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companySkuWithIdOnly = await prisma.companySku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanySkuFindManyArgs>(args?: SelectSubset<T, CompanySkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CompanySku.
     * @param {CompanySkuCreateArgs} args - Arguments to create a CompanySku.
     * @example
     * // Create one CompanySku
     * const CompanySku = await prisma.companySku.create({
     *   data: {
     *     // ... data to create a CompanySku
     *   }
     * })
     * 
     */
    create<T extends CompanySkuCreateArgs>(args: SelectSubset<T, CompanySkuCreateArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CompanySkus.
     * @param {CompanySkuCreateManyArgs} args - Arguments to create many CompanySkus.
     * @example
     * // Create many CompanySkus
     * const companySku = await prisma.companySku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySkuCreateManyArgs>(args?: SelectSubset<T, CompanySkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySkus and returns the data saved in the database.
     * @param {CompanySkuCreateManyAndReturnArgs} args - Arguments to create many CompanySkus.
     * @example
     * // Create many CompanySkus
     * const companySku = await prisma.companySku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySkus and only return the `id`
     * const companySkuWithIdOnly = await prisma.companySku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySkuCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySkuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CompanySku.
     * @param {CompanySkuDeleteArgs} args - Arguments to delete one CompanySku.
     * @example
     * // Delete one CompanySku
     * const CompanySku = await prisma.companySku.delete({
     *   where: {
     *     // ... filter to delete one CompanySku
     *   }
     * })
     * 
     */
    delete<T extends CompanySkuDeleteArgs>(args: SelectSubset<T, CompanySkuDeleteArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CompanySku.
     * @param {CompanySkuUpdateArgs} args - Arguments to update one CompanySku.
     * @example
     * // Update one CompanySku
     * const companySku = await prisma.companySku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySkuUpdateArgs>(args: SelectSubset<T, CompanySkuUpdateArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CompanySkus.
     * @param {CompanySkuDeleteManyArgs} args - Arguments to filter CompanySkus to delete.
     * @example
     * // Delete a few CompanySkus
     * const { count } = await prisma.companySku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySkuDeleteManyArgs>(args?: SelectSubset<T, CompanySkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySkus
     * const companySku = await prisma.companySku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySkuUpdateManyArgs>(args: SelectSubset<T, CompanySkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySkus and returns the data updated in the database.
     * @param {CompanySkuUpdateManyAndReturnArgs} args - Arguments to update many CompanySkus.
     * @example
     * // Update many CompanySkus
     * const companySku = await prisma.companySku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySkus and only return the `id`
     * const companySkuWithIdOnly = await prisma.companySku.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanySkuUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySkuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CompanySku.
     * @param {CompanySkuUpsertArgs} args - Arguments to update or create a CompanySku.
     * @example
     * // Update or create a CompanySku
     * const companySku = await prisma.companySku.upsert({
     *   create: {
     *     // ... data to create a CompanySku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySku we want to update
     *   }
     * })
     */
    upsert<T extends CompanySkuUpsertArgs>(args: SelectSubset<T, CompanySkuUpsertArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CompanySkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuCountArgs} args - Arguments to filter CompanySkus to count.
     * @example
     * // Count the number of CompanySkus
     * const count = await prisma.companySku.count({
     *   where: {
     *     // ... the filter for the CompanySkus we want to count
     *   }
     * })
    **/
    count<T extends CompanySkuCountArgs>(
      args?: Subset<T, CompanySkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanySkuAggregateArgs>(args: Subset<T, CompanySkuAggregateArgs>): Prisma.PrismaPromise<GetCompanySkuAggregateType<T>>

    /**
     * Group by CompanySku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuGroupByArgs} args - Group by arguments.
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
      T extends CompanySkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySkuGroupByArgs['orderBy'] }
        : { orderBy?: CompanySkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanySkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySku model
   */
  readonly fields: CompanySkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    sku<T extends SkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkuDefaultArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    companySkuBatches<T extends CompanySku$companySkuBatchesArgs<ExtArgs> = {}>(args?: Subset<T, CompanySku$companySkuBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the CompanySku model
   */ 
  interface CompanySkuFieldRefs {
    readonly id: FieldRef<"CompanySku", 'Int'>
    readonly company_id: FieldRef<"CompanySku", 'Int'>
    readonly sku_id: FieldRef<"CompanySku", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanySku findUnique
   */
  export type CompanySkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter, which CompanySku to fetch.
     */
    where: CompanySkuWhereUniqueInput
  }

  /**
   * CompanySku findUniqueOrThrow
   */
  export type CompanySkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter, which CompanySku to fetch.
     */
    where: CompanySkuWhereUniqueInput
  }

  /**
   * CompanySku findFirst
   */
  export type CompanySkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter, which CompanySku to fetch.
     */
    where?: CompanySkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkus to fetch.
     */
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySkus.
     */
    cursor?: CompanySkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySkus.
     */
    distinct?: CompanySkuScalarFieldEnum | CompanySkuScalarFieldEnum[]
  }

  /**
   * CompanySku findFirstOrThrow
   */
  export type CompanySkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter, which CompanySku to fetch.
     */
    where?: CompanySkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkus to fetch.
     */
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySkus.
     */
    cursor?: CompanySkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySkus.
     */
    distinct?: CompanySkuScalarFieldEnum | CompanySkuScalarFieldEnum[]
  }

  /**
   * CompanySku findMany
   */
  export type CompanySkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkus to fetch.
     */
    where?: CompanySkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkus to fetch.
     */
    orderBy?: CompanySkuOrderByWithRelationInput | CompanySkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySkus.
     */
    cursor?: CompanySkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkus.
     */
    skip?: number
    distinct?: CompanySkuScalarFieldEnum | CompanySkuScalarFieldEnum[]
  }

  /**
   * CompanySku create
   */
  export type CompanySkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanySku.
     */
    data: XOR<CompanySkuCreateInput, CompanySkuUncheckedCreateInput>
  }

  /**
   * CompanySku createMany
   */
  export type CompanySkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySkus.
     */
    data: CompanySkuCreateManyInput | CompanySkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySku createManyAndReturn
   */
  export type CompanySkuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySkus.
     */
    data: CompanySkuCreateManyInput | CompanySkuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySku update
   */
  export type CompanySkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanySku.
     */
    data: XOR<CompanySkuUpdateInput, CompanySkuUncheckedUpdateInput>
    /**
     * Choose, which CompanySku to update.
     */
    where: CompanySkuWhereUniqueInput
  }

  /**
   * CompanySku updateMany
   */
  export type CompanySkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySkus.
     */
    data: XOR<CompanySkuUpdateManyMutationInput, CompanySkuUncheckedUpdateManyInput>
    /**
     * Filter which CompanySkus to update
     */
    where?: CompanySkuWhereInput
  }

  /**
   * CompanySku updateManyAndReturn
   */
  export type CompanySkuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * The data used to update CompanySkus.
     */
    data: XOR<CompanySkuUpdateManyMutationInput, CompanySkuUncheckedUpdateManyInput>
    /**
     * Filter which CompanySkus to update
     */
    where?: CompanySkuWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySku upsert
   */
  export type CompanySkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanySku to update in case it exists.
     */
    where: CompanySkuWhereUniqueInput
    /**
     * In case the CompanySku found by the `where` argument doesn't exist, create a new CompanySku with this data.
     */
    create: XOR<CompanySkuCreateInput, CompanySkuUncheckedCreateInput>
    /**
     * In case the CompanySku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySkuUpdateInput, CompanySkuUncheckedUpdateInput>
  }

  /**
   * CompanySku delete
   */
  export type CompanySkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
    /**
     * Filter which CompanySku to delete.
     */
    where: CompanySkuWhereUniqueInput
  }

  /**
   * CompanySku deleteMany
   */
  export type CompanySkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySkus to delete
     */
    where?: CompanySkuWhereInput
  }

  /**
   * CompanySku.companySkuBatches
   */
  export type CompanySku$companySkuBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    where?: CompanySkuBatchNumRelationWhereInput
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanySkuBatchNumRelationScalarFieldEnum | CompanySkuBatchNumRelationScalarFieldEnum[]
  }

  /**
   * CompanySku without action
   */
  export type CompanySkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySku
     */
    select?: CompanySkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySku
     */
    omit?: CompanySkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuInclude<ExtArgs> | null
  }


  /**
   * Model CompanySkuBatchNumRelation
   */

  export type AggregateCompanySkuBatchNumRelation = {
    _count: CompanySkuBatchNumRelationCountAggregateOutputType | null
    _avg: CompanySkuBatchNumRelationAvgAggregateOutputType | null
    _sum: CompanySkuBatchNumRelationSumAggregateOutputType | null
    _min: CompanySkuBatchNumRelationMinAggregateOutputType | null
    _max: CompanySkuBatchNumRelationMaxAggregateOutputType | null
  }

  export type CompanySkuBatchNumRelationAvgAggregateOutputType = {
    company_sku_id: number | null
    batch_id: number | null
  }

  export type CompanySkuBatchNumRelationSumAggregateOutputType = {
    company_sku_id: number | null
    batch_id: number | null
  }

  export type CompanySkuBatchNumRelationMinAggregateOutputType = {
    company_sku_id: number | null
    batch_id: number | null
    created_at: Date | null
  }

  export type CompanySkuBatchNumRelationMaxAggregateOutputType = {
    company_sku_id: number | null
    batch_id: number | null
    created_at: Date | null
  }

  export type CompanySkuBatchNumRelationCountAggregateOutputType = {
    company_sku_id: number
    batch_id: number
    created_at: number
    _all: number
  }


  export type CompanySkuBatchNumRelationAvgAggregateInputType = {
    company_sku_id?: true
    batch_id?: true
  }

  export type CompanySkuBatchNumRelationSumAggregateInputType = {
    company_sku_id?: true
    batch_id?: true
  }

  export type CompanySkuBatchNumRelationMinAggregateInputType = {
    company_sku_id?: true
    batch_id?: true
    created_at?: true
  }

  export type CompanySkuBatchNumRelationMaxAggregateInputType = {
    company_sku_id?: true
    batch_id?: true
    created_at?: true
  }

  export type CompanySkuBatchNumRelationCountAggregateInputType = {
    company_sku_id?: true
    batch_id?: true
    created_at?: true
    _all?: true
  }

  export type CompanySkuBatchNumRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySkuBatchNumRelation to aggregate.
     */
    where?: CompanySkuBatchNumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkuBatchNumRelations to fetch.
     */
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkuBatchNumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkuBatchNumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySkuBatchNumRelations
    **/
    _count?: true | CompanySkuBatchNumRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySkuBatchNumRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySkuBatchNumRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySkuBatchNumRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySkuBatchNumRelationMaxAggregateInputType
  }

  export type GetCompanySkuBatchNumRelationAggregateType<T extends CompanySkuBatchNumRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySkuBatchNumRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySkuBatchNumRelation[P]>
      : GetScalarType<T[P], AggregateCompanySkuBatchNumRelation[P]>
  }




  export type CompanySkuBatchNumRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySkuBatchNumRelationWhereInput
    orderBy?: CompanySkuBatchNumRelationOrderByWithAggregationInput | CompanySkuBatchNumRelationOrderByWithAggregationInput[]
    by: CompanySkuBatchNumRelationScalarFieldEnum[] | CompanySkuBatchNumRelationScalarFieldEnum
    having?: CompanySkuBatchNumRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySkuBatchNumRelationCountAggregateInputType | true
    _avg?: CompanySkuBatchNumRelationAvgAggregateInputType
    _sum?: CompanySkuBatchNumRelationSumAggregateInputType
    _min?: CompanySkuBatchNumRelationMinAggregateInputType
    _max?: CompanySkuBatchNumRelationMaxAggregateInputType
  }

  export type CompanySkuBatchNumRelationGroupByOutputType = {
    company_sku_id: number
    batch_id: number
    created_at: Date
    _count: CompanySkuBatchNumRelationCountAggregateOutputType | null
    _avg: CompanySkuBatchNumRelationAvgAggregateOutputType | null
    _sum: CompanySkuBatchNumRelationSumAggregateOutputType | null
    _min: CompanySkuBatchNumRelationMinAggregateOutputType | null
    _max: CompanySkuBatchNumRelationMaxAggregateOutputType | null
  }

  type GetCompanySkuBatchNumRelationGroupByPayload<T extends CompanySkuBatchNumRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySkuBatchNumRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySkuBatchNumRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySkuBatchNumRelationGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySkuBatchNumRelationGroupByOutputType[P]>
        }
      >
    >


  export type CompanySkuBatchNumRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_sku_id?: boolean
    batch_id?: boolean
    created_at?: boolean
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySkuBatchNumRelation"]>

  export type CompanySkuBatchNumRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_sku_id?: boolean
    batch_id?: boolean
    created_at?: boolean
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySkuBatchNumRelation"]>

  export type CompanySkuBatchNumRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_sku_id?: boolean
    batch_id?: boolean
    created_at?: boolean
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySkuBatchNumRelation"]>

  export type CompanySkuBatchNumRelationSelectScalar = {
    company_sku_id?: boolean
    batch_id?: boolean
    created_at?: boolean
  }

  export type CompanySkuBatchNumRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_sku_id" | "batch_id" | "created_at", ExtArgs["result"]["companySkuBatchNumRelation"]>
  export type CompanySkuBatchNumRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }
  export type CompanySkuBatchNumRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }
  export type CompanySkuBatchNumRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companySku?: boolean | CompanySkuDefaultArgs<ExtArgs>
    batchNum?: boolean | BatchNumDefaultArgs<ExtArgs>
  }

  export type $CompanySkuBatchNumRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySkuBatchNumRelation"
    objects: {
      companySku: Prisma.$CompanySkuPayload<ExtArgs>
      batchNum: Prisma.$BatchNumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      company_sku_id: number
      batch_id: number
      created_at: Date
    }, ExtArgs["result"]["companySkuBatchNumRelation"]>
    composites: {}
  }

  type CompanySkuBatchNumRelationGetPayload<S extends boolean | null | undefined | CompanySkuBatchNumRelationDefaultArgs> = $Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload, S>

  type CompanySkuBatchNumRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySkuBatchNumRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySkuBatchNumRelationCountAggregateInputType | true
    }

  export interface CompanySkuBatchNumRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySkuBatchNumRelation'], meta: { name: 'CompanySkuBatchNumRelation' } }
    /**
     * Find zero or one CompanySkuBatchNumRelation that matches the filter.
     * @param {CompanySkuBatchNumRelationFindUniqueArgs} args - Arguments to find a CompanySkuBatchNumRelation
     * @example
     * // Get one CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySkuBatchNumRelationFindUniqueArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationFindUniqueArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CompanySkuBatchNumRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySkuBatchNumRelationFindUniqueOrThrowArgs} args - Arguments to find a CompanySkuBatchNumRelation
     * @example
     * // Get one CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySkuBatchNumRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CompanySkuBatchNumRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationFindFirstArgs} args - Arguments to find a CompanySkuBatchNumRelation
     * @example
     * // Get one CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySkuBatchNumRelationFindFirstArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationFindFirstArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CompanySkuBatchNumRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationFindFirstOrThrowArgs} args - Arguments to find a CompanySkuBatchNumRelation
     * @example
     * // Get one CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySkuBatchNumRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CompanySkuBatchNumRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySkuBatchNumRelations
     * const companySkuBatchNumRelations = await prisma.companySkuBatchNumRelation.findMany()
     * 
     * // Get first 10 CompanySkuBatchNumRelations
     * const companySkuBatchNumRelations = await prisma.companySkuBatchNumRelation.findMany({ take: 10 })
     * 
     * // Only select the `company_sku_id`
     * const companySkuBatchNumRelationWithCompany_sku_idOnly = await prisma.companySkuBatchNumRelation.findMany({ select: { company_sku_id: true } })
     * 
     */
    findMany<T extends CompanySkuBatchNumRelationFindManyArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CompanySkuBatchNumRelation.
     * @param {CompanySkuBatchNumRelationCreateArgs} args - Arguments to create a CompanySkuBatchNumRelation.
     * @example
     * // Create one CompanySkuBatchNumRelation
     * const CompanySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.create({
     *   data: {
     *     // ... data to create a CompanySkuBatchNumRelation
     *   }
     * })
     * 
     */
    create<T extends CompanySkuBatchNumRelationCreateArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationCreateArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CompanySkuBatchNumRelations.
     * @param {CompanySkuBatchNumRelationCreateManyArgs} args - Arguments to create many CompanySkuBatchNumRelations.
     * @example
     * // Create many CompanySkuBatchNumRelations
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySkuBatchNumRelationCreateManyArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySkuBatchNumRelations and returns the data saved in the database.
     * @param {CompanySkuBatchNumRelationCreateManyAndReturnArgs} args - Arguments to create many CompanySkuBatchNumRelations.
     * @example
     * // Create many CompanySkuBatchNumRelations
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySkuBatchNumRelations and only return the `company_sku_id`
     * const companySkuBatchNumRelationWithCompany_sku_idOnly = await prisma.companySkuBatchNumRelation.createManyAndReturn({
     *   select: { company_sku_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySkuBatchNumRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CompanySkuBatchNumRelation.
     * @param {CompanySkuBatchNumRelationDeleteArgs} args - Arguments to delete one CompanySkuBatchNumRelation.
     * @example
     * // Delete one CompanySkuBatchNumRelation
     * const CompanySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.delete({
     *   where: {
     *     // ... filter to delete one CompanySkuBatchNumRelation
     *   }
     * })
     * 
     */
    delete<T extends CompanySkuBatchNumRelationDeleteArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationDeleteArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CompanySkuBatchNumRelation.
     * @param {CompanySkuBatchNumRelationUpdateArgs} args - Arguments to update one CompanySkuBatchNumRelation.
     * @example
     * // Update one CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySkuBatchNumRelationUpdateArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationUpdateArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CompanySkuBatchNumRelations.
     * @param {CompanySkuBatchNumRelationDeleteManyArgs} args - Arguments to filter CompanySkuBatchNumRelations to delete.
     * @example
     * // Delete a few CompanySkuBatchNumRelations
     * const { count } = await prisma.companySkuBatchNumRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySkuBatchNumRelationDeleteManyArgs>(args?: SelectSubset<T, CompanySkuBatchNumRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySkuBatchNumRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySkuBatchNumRelations
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySkuBatchNumRelationUpdateManyArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySkuBatchNumRelations and returns the data updated in the database.
     * @param {CompanySkuBatchNumRelationUpdateManyAndReturnArgs} args - Arguments to update many CompanySkuBatchNumRelations.
     * @example
     * // Update many CompanySkuBatchNumRelations
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySkuBatchNumRelations and only return the `company_sku_id`
     * const companySkuBatchNumRelationWithCompany_sku_idOnly = await prisma.companySkuBatchNumRelation.updateManyAndReturn({
     *   select: { company_sku_id: true },
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
    updateManyAndReturn<T extends CompanySkuBatchNumRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CompanySkuBatchNumRelation.
     * @param {CompanySkuBatchNumRelationUpsertArgs} args - Arguments to update or create a CompanySkuBatchNumRelation.
     * @example
     * // Update or create a CompanySkuBatchNumRelation
     * const companySkuBatchNumRelation = await prisma.companySkuBatchNumRelation.upsert({
     *   create: {
     *     // ... data to create a CompanySkuBatchNumRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySkuBatchNumRelation we want to update
     *   }
     * })
     */
    upsert<T extends CompanySkuBatchNumRelationUpsertArgs>(args: SelectSubset<T, CompanySkuBatchNumRelationUpsertArgs<ExtArgs>>): Prisma__CompanySkuBatchNumRelationClient<$Result.GetResult<Prisma.$CompanySkuBatchNumRelationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CompanySkuBatchNumRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationCountArgs} args - Arguments to filter CompanySkuBatchNumRelations to count.
     * @example
     * // Count the number of CompanySkuBatchNumRelations
     * const count = await prisma.companySkuBatchNumRelation.count({
     *   where: {
     *     // ... the filter for the CompanySkuBatchNumRelations we want to count
     *   }
     * })
    **/
    count<T extends CompanySkuBatchNumRelationCountArgs>(
      args?: Subset<T, CompanySkuBatchNumRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySkuBatchNumRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySkuBatchNumRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanySkuBatchNumRelationAggregateArgs>(args: Subset<T, CompanySkuBatchNumRelationAggregateArgs>): Prisma.PrismaPromise<GetCompanySkuBatchNumRelationAggregateType<T>>

    /**
     * Group by CompanySkuBatchNumRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySkuBatchNumRelationGroupByArgs} args - Group by arguments.
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
      T extends CompanySkuBatchNumRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySkuBatchNumRelationGroupByArgs['orderBy'] }
        : { orderBy?: CompanySkuBatchNumRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanySkuBatchNumRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySkuBatchNumRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySkuBatchNumRelation model
   */
  readonly fields: CompanySkuBatchNumRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySkuBatchNumRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySkuBatchNumRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companySku<T extends CompanySkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanySkuDefaultArgs<ExtArgs>>): Prisma__CompanySkuClient<$Result.GetResult<Prisma.$CompanySkuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    batchNum<T extends BatchNumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchNumDefaultArgs<ExtArgs>>): Prisma__BatchNumClient<$Result.GetResult<Prisma.$BatchNumPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CompanySkuBatchNumRelation model
   */ 
  interface CompanySkuBatchNumRelationFieldRefs {
    readonly company_sku_id: FieldRef<"CompanySkuBatchNumRelation", 'Int'>
    readonly batch_id: FieldRef<"CompanySkuBatchNumRelation", 'Int'>
    readonly created_at: FieldRef<"CompanySkuBatchNumRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanySkuBatchNumRelation findUnique
   */
  export type CompanySkuBatchNumRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkuBatchNumRelation to fetch.
     */
    where: CompanySkuBatchNumRelationWhereUniqueInput
  }

  /**
   * CompanySkuBatchNumRelation findUniqueOrThrow
   */
  export type CompanySkuBatchNumRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkuBatchNumRelation to fetch.
     */
    where: CompanySkuBatchNumRelationWhereUniqueInput
  }

  /**
   * CompanySkuBatchNumRelation findFirst
   */
  export type CompanySkuBatchNumRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkuBatchNumRelation to fetch.
     */
    where?: CompanySkuBatchNumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkuBatchNumRelations to fetch.
     */
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySkuBatchNumRelations.
     */
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkuBatchNumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkuBatchNumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySkuBatchNumRelations.
     */
    distinct?: CompanySkuBatchNumRelationScalarFieldEnum | CompanySkuBatchNumRelationScalarFieldEnum[]
  }

  /**
   * CompanySkuBatchNumRelation findFirstOrThrow
   */
  export type CompanySkuBatchNumRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkuBatchNumRelation to fetch.
     */
    where?: CompanySkuBatchNumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkuBatchNumRelations to fetch.
     */
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySkuBatchNumRelations.
     */
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkuBatchNumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkuBatchNumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySkuBatchNumRelations.
     */
    distinct?: CompanySkuBatchNumRelationScalarFieldEnum | CompanySkuBatchNumRelationScalarFieldEnum[]
  }

  /**
   * CompanySkuBatchNumRelation findMany
   */
  export type CompanySkuBatchNumRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter, which CompanySkuBatchNumRelations to fetch.
     */
    where?: CompanySkuBatchNumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySkuBatchNumRelations to fetch.
     */
    orderBy?: CompanySkuBatchNumRelationOrderByWithRelationInput | CompanySkuBatchNumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySkuBatchNumRelations.
     */
    cursor?: CompanySkuBatchNumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySkuBatchNumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySkuBatchNumRelations.
     */
    skip?: number
    distinct?: CompanySkuBatchNumRelationScalarFieldEnum | CompanySkuBatchNumRelationScalarFieldEnum[]
  }

  /**
   * CompanySkuBatchNumRelation create
   */
  export type CompanySkuBatchNumRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanySkuBatchNumRelation.
     */
    data: XOR<CompanySkuBatchNumRelationCreateInput, CompanySkuBatchNumRelationUncheckedCreateInput>
  }

  /**
   * CompanySkuBatchNumRelation createMany
   */
  export type CompanySkuBatchNumRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySkuBatchNumRelations.
     */
    data: CompanySkuBatchNumRelationCreateManyInput | CompanySkuBatchNumRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySkuBatchNumRelation createManyAndReturn
   */
  export type CompanySkuBatchNumRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySkuBatchNumRelations.
     */
    data: CompanySkuBatchNumRelationCreateManyInput | CompanySkuBatchNumRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySkuBatchNumRelation update
   */
  export type CompanySkuBatchNumRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanySkuBatchNumRelation.
     */
    data: XOR<CompanySkuBatchNumRelationUpdateInput, CompanySkuBatchNumRelationUncheckedUpdateInput>
    /**
     * Choose, which CompanySkuBatchNumRelation to update.
     */
    where: CompanySkuBatchNumRelationWhereUniqueInput
  }

  /**
   * CompanySkuBatchNumRelation updateMany
   */
  export type CompanySkuBatchNumRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySkuBatchNumRelations.
     */
    data: XOR<CompanySkuBatchNumRelationUpdateManyMutationInput, CompanySkuBatchNumRelationUncheckedUpdateManyInput>
    /**
     * Filter which CompanySkuBatchNumRelations to update
     */
    where?: CompanySkuBatchNumRelationWhereInput
  }

  /**
   * CompanySkuBatchNumRelation updateManyAndReturn
   */
  export type CompanySkuBatchNumRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * The data used to update CompanySkuBatchNumRelations.
     */
    data: XOR<CompanySkuBatchNumRelationUpdateManyMutationInput, CompanySkuBatchNumRelationUncheckedUpdateManyInput>
    /**
     * Filter which CompanySkuBatchNumRelations to update
     */
    where?: CompanySkuBatchNumRelationWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySkuBatchNumRelation upsert
   */
  export type CompanySkuBatchNumRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanySkuBatchNumRelation to update in case it exists.
     */
    where: CompanySkuBatchNumRelationWhereUniqueInput
    /**
     * In case the CompanySkuBatchNumRelation found by the `where` argument doesn't exist, create a new CompanySkuBatchNumRelation with this data.
     */
    create: XOR<CompanySkuBatchNumRelationCreateInput, CompanySkuBatchNumRelationUncheckedCreateInput>
    /**
     * In case the CompanySkuBatchNumRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySkuBatchNumRelationUpdateInput, CompanySkuBatchNumRelationUncheckedUpdateInput>
  }

  /**
   * CompanySkuBatchNumRelation delete
   */
  export type CompanySkuBatchNumRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
    /**
     * Filter which CompanySkuBatchNumRelation to delete.
     */
    where: CompanySkuBatchNumRelationWhereUniqueInput
  }

  /**
   * CompanySkuBatchNumRelation deleteMany
   */
  export type CompanySkuBatchNumRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySkuBatchNumRelations to delete
     */
    where?: CompanySkuBatchNumRelationWhereInput
  }

  /**
   * CompanySkuBatchNumRelation without action
   */
  export type CompanySkuBatchNumRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySkuBatchNumRelation
     */
    select?: CompanySkuBatchNumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySkuBatchNumRelation
     */
    omit?: CompanySkuBatchNumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySkuBatchNumRelationInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const SkuScalarFieldEnum: {
    id: 'id',
    sku_name: 'sku_name'
  };

  export type SkuScalarFieldEnum = (typeof SkuScalarFieldEnum)[keyof typeof SkuScalarFieldEnum]


  export const BatchNumScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity'
  };

  export type BatchNumScalarFieldEnum = (typeof BatchNumScalarFieldEnum)[keyof typeof BatchNumScalarFieldEnum]


  export const CompanySkuScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    sku_id: 'sku_id'
  };

  export type CompanySkuScalarFieldEnum = (typeof CompanySkuScalarFieldEnum)[keyof typeof CompanySkuScalarFieldEnum]


  export const CompanySkuBatchNumRelationScalarFieldEnum: {
    company_sku_id: 'company_sku_id',
    batch_id: 'batch_id',
    created_at: 'created_at'
  };

  export type CompanySkuBatchNumRelationScalarFieldEnum = (typeof CompanySkuBatchNumRelationScalarFieldEnum)[keyof typeof CompanySkuBatchNumRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    companySkus?: CompanySkuListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companySkus?: CompanySkuOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    companySkus?: CompanySkuListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type SkuWhereInput = {
    AND?: SkuWhereInput | SkuWhereInput[]
    OR?: SkuWhereInput[]
    NOT?: SkuWhereInput | SkuWhereInput[]
    id?: IntFilter<"Sku"> | number
    sku_name?: StringFilter<"Sku"> | string
    companySkus?: CompanySkuListRelationFilter
  }

  export type SkuOrderByWithRelationInput = {
    id?: SortOrder
    sku_name?: SortOrder
    companySkus?: CompanySkuOrderByRelationAggregateInput
  }

  export type SkuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkuWhereInput | SkuWhereInput[]
    OR?: SkuWhereInput[]
    NOT?: SkuWhereInput | SkuWhereInput[]
    sku_name?: StringFilter<"Sku"> | string
    companySkus?: CompanySkuListRelationFilter
  }, "id">

  export type SkuOrderByWithAggregationInput = {
    id?: SortOrder
    sku_name?: SortOrder
    _count?: SkuCountOrderByAggregateInput
    _avg?: SkuAvgOrderByAggregateInput
    _max?: SkuMaxOrderByAggregateInput
    _min?: SkuMinOrderByAggregateInput
    _sum?: SkuSumOrderByAggregateInput
  }

  export type SkuScalarWhereWithAggregatesInput = {
    AND?: SkuScalarWhereWithAggregatesInput | SkuScalarWhereWithAggregatesInput[]
    OR?: SkuScalarWhereWithAggregatesInput[]
    NOT?: SkuScalarWhereWithAggregatesInput | SkuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sku"> | number
    sku_name?: StringWithAggregatesFilter<"Sku"> | string
  }

  export type BatchNumWhereInput = {
    AND?: BatchNumWhereInput | BatchNumWhereInput[]
    OR?: BatchNumWhereInput[]
    NOT?: BatchNumWhereInput | BatchNumWhereInput[]
    id?: IntFilter<"BatchNum"> | number
    quantity?: IntFilter<"BatchNum"> | number
    companySkuBatches?: CompanySkuBatchNumRelationListRelationFilter
  }

  export type BatchNumOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    companySkuBatches?: CompanySkuBatchNumRelationOrderByRelationAggregateInput
  }

  export type BatchNumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatchNumWhereInput | BatchNumWhereInput[]
    OR?: BatchNumWhereInput[]
    NOT?: BatchNumWhereInput | BatchNumWhereInput[]
    quantity?: IntFilter<"BatchNum"> | number
    companySkuBatches?: CompanySkuBatchNumRelationListRelationFilter
  }, "id">

  export type BatchNumOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    _count?: BatchNumCountOrderByAggregateInput
    _avg?: BatchNumAvgOrderByAggregateInput
    _max?: BatchNumMaxOrderByAggregateInput
    _min?: BatchNumMinOrderByAggregateInput
    _sum?: BatchNumSumOrderByAggregateInput
  }

  export type BatchNumScalarWhereWithAggregatesInput = {
    AND?: BatchNumScalarWhereWithAggregatesInput | BatchNumScalarWhereWithAggregatesInput[]
    OR?: BatchNumScalarWhereWithAggregatesInput[]
    NOT?: BatchNumScalarWhereWithAggregatesInput | BatchNumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BatchNum"> | number
    quantity?: IntWithAggregatesFilter<"BatchNum"> | number
  }

  export type CompanySkuWhereInput = {
    AND?: CompanySkuWhereInput | CompanySkuWhereInput[]
    OR?: CompanySkuWhereInput[]
    NOT?: CompanySkuWhereInput | CompanySkuWhereInput[]
    id?: IntFilter<"CompanySku"> | number
    company_id?: IntFilter<"CompanySku"> | number
    sku_id?: IntFilter<"CompanySku"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    sku?: XOR<SkuScalarRelationFilter, SkuWhereInput>
    companySkuBatches?: CompanySkuBatchNumRelationListRelationFilter
  }

  export type CompanySkuOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    sku?: SkuOrderByWithRelationInput
    companySkuBatches?: CompanySkuBatchNumRelationOrderByRelationAggregateInput
  }

  export type CompanySkuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanySkuWhereInput | CompanySkuWhereInput[]
    OR?: CompanySkuWhereInput[]
    NOT?: CompanySkuWhereInput | CompanySkuWhereInput[]
    company_id?: IntFilter<"CompanySku"> | number
    sku_id?: IntFilter<"CompanySku"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    sku?: XOR<SkuScalarRelationFilter, SkuWhereInput>
    companySkuBatches?: CompanySkuBatchNumRelationListRelationFilter
  }, "id">

  export type CompanySkuOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
    _count?: CompanySkuCountOrderByAggregateInput
    _avg?: CompanySkuAvgOrderByAggregateInput
    _max?: CompanySkuMaxOrderByAggregateInput
    _min?: CompanySkuMinOrderByAggregateInput
    _sum?: CompanySkuSumOrderByAggregateInput
  }

  export type CompanySkuScalarWhereWithAggregatesInput = {
    AND?: CompanySkuScalarWhereWithAggregatesInput | CompanySkuScalarWhereWithAggregatesInput[]
    OR?: CompanySkuScalarWhereWithAggregatesInput[]
    NOT?: CompanySkuScalarWhereWithAggregatesInput | CompanySkuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanySku"> | number
    company_id?: IntWithAggregatesFilter<"CompanySku"> | number
    sku_id?: IntWithAggregatesFilter<"CompanySku"> | number
  }

  export type CompanySkuBatchNumRelationWhereInput = {
    AND?: CompanySkuBatchNumRelationWhereInput | CompanySkuBatchNumRelationWhereInput[]
    OR?: CompanySkuBatchNumRelationWhereInput[]
    NOT?: CompanySkuBatchNumRelationWhereInput | CompanySkuBatchNumRelationWhereInput[]
    company_sku_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    batch_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    created_at?: DateTimeFilter<"CompanySkuBatchNumRelation"> | Date | string
    companySku?: XOR<CompanySkuScalarRelationFilter, CompanySkuWhereInput>
    batchNum?: XOR<BatchNumScalarRelationFilter, BatchNumWhereInput>
  }

  export type CompanySkuBatchNumRelationOrderByWithRelationInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
    created_at?: SortOrder
    companySku?: CompanySkuOrderByWithRelationInput
    batchNum?: BatchNumOrderByWithRelationInput
  }

  export type CompanySkuBatchNumRelationWhereUniqueInput = Prisma.AtLeast<{
    company_sku_id_batch_id?: CompanySkuBatchNumRelationCompany_sku_idBatch_idCompoundUniqueInput
    AND?: CompanySkuBatchNumRelationWhereInput | CompanySkuBatchNumRelationWhereInput[]
    OR?: CompanySkuBatchNumRelationWhereInput[]
    NOT?: CompanySkuBatchNumRelationWhereInput | CompanySkuBatchNumRelationWhereInput[]
    company_sku_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    batch_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    created_at?: DateTimeFilter<"CompanySkuBatchNumRelation"> | Date | string
    companySku?: XOR<CompanySkuScalarRelationFilter, CompanySkuWhereInput>
    batchNum?: XOR<BatchNumScalarRelationFilter, BatchNumWhereInput>
  }, "company_sku_id_batch_id">

  export type CompanySkuBatchNumRelationOrderByWithAggregationInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
    created_at?: SortOrder
    _count?: CompanySkuBatchNumRelationCountOrderByAggregateInput
    _avg?: CompanySkuBatchNumRelationAvgOrderByAggregateInput
    _max?: CompanySkuBatchNumRelationMaxOrderByAggregateInput
    _min?: CompanySkuBatchNumRelationMinOrderByAggregateInput
    _sum?: CompanySkuBatchNumRelationSumOrderByAggregateInput
  }

  export type CompanySkuBatchNumRelationScalarWhereWithAggregatesInput = {
    AND?: CompanySkuBatchNumRelationScalarWhereWithAggregatesInput | CompanySkuBatchNumRelationScalarWhereWithAggregatesInput[]
    OR?: CompanySkuBatchNumRelationScalarWhereWithAggregatesInput[]
    NOT?: CompanySkuBatchNumRelationScalarWhereWithAggregatesInput | CompanySkuBatchNumRelationScalarWhereWithAggregatesInput[]
    company_sku_id?: IntWithAggregatesFilter<"CompanySkuBatchNumRelation"> | number
    batch_id?: IntWithAggregatesFilter<"CompanySkuBatchNumRelation"> | number
    created_at?: DateTimeWithAggregatesFilter<"CompanySkuBatchNumRelation"> | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    companySkus?: CompanySkuCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    companySkus?: CompanySkuUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    companySkus?: CompanySkuUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companySkus?: CompanySkuUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkuCreateInput = {
    sku_name: string
    companySkus?: CompanySkuCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateInput = {
    id?: number
    sku_name: string
    companySkus?: CompanySkuUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuUpdateInput = {
    sku_name?: StringFieldUpdateOperationsInput | string
    companySkus?: CompanySkuUpdateManyWithoutSkuNestedInput
  }

  export type SkuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku_name?: StringFieldUpdateOperationsInput | string
    companySkus?: CompanySkuUncheckedUpdateManyWithoutSkuNestedInput
  }

  export type SkuCreateManyInput = {
    id?: number
    sku_name: string
  }

  export type SkuUpdateManyMutationInput = {
    sku_name?: StringFieldUpdateOperationsInput | string
  }

  export type SkuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku_name?: StringFieldUpdateOperationsInput | string
  }

  export type BatchNumCreateInput = {
    quantity: number
    companySkuBatches?: CompanySkuBatchNumRelationCreateNestedManyWithoutBatchNumInput
  }

  export type BatchNumUncheckedCreateInput = {
    id?: number
    quantity: number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutBatchNumInput
  }

  export type BatchNumUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    companySkuBatches?: CompanySkuBatchNumRelationUpdateManyWithoutBatchNumNestedInput
  }

  export type BatchNumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedUpdateManyWithoutBatchNumNestedInput
  }

  export type BatchNumCreateManyInput = {
    id?: number
    quantity: number
  }

  export type BatchNumUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BatchNumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySkuCreateInput = {
    company: CompanyCreateNestedOneWithoutCompanySkusInput
    sku: SkuCreateNestedOneWithoutCompanySkusInput
    companySkuBatches?: CompanySkuBatchNumRelationCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuUncheckedCreateInput = {
    id?: number
    company_id: number
    sku_id: number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuUpdateInput = {
    company?: CompanyUpdateOneRequiredWithoutCompanySkusNestedInput
    sku?: SkuUpdateOneRequiredWithoutCompanySkusNestedInput
    companySkuBatches?: CompanySkuBatchNumRelationUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuCreateManyInput = {
    id?: number
    company_id: number
    sku_id: number
  }

  export type CompanySkuUpdateManyMutationInput = {

  }

  export type CompanySkuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySkuBatchNumRelationCreateInput = {
    created_at?: Date | string
    companySku: CompanySkuCreateNestedOneWithoutCompanySkuBatchesInput
    batchNum: BatchNumCreateNestedOneWithoutCompanySkuBatchesInput
  }

  export type CompanySkuBatchNumRelationUncheckedCreateInput = {
    company_sku_id: number
    batch_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    companySku?: CompanySkuUpdateOneRequiredWithoutCompanySkuBatchesNestedInput
    batchNum?: BatchNumUpdateOneRequiredWithoutCompanySkuBatchesNestedInput
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateInput = {
    company_sku_id?: IntFieldUpdateOperationsInput | number
    batch_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySkuBatchNumRelationCreateManyInput = {
    company_sku_id: number
    batch_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateManyInput = {
    company_sku_id?: IntFieldUpdateOperationsInput | number
    batch_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CompanySkuListRelationFilter = {
    every?: CompanySkuWhereInput
    some?: CompanySkuWhereInput
    none?: CompanySkuWhereInput
  }

  export type CompanySkuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
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

  export type SkuCountOrderByAggregateInput = {
    id?: SortOrder
    sku_name?: SortOrder
  }

  export type SkuAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkuMaxOrderByAggregateInput = {
    id?: SortOrder
    sku_name?: SortOrder
  }

  export type SkuMinOrderByAggregateInput = {
    id?: SortOrder
    sku_name?: SortOrder
  }

  export type SkuSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanySkuBatchNumRelationListRelationFilter = {
    every?: CompanySkuBatchNumRelationWhereInput
    some?: CompanySkuBatchNumRelationWhereInput
    none?: CompanySkuBatchNumRelationWhereInput
  }

  export type CompanySkuBatchNumRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchNumCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BatchNumAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BatchNumMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BatchNumMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BatchNumSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type SkuScalarRelationFilter = {
    is?: SkuWhereInput
    isNot?: SkuWhereInput
  }

  export type CompanySkuCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
  }

  export type CompanySkuAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
  }

  export type CompanySkuMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
  }

  export type CompanySkuMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
  }

  export type CompanySkuSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    sku_id?: SortOrder
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

  export type CompanySkuScalarRelationFilter = {
    is?: CompanySkuWhereInput
    isNot?: CompanySkuWhereInput
  }

  export type BatchNumScalarRelationFilter = {
    is?: BatchNumWhereInput
    isNot?: BatchNumWhereInput
  }

  export type CompanySkuBatchNumRelationCompany_sku_idBatch_idCompoundUniqueInput = {
    company_sku_id: number
    batch_id: number
  }

  export type CompanySkuBatchNumRelationCountOrderByAggregateInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
    created_at?: SortOrder
  }

  export type CompanySkuBatchNumRelationAvgOrderByAggregateInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
  }

  export type CompanySkuBatchNumRelationMaxOrderByAggregateInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
    created_at?: SortOrder
  }

  export type CompanySkuBatchNumRelationMinOrderByAggregateInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
    created_at?: SortOrder
  }

  export type CompanySkuBatchNumRelationSumOrderByAggregateInput = {
    company_sku_id?: SortOrder
    batch_id?: SortOrder
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

  export type CompanySkuCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput> | CompanySkuCreateWithoutCompanyInput[] | CompanySkuUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanyInput | CompanySkuCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanySkuCreateManyCompanyInputEnvelope
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
  }

  export type CompanySkuUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput> | CompanySkuCreateWithoutCompanyInput[] | CompanySkuUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanyInput | CompanySkuCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanySkuCreateManyCompanyInputEnvelope
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CompanySkuUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput> | CompanySkuCreateWithoutCompanyInput[] | CompanySkuUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanyInput | CompanySkuCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanySkuUpsertWithWhereUniqueWithoutCompanyInput | CompanySkuUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanySkuCreateManyCompanyInputEnvelope
    set?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    disconnect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    delete?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    update?: CompanySkuUpdateWithWhereUniqueWithoutCompanyInput | CompanySkuUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanySkuUpdateManyWithWhereWithoutCompanyInput | CompanySkuUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanySkuUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput> | CompanySkuCreateWithoutCompanyInput[] | CompanySkuUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanyInput | CompanySkuCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanySkuUpsertWithWhereUniqueWithoutCompanyInput | CompanySkuUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanySkuCreateManyCompanyInputEnvelope
    set?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    disconnect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    delete?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    update?: CompanySkuUpdateWithWhereUniqueWithoutCompanyInput | CompanySkuUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanySkuUpdateManyWithWhereWithoutCompanyInput | CompanySkuUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
  }

  export type CompanySkuCreateNestedManyWithoutSkuInput = {
    create?: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput> | CompanySkuCreateWithoutSkuInput[] | CompanySkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutSkuInput | CompanySkuCreateOrConnectWithoutSkuInput[]
    createMany?: CompanySkuCreateManySkuInputEnvelope
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
  }

  export type CompanySkuUncheckedCreateNestedManyWithoutSkuInput = {
    create?: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput> | CompanySkuCreateWithoutSkuInput[] | CompanySkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutSkuInput | CompanySkuCreateOrConnectWithoutSkuInput[]
    createMany?: CompanySkuCreateManySkuInputEnvelope
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
  }

  export type CompanySkuUpdateManyWithoutSkuNestedInput = {
    create?: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput> | CompanySkuCreateWithoutSkuInput[] | CompanySkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutSkuInput | CompanySkuCreateOrConnectWithoutSkuInput[]
    upsert?: CompanySkuUpsertWithWhereUniqueWithoutSkuInput | CompanySkuUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: CompanySkuCreateManySkuInputEnvelope
    set?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    disconnect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    delete?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    update?: CompanySkuUpdateWithWhereUniqueWithoutSkuInput | CompanySkuUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: CompanySkuUpdateManyWithWhereWithoutSkuInput | CompanySkuUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
  }

  export type CompanySkuUncheckedUpdateManyWithoutSkuNestedInput = {
    create?: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput> | CompanySkuCreateWithoutSkuInput[] | CompanySkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: CompanySkuCreateOrConnectWithoutSkuInput | CompanySkuCreateOrConnectWithoutSkuInput[]
    upsert?: CompanySkuUpsertWithWhereUniqueWithoutSkuInput | CompanySkuUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: CompanySkuCreateManySkuInputEnvelope
    set?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    disconnect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    delete?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    connect?: CompanySkuWhereUniqueInput | CompanySkuWhereUniqueInput[]
    update?: CompanySkuUpdateWithWhereUniqueWithoutSkuInput | CompanySkuUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: CompanySkuUpdateManyWithWhereWithoutSkuInput | CompanySkuUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
  }

  export type CompanySkuBatchNumRelationCreateNestedManyWithoutBatchNumInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput> | CompanySkuBatchNumRelationCreateWithoutBatchNumInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput | CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyBatchNumInputEnvelope
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
  }

  export type CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutBatchNumInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput> | CompanySkuBatchNumRelationCreateWithoutBatchNumInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput | CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyBatchNumInputEnvelope
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
  }

  export type CompanySkuBatchNumRelationUpdateManyWithoutBatchNumNestedInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput> | CompanySkuBatchNumRelationCreateWithoutBatchNumInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput | CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput[]
    upsert?: CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutBatchNumInput | CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutBatchNumInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyBatchNumInputEnvelope
    set?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    disconnect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    delete?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    update?: CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutBatchNumInput | CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutBatchNumInput[]
    updateMany?: CompanySkuBatchNumRelationUpdateManyWithWhereWithoutBatchNumInput | CompanySkuBatchNumRelationUpdateManyWithWhereWithoutBatchNumInput[]
    deleteMany?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateManyWithoutBatchNumNestedInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput> | CompanySkuBatchNumRelationCreateWithoutBatchNumInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput | CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput[]
    upsert?: CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutBatchNumInput | CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutBatchNumInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyBatchNumInputEnvelope
    set?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    disconnect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    delete?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    update?: CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutBatchNumInput | CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutBatchNumInput[]
    updateMany?: CompanySkuBatchNumRelationUpdateManyWithWhereWithoutBatchNumInput | CompanySkuBatchNumRelationUpdateManyWithWhereWithoutBatchNumInput[]
    deleteMany?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCompanySkusInput = {
    create?: XOR<CompanyCreateWithoutCompanySkusInput, CompanyUncheckedCreateWithoutCompanySkusInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanySkusInput
    connect?: CompanyWhereUniqueInput
  }

  export type SkuCreateNestedOneWithoutCompanySkusInput = {
    create?: XOR<SkuCreateWithoutCompanySkusInput, SkuUncheckedCreateWithoutCompanySkusInput>
    connectOrCreate?: SkuCreateOrConnectWithoutCompanySkusInput
    connect?: SkuWhereUniqueInput
  }

  export type CompanySkuBatchNumRelationCreateNestedManyWithoutCompanySkuInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput> | CompanySkuBatchNumRelationCreateWithoutCompanySkuInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput | CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyCompanySkuInputEnvelope
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
  }

  export type CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutCompanySkuInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput> | CompanySkuBatchNumRelationCreateWithoutCompanySkuInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput | CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyCompanySkuInputEnvelope
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutCompanySkusNestedInput = {
    create?: XOR<CompanyCreateWithoutCompanySkusInput, CompanyUncheckedCreateWithoutCompanySkusInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanySkusInput
    upsert?: CompanyUpsertWithoutCompanySkusInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCompanySkusInput, CompanyUpdateWithoutCompanySkusInput>, CompanyUncheckedUpdateWithoutCompanySkusInput>
  }

  export type SkuUpdateOneRequiredWithoutCompanySkusNestedInput = {
    create?: XOR<SkuCreateWithoutCompanySkusInput, SkuUncheckedCreateWithoutCompanySkusInput>
    connectOrCreate?: SkuCreateOrConnectWithoutCompanySkusInput
    upsert?: SkuUpsertWithoutCompanySkusInput
    connect?: SkuWhereUniqueInput
    update?: XOR<XOR<SkuUpdateToOneWithWhereWithoutCompanySkusInput, SkuUpdateWithoutCompanySkusInput>, SkuUncheckedUpdateWithoutCompanySkusInput>
  }

  export type CompanySkuBatchNumRelationUpdateManyWithoutCompanySkuNestedInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput> | CompanySkuBatchNumRelationCreateWithoutCompanySkuInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput | CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput[]
    upsert?: CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutCompanySkuInput | CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutCompanySkuInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyCompanySkuInputEnvelope
    set?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    disconnect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    delete?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    update?: CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutCompanySkuInput | CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutCompanySkuInput[]
    updateMany?: CompanySkuBatchNumRelationUpdateManyWithWhereWithoutCompanySkuInput | CompanySkuBatchNumRelationUpdateManyWithWhereWithoutCompanySkuInput[]
    deleteMany?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuNestedInput = {
    create?: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput> | CompanySkuBatchNumRelationCreateWithoutCompanySkuInput[] | CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput[]
    connectOrCreate?: CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput | CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput[]
    upsert?: CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutCompanySkuInput | CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutCompanySkuInput[]
    createMany?: CompanySkuBatchNumRelationCreateManyCompanySkuInputEnvelope
    set?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    disconnect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    delete?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    connect?: CompanySkuBatchNumRelationWhereUniqueInput | CompanySkuBatchNumRelationWhereUniqueInput[]
    update?: CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutCompanySkuInput | CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutCompanySkuInput[]
    updateMany?: CompanySkuBatchNumRelationUpdateManyWithWhereWithoutCompanySkuInput | CompanySkuBatchNumRelationUpdateManyWithWhereWithoutCompanySkuInput[]
    deleteMany?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
  }

  export type CompanySkuCreateNestedOneWithoutCompanySkuBatchesInput = {
    create?: XOR<CompanySkuCreateWithoutCompanySkuBatchesInput, CompanySkuUncheckedCreateWithoutCompanySkuBatchesInput>
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanySkuBatchesInput
    connect?: CompanySkuWhereUniqueInput
  }

  export type BatchNumCreateNestedOneWithoutCompanySkuBatchesInput = {
    create?: XOR<BatchNumCreateWithoutCompanySkuBatchesInput, BatchNumUncheckedCreateWithoutCompanySkuBatchesInput>
    connectOrCreate?: BatchNumCreateOrConnectWithoutCompanySkuBatchesInput
    connect?: BatchNumWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanySkuUpdateOneRequiredWithoutCompanySkuBatchesNestedInput = {
    create?: XOR<CompanySkuCreateWithoutCompanySkuBatchesInput, CompanySkuUncheckedCreateWithoutCompanySkuBatchesInput>
    connectOrCreate?: CompanySkuCreateOrConnectWithoutCompanySkuBatchesInput
    upsert?: CompanySkuUpsertWithoutCompanySkuBatchesInput
    connect?: CompanySkuWhereUniqueInput
    update?: XOR<XOR<CompanySkuUpdateToOneWithWhereWithoutCompanySkuBatchesInput, CompanySkuUpdateWithoutCompanySkuBatchesInput>, CompanySkuUncheckedUpdateWithoutCompanySkuBatchesInput>
  }

  export type BatchNumUpdateOneRequiredWithoutCompanySkuBatchesNestedInput = {
    create?: XOR<BatchNumCreateWithoutCompanySkuBatchesInput, BatchNumUncheckedCreateWithoutCompanySkuBatchesInput>
    connectOrCreate?: BatchNumCreateOrConnectWithoutCompanySkuBatchesInput
    upsert?: BatchNumUpsertWithoutCompanySkuBatchesInput
    connect?: BatchNumWhereUniqueInput
    update?: XOR<XOR<BatchNumUpdateToOneWithWhereWithoutCompanySkuBatchesInput, BatchNumUpdateWithoutCompanySkuBatchesInput>, BatchNumUncheckedUpdateWithoutCompanySkuBatchesInput>
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

  export type CompanySkuCreateWithoutCompanyInput = {
    sku: SkuCreateNestedOneWithoutCompanySkusInput
    companySkuBatches?: CompanySkuBatchNumRelationCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuUncheckedCreateWithoutCompanyInput = {
    id?: number
    sku_id: number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuCreateOrConnectWithoutCompanyInput = {
    where: CompanySkuWhereUniqueInput
    create: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput>
  }

  export type CompanySkuCreateManyCompanyInputEnvelope = {
    data: CompanySkuCreateManyCompanyInput | CompanySkuCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanySkuUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanySkuWhereUniqueInput
    update: XOR<CompanySkuUpdateWithoutCompanyInput, CompanySkuUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanySkuCreateWithoutCompanyInput, CompanySkuUncheckedCreateWithoutCompanyInput>
  }

  export type CompanySkuUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanySkuWhereUniqueInput
    data: XOR<CompanySkuUpdateWithoutCompanyInput, CompanySkuUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanySkuUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanySkuScalarWhereInput
    data: XOR<CompanySkuUpdateManyMutationInput, CompanySkuUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanySkuScalarWhereInput = {
    AND?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
    OR?: CompanySkuScalarWhereInput[]
    NOT?: CompanySkuScalarWhereInput | CompanySkuScalarWhereInput[]
    id?: IntFilter<"CompanySku"> | number
    company_id?: IntFilter<"CompanySku"> | number
    sku_id?: IntFilter<"CompanySku"> | number
  }

  export type CompanySkuCreateWithoutSkuInput = {
    company: CompanyCreateNestedOneWithoutCompanySkusInput
    companySkuBatches?: CompanySkuBatchNumRelationCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuUncheckedCreateWithoutSkuInput = {
    id?: number
    company_id: number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedCreateNestedManyWithoutCompanySkuInput
  }

  export type CompanySkuCreateOrConnectWithoutSkuInput = {
    where: CompanySkuWhereUniqueInput
    create: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput>
  }

  export type CompanySkuCreateManySkuInputEnvelope = {
    data: CompanySkuCreateManySkuInput | CompanySkuCreateManySkuInput[]
    skipDuplicates?: boolean
  }

  export type CompanySkuUpsertWithWhereUniqueWithoutSkuInput = {
    where: CompanySkuWhereUniqueInput
    update: XOR<CompanySkuUpdateWithoutSkuInput, CompanySkuUncheckedUpdateWithoutSkuInput>
    create: XOR<CompanySkuCreateWithoutSkuInput, CompanySkuUncheckedCreateWithoutSkuInput>
  }

  export type CompanySkuUpdateWithWhereUniqueWithoutSkuInput = {
    where: CompanySkuWhereUniqueInput
    data: XOR<CompanySkuUpdateWithoutSkuInput, CompanySkuUncheckedUpdateWithoutSkuInput>
  }

  export type CompanySkuUpdateManyWithWhereWithoutSkuInput = {
    where: CompanySkuScalarWhereInput
    data: XOR<CompanySkuUpdateManyMutationInput, CompanySkuUncheckedUpdateManyWithoutSkuInput>
  }

  export type CompanySkuBatchNumRelationCreateWithoutBatchNumInput = {
    created_at?: Date | string
    companySku: CompanySkuCreateNestedOneWithoutCompanySkuBatchesInput
  }

  export type CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput = {
    company_sku_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationCreateOrConnectWithoutBatchNumInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    create: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput>
  }

  export type CompanySkuBatchNumRelationCreateManyBatchNumInputEnvelope = {
    data: CompanySkuBatchNumRelationCreateManyBatchNumInput | CompanySkuBatchNumRelationCreateManyBatchNumInput[]
    skipDuplicates?: boolean
  }

  export type CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutBatchNumInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    update: XOR<CompanySkuBatchNumRelationUpdateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedUpdateWithoutBatchNumInput>
    create: XOR<CompanySkuBatchNumRelationCreateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedCreateWithoutBatchNumInput>
  }

  export type CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutBatchNumInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    data: XOR<CompanySkuBatchNumRelationUpdateWithoutBatchNumInput, CompanySkuBatchNumRelationUncheckedUpdateWithoutBatchNumInput>
  }

  export type CompanySkuBatchNumRelationUpdateManyWithWhereWithoutBatchNumInput = {
    where: CompanySkuBatchNumRelationScalarWhereInput
    data: XOR<CompanySkuBatchNumRelationUpdateManyMutationInput, CompanySkuBatchNumRelationUncheckedUpdateManyWithoutBatchNumInput>
  }

  export type CompanySkuBatchNumRelationScalarWhereInput = {
    AND?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
    OR?: CompanySkuBatchNumRelationScalarWhereInput[]
    NOT?: CompanySkuBatchNumRelationScalarWhereInput | CompanySkuBatchNumRelationScalarWhereInput[]
    company_sku_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    batch_id?: IntFilter<"CompanySkuBatchNumRelation"> | number
    created_at?: DateTimeFilter<"CompanySkuBatchNumRelation"> | Date | string
  }

  export type CompanyCreateWithoutCompanySkusInput = {
    name: string
  }

  export type CompanyUncheckedCreateWithoutCompanySkusInput = {
    id?: number
    name: string
  }

  export type CompanyCreateOrConnectWithoutCompanySkusInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompanySkusInput, CompanyUncheckedCreateWithoutCompanySkusInput>
  }

  export type SkuCreateWithoutCompanySkusInput = {
    sku_name: string
  }

  export type SkuUncheckedCreateWithoutCompanySkusInput = {
    id?: number
    sku_name: string
  }

  export type SkuCreateOrConnectWithoutCompanySkusInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutCompanySkusInput, SkuUncheckedCreateWithoutCompanySkusInput>
  }

  export type CompanySkuBatchNumRelationCreateWithoutCompanySkuInput = {
    created_at?: Date | string
    batchNum: BatchNumCreateNestedOneWithoutCompanySkuBatchesInput
  }

  export type CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput = {
    batch_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationCreateOrConnectWithoutCompanySkuInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    create: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput>
  }

  export type CompanySkuBatchNumRelationCreateManyCompanySkuInputEnvelope = {
    data: CompanySkuBatchNumRelationCreateManyCompanySkuInput | CompanySkuBatchNumRelationCreateManyCompanySkuInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutCompanySkusInput = {
    update: XOR<CompanyUpdateWithoutCompanySkusInput, CompanyUncheckedUpdateWithoutCompanySkusInput>
    create: XOR<CompanyCreateWithoutCompanySkusInput, CompanyUncheckedCreateWithoutCompanySkusInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCompanySkusInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCompanySkusInput, CompanyUncheckedUpdateWithoutCompanySkusInput>
  }

  export type CompanyUpdateWithoutCompanySkusInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutCompanySkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkuUpsertWithoutCompanySkusInput = {
    update: XOR<SkuUpdateWithoutCompanySkusInput, SkuUncheckedUpdateWithoutCompanySkusInput>
    create: XOR<SkuCreateWithoutCompanySkusInput, SkuUncheckedCreateWithoutCompanySkusInput>
    where?: SkuWhereInput
  }

  export type SkuUpdateToOneWithWhereWithoutCompanySkusInput = {
    where?: SkuWhereInput
    data: XOR<SkuUpdateWithoutCompanySkusInput, SkuUncheckedUpdateWithoutCompanySkusInput>
  }

  export type SkuUpdateWithoutCompanySkusInput = {
    sku_name?: StringFieldUpdateOperationsInput | string
  }

  export type SkuUncheckedUpdateWithoutCompanySkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku_name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanySkuBatchNumRelationUpsertWithWhereUniqueWithoutCompanySkuInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    update: XOR<CompanySkuBatchNumRelationUpdateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedUpdateWithoutCompanySkuInput>
    create: XOR<CompanySkuBatchNumRelationCreateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedCreateWithoutCompanySkuInput>
  }

  export type CompanySkuBatchNumRelationUpdateWithWhereUniqueWithoutCompanySkuInput = {
    where: CompanySkuBatchNumRelationWhereUniqueInput
    data: XOR<CompanySkuBatchNumRelationUpdateWithoutCompanySkuInput, CompanySkuBatchNumRelationUncheckedUpdateWithoutCompanySkuInput>
  }

  export type CompanySkuBatchNumRelationUpdateManyWithWhereWithoutCompanySkuInput = {
    where: CompanySkuBatchNumRelationScalarWhereInput
    data: XOR<CompanySkuBatchNumRelationUpdateManyMutationInput, CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuInput>
  }

  export type CompanySkuCreateWithoutCompanySkuBatchesInput = {
    company: CompanyCreateNestedOneWithoutCompanySkusInput
    sku: SkuCreateNestedOneWithoutCompanySkusInput
  }

  export type CompanySkuUncheckedCreateWithoutCompanySkuBatchesInput = {
    id?: number
    company_id: number
    sku_id: number
  }

  export type CompanySkuCreateOrConnectWithoutCompanySkuBatchesInput = {
    where: CompanySkuWhereUniqueInput
    create: XOR<CompanySkuCreateWithoutCompanySkuBatchesInput, CompanySkuUncheckedCreateWithoutCompanySkuBatchesInput>
  }

  export type BatchNumCreateWithoutCompanySkuBatchesInput = {
    quantity: number
  }

  export type BatchNumUncheckedCreateWithoutCompanySkuBatchesInput = {
    id?: number
    quantity: number
  }

  export type BatchNumCreateOrConnectWithoutCompanySkuBatchesInput = {
    where: BatchNumWhereUniqueInput
    create: XOR<BatchNumCreateWithoutCompanySkuBatchesInput, BatchNumUncheckedCreateWithoutCompanySkuBatchesInput>
  }

  export type CompanySkuUpsertWithoutCompanySkuBatchesInput = {
    update: XOR<CompanySkuUpdateWithoutCompanySkuBatchesInput, CompanySkuUncheckedUpdateWithoutCompanySkuBatchesInput>
    create: XOR<CompanySkuCreateWithoutCompanySkuBatchesInput, CompanySkuUncheckedCreateWithoutCompanySkuBatchesInput>
    where?: CompanySkuWhereInput
  }

  export type CompanySkuUpdateToOneWithWhereWithoutCompanySkuBatchesInput = {
    where?: CompanySkuWhereInput
    data: XOR<CompanySkuUpdateWithoutCompanySkuBatchesInput, CompanySkuUncheckedUpdateWithoutCompanySkuBatchesInput>
  }

  export type CompanySkuUpdateWithoutCompanySkuBatchesInput = {
    company?: CompanyUpdateOneRequiredWithoutCompanySkusNestedInput
    sku?: SkuUpdateOneRequiredWithoutCompanySkusNestedInput
  }

  export type CompanySkuUncheckedUpdateWithoutCompanySkuBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
  }

  export type BatchNumUpsertWithoutCompanySkuBatchesInput = {
    update: XOR<BatchNumUpdateWithoutCompanySkuBatchesInput, BatchNumUncheckedUpdateWithoutCompanySkuBatchesInput>
    create: XOR<BatchNumCreateWithoutCompanySkuBatchesInput, BatchNumUncheckedCreateWithoutCompanySkuBatchesInput>
    where?: BatchNumWhereInput
  }

  export type BatchNumUpdateToOneWithWhereWithoutCompanySkuBatchesInput = {
    where?: BatchNumWhereInput
    data: XOR<BatchNumUpdateWithoutCompanySkuBatchesInput, BatchNumUncheckedUpdateWithoutCompanySkuBatchesInput>
  }

  export type BatchNumUpdateWithoutCompanySkuBatchesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BatchNumUncheckedUpdateWithoutCompanySkuBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySkuCreateManyCompanyInput = {
    id?: number
    sku_id: number
  }

  export type CompanySkuUpdateWithoutCompanyInput = {
    sku?: SkuUpdateOneRequiredWithoutCompanySkusNestedInput
    companySkuBatches?: CompanySkuBatchNumRelationUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySkuCreateManySkuInput = {
    id?: number
    company_id: number
  }

  export type CompanySkuUpdateWithoutSkuInput = {
    company?: CompanyUpdateOneRequiredWithoutCompanySkusNestedInput
    companySkuBatches?: CompanySkuBatchNumRelationUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuUncheckedUpdateWithoutSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    companySkuBatches?: CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuNestedInput
  }

  export type CompanySkuUncheckedUpdateManyWithoutSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySkuBatchNumRelationCreateManyBatchNumInput = {
    company_sku_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationUpdateWithoutBatchNumInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    companySku?: CompanySkuUpdateOneRequiredWithoutCompanySkuBatchesNestedInput
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateWithoutBatchNumInput = {
    company_sku_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateManyWithoutBatchNumInput = {
    company_sku_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySkuBatchNumRelationCreateManyCompanySkuInput = {
    batch_id: number
    created_at?: Date | string
  }

  export type CompanySkuBatchNumRelationUpdateWithoutCompanySkuInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNum?: BatchNumUpdateOneRequiredWithoutCompanySkuBatchesNestedInput
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateWithoutCompanySkuInput = {
    batch_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySkuBatchNumRelationUncheckedUpdateManyWithoutCompanySkuInput = {
    batch_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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