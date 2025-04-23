
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
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Texts
 * 
 */
export type Texts = $Result.DefaultSelection<Prisma.$TextsPayload>
/**
 * Model Structures
 * 
 */
export type Structures = $Result.DefaultSelection<Prisma.$StructuresPayload>
/**
 * Model Routes
 * 
 */
export type Routes = $Result.DefaultSelection<Prisma.$RoutesPayload>

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
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.texts`: Exposes CRUD operations for the **Texts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Texts
    * const texts = await prisma.texts.findMany()
    * ```
    */
  get texts(): Prisma.TextsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.structures`: Exposes CRUD operations for the **Structures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Structures
    * const structures = await prisma.structures.findMany()
    * ```
    */
  get structures(): Prisma.StructuresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routes`: Exposes CRUD operations for the **Routes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.routes.findMany()
    * ```
    */
  get routes(): Prisma.RoutesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Token: 'Token',
    Texts: 'Texts',
    Structures: 'Structures',
    Routes: 'Routes'
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
      modelProps: "user" | "token" | "texts" | "structures" | "routes"
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
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Texts: {
        payload: Prisma.$TextsPayload<ExtArgs>
        fields: Prisma.TextsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          findFirst: {
            args: Prisma.TextsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          findMany: {
            args: Prisma.TextsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>[]
          }
          create: {
            args: Prisma.TextsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          createMany: {
            args: Prisma.TextsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>[]
          }
          delete: {
            args: Prisma.TextsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          update: {
            args: Prisma.TextsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          deleteMany: {
            args: Prisma.TextsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>[]
          }
          upsert: {
            args: Prisma.TextsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextsPayload>
          }
          aggregate: {
            args: Prisma.TextsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTexts>
          }
          groupBy: {
            args: Prisma.TextsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextsCountArgs<ExtArgs>
            result: $Utils.Optional<TextsCountAggregateOutputType> | number
          }
        }
      }
      Structures: {
        payload: Prisma.$StructuresPayload<ExtArgs>
        fields: Prisma.StructuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StructuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StructuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          findFirst: {
            args: Prisma.StructuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StructuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          findMany: {
            args: Prisma.StructuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>[]
          }
          create: {
            args: Prisma.StructuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          createMany: {
            args: Prisma.StructuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StructuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>[]
          }
          delete: {
            args: Prisma.StructuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          update: {
            args: Prisma.StructuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          deleteMany: {
            args: Prisma.StructuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StructuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StructuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>[]
          }
          upsert: {
            args: Prisma.StructuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuresPayload>
          }
          aggregate: {
            args: Prisma.StructuresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStructures>
          }
          groupBy: {
            args: Prisma.StructuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<StructuresGroupByOutputType>[]
          }
          count: {
            args: Prisma.StructuresCountArgs<ExtArgs>
            result: $Utils.Optional<StructuresCountAggregateOutputType> | number
          }
        }
      }
      Routes: {
        payload: Prisma.$RoutesPayload<ExtArgs>
        fields: Prisma.RoutesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          findFirst: {
            args: Prisma.RoutesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          findMany: {
            args: Prisma.RoutesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          create: {
            args: Prisma.RoutesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          createMany: {
            args: Prisma.RoutesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          delete: {
            args: Prisma.RoutesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          update: {
            args: Prisma.RoutesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          deleteMany: {
            args: Prisma.RoutesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          upsert: {
            args: Prisma.RoutesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          aggregate: {
            args: Prisma.RoutesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutes>
          }
          groupBy: {
            args: Prisma.RoutesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutesCountArgs<ExtArgs>
            result: $Utils.Optional<RoutesCountAggregateOutputType> | number
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
    user?: UserOmit
    token?: TokenOmit
    texts?: TextsOmit
    structures?: StructuresOmit
    routes?: RoutesOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
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
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    code: string | null
    cDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    code: string | null
    cDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isActive: number
    code: number
    cDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isActive?: true
    code?: true
    cDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isActive?: true
    code?: true
    cDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isActive?: true
    code?: true
    cDate?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    isActive: boolean
    code: string
    cDate: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    cDate?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    cDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    cDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    cDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "isActive" | "code" | "cDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      isActive: boolean
      code: string
      cDate: Date
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
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly code: FieldRef<"User", 'String'>
    readonly cDate: FieldRef<"User", 'DateTime'>
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
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
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
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    userId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    userId: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    refreshToken: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    refreshToken: string
    userId: string
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      refreshToken: string
      userId: string
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly refreshToken: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Texts
   */

  export type AggregateTexts = {
    _count: TextsCountAggregateOutputType | null
    _avg: TextsAvgAggregateOutputType | null
    _sum: TextsSumAggregateOutputType | null
    _min: TextsMinAggregateOutputType | null
    _max: TextsMaxAggregateOutputType | null
  }

  export type TextsAvgAggregateOutputType = {
    id: number | null
  }

  export type TextsSumAggregateOutputType = {
    id: number | null
  }

  export type TextsMinAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
  }

  export type TextsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
  }

  export type TextsCountAggregateOutputType = {
    id: number
    name: number
    text: number
    _all: number
  }


  export type TextsAvgAggregateInputType = {
    id?: true
  }

  export type TextsSumAggregateInputType = {
    id?: true
  }

  export type TextsMinAggregateInputType = {
    id?: true
    name?: true
    text?: true
  }

  export type TextsMaxAggregateInputType = {
    id?: true
    name?: true
    text?: true
  }

  export type TextsCountAggregateInputType = {
    id?: true
    name?: true
    text?: true
    _all?: true
  }

  export type TextsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to aggregate.
     */
    where?: TextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextsOrderByWithRelationInput | TextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Texts
    **/
    _count?: true | TextsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextsMaxAggregateInputType
  }

  export type GetTextsAggregateType<T extends TextsAggregateArgs> = {
        [P in keyof T & keyof AggregateTexts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTexts[P]>
      : GetScalarType<T[P], AggregateTexts[P]>
  }




  export type TextsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextsWhereInput
    orderBy?: TextsOrderByWithAggregationInput | TextsOrderByWithAggregationInput[]
    by: TextsScalarFieldEnum[] | TextsScalarFieldEnum
    having?: TextsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextsCountAggregateInputType | true
    _avg?: TextsAvgAggregateInputType
    _sum?: TextsSumAggregateInputType
    _min?: TextsMinAggregateInputType
    _max?: TextsMaxAggregateInputType
  }

  export type TextsGroupByOutputType = {
    id: number
    name: string
    text: string
    _count: TextsCountAggregateOutputType | null
    _avg: TextsAvgAggregateOutputType | null
    _sum: TextsSumAggregateOutputType | null
    _min: TextsMinAggregateOutputType | null
    _max: TextsMaxAggregateOutputType | null
  }

  type GetTextsGroupByPayload<T extends TextsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextsGroupByOutputType[P]>
            : GetScalarType<T[P], TextsGroupByOutputType[P]>
        }
      >
    >


  export type TextsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    text?: boolean
  }, ExtArgs["result"]["texts"]>

  export type TextsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    text?: boolean
  }, ExtArgs["result"]["texts"]>

  export type TextsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    text?: boolean
  }, ExtArgs["result"]["texts"]>

  export type TextsSelectScalar = {
    id?: boolean
    name?: boolean
    text?: boolean
  }

  export type TextsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "text", ExtArgs["result"]["texts"]>

  export type $TextsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Texts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      text: string
    }, ExtArgs["result"]["texts"]>
    composites: {}
  }

  type TextsGetPayload<S extends boolean | null | undefined | TextsDefaultArgs> = $Result.GetResult<Prisma.$TextsPayload, S>

  type TextsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextsCountAggregateInputType | true
    }

  export interface TextsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Texts'], meta: { name: 'Texts' } }
    /**
     * Find zero or one Texts that matches the filter.
     * @param {TextsFindUniqueArgs} args - Arguments to find a Texts
     * @example
     * // Get one Texts
     * const texts = await prisma.texts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextsFindUniqueArgs>(args: SelectSubset<T, TextsFindUniqueArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Texts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextsFindUniqueOrThrowArgs} args - Arguments to find a Texts
     * @example
     * // Get one Texts
     * const texts = await prisma.texts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextsFindUniqueOrThrowArgs>(args: SelectSubset<T, TextsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsFindFirstArgs} args - Arguments to find a Texts
     * @example
     * // Get one Texts
     * const texts = await prisma.texts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextsFindFirstArgs>(args?: SelectSubset<T, TextsFindFirstArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Texts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsFindFirstOrThrowArgs} args - Arguments to find a Texts
     * @example
     * // Get one Texts
     * const texts = await prisma.texts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextsFindFirstOrThrowArgs>(args?: SelectSubset<T, TextsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Texts
     * const texts = await prisma.texts.findMany()
     * 
     * // Get first 10 Texts
     * const texts = await prisma.texts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textsWithIdOnly = await prisma.texts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextsFindManyArgs>(args?: SelectSubset<T, TextsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Texts.
     * @param {TextsCreateArgs} args - Arguments to create a Texts.
     * @example
     * // Create one Texts
     * const Texts = await prisma.texts.create({
     *   data: {
     *     // ... data to create a Texts
     *   }
     * })
     * 
     */
    create<T extends TextsCreateArgs>(args: SelectSubset<T, TextsCreateArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Texts.
     * @param {TextsCreateManyArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const texts = await prisma.texts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextsCreateManyArgs>(args?: SelectSubset<T, TextsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Texts and returns the data saved in the database.
     * @param {TextsCreateManyAndReturnArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const texts = await prisma.texts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Texts and only return the `id`
     * const textsWithIdOnly = await prisma.texts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextsCreateManyAndReturnArgs>(args?: SelectSubset<T, TextsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Texts.
     * @param {TextsDeleteArgs} args - Arguments to delete one Texts.
     * @example
     * // Delete one Texts
     * const Texts = await prisma.texts.delete({
     *   where: {
     *     // ... filter to delete one Texts
     *   }
     * })
     * 
     */
    delete<T extends TextsDeleteArgs>(args: SelectSubset<T, TextsDeleteArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Texts.
     * @param {TextsUpdateArgs} args - Arguments to update one Texts.
     * @example
     * // Update one Texts
     * const texts = await prisma.texts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextsUpdateArgs>(args: SelectSubset<T, TextsUpdateArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Texts.
     * @param {TextsDeleteManyArgs} args - Arguments to filter Texts to delete.
     * @example
     * // Delete a few Texts
     * const { count } = await prisma.texts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextsDeleteManyArgs>(args?: SelectSubset<T, TextsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Texts
     * const texts = await prisma.texts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextsUpdateManyArgs>(args: SelectSubset<T, TextsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts and returns the data updated in the database.
     * @param {TextsUpdateManyAndReturnArgs} args - Arguments to update many Texts.
     * @example
     * // Update many Texts
     * const texts = await prisma.texts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Texts and only return the `id`
     * const textsWithIdOnly = await prisma.texts.updateManyAndReturn({
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
    updateManyAndReturn<T extends TextsUpdateManyAndReturnArgs>(args: SelectSubset<T, TextsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Texts.
     * @param {TextsUpsertArgs} args - Arguments to update or create a Texts.
     * @example
     * // Update or create a Texts
     * const texts = await prisma.texts.upsert({
     *   create: {
     *     // ... data to create a Texts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Texts we want to update
     *   }
     * })
     */
    upsert<T extends TextsUpsertArgs>(args: SelectSubset<T, TextsUpsertArgs<ExtArgs>>): Prisma__TextsClient<$Result.GetResult<Prisma.$TextsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsCountArgs} args - Arguments to filter Texts to count.
     * @example
     * // Count the number of Texts
     * const count = await prisma.texts.count({
     *   where: {
     *     // ... the filter for the Texts we want to count
     *   }
     * })
    **/
    count<T extends TextsCountArgs>(
      args?: Subset<T, TextsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextsAggregateArgs>(args: Subset<T, TextsAggregateArgs>): Prisma.PrismaPromise<GetTextsAggregateType<T>>

    /**
     * Group by Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextsGroupByArgs} args - Group by arguments.
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
      T extends TextsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextsGroupByArgs['orderBy'] }
        : { orderBy?: TextsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Texts model
   */
  readonly fields: TextsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Texts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Texts model
   */
  interface TextsFieldRefs {
    readonly id: FieldRef<"Texts", 'Int'>
    readonly name: FieldRef<"Texts", 'String'>
    readonly text: FieldRef<"Texts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Texts findUnique
   */
  export type TextsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where: TextsWhereUniqueInput
  }

  /**
   * Texts findUniqueOrThrow
   */
  export type TextsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where: TextsWhereUniqueInput
  }

  /**
   * Texts findFirst
   */
  export type TextsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextsOrderByWithRelationInput | TextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextsScalarFieldEnum | TextsScalarFieldEnum[]
  }

  /**
   * Texts findFirstOrThrow
   */
  export type TextsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextsOrderByWithRelationInput | TextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextsScalarFieldEnum | TextsScalarFieldEnum[]
  }

  /**
   * Texts findMany
   */
  export type TextsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextsOrderByWithRelationInput | TextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Texts.
     */
    cursor?: TextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    distinct?: TextsScalarFieldEnum | TextsScalarFieldEnum[]
  }

  /**
   * Texts create
   */
  export type TextsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * The data needed to create a Texts.
     */
    data: XOR<TextsCreateInput, TextsUncheckedCreateInput>
  }

  /**
   * Texts createMany
   */
  export type TextsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Texts.
     */
    data: TextsCreateManyInput | TextsCreateManyInput[]
  }

  /**
   * Texts createManyAndReturn
   */
  export type TextsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * The data used to create many Texts.
     */
    data: TextsCreateManyInput | TextsCreateManyInput[]
  }

  /**
   * Texts update
   */
  export type TextsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * The data needed to update a Texts.
     */
    data: XOR<TextsUpdateInput, TextsUncheckedUpdateInput>
    /**
     * Choose, which Texts to update.
     */
    where: TextsWhereUniqueInput
  }

  /**
   * Texts updateMany
   */
  export type TextsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Texts.
     */
    data: XOR<TextsUpdateManyMutationInput, TextsUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextsWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
  }

  /**
   * Texts updateManyAndReturn
   */
  export type TextsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * The data used to update Texts.
     */
    data: XOR<TextsUpdateManyMutationInput, TextsUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextsWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
  }

  /**
   * Texts upsert
   */
  export type TextsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * The filter to search for the Texts to update in case it exists.
     */
    where: TextsWhereUniqueInput
    /**
     * In case the Texts found by the `where` argument doesn't exist, create a new Texts with this data.
     */
    create: XOR<TextsCreateInput, TextsUncheckedCreateInput>
    /**
     * In case the Texts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextsUpdateInput, TextsUncheckedUpdateInput>
  }

  /**
   * Texts delete
   */
  export type TextsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
    /**
     * Filter which Texts to delete.
     */
    where: TextsWhereUniqueInput
  }

  /**
   * Texts deleteMany
   */
  export type TextsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to delete
     */
    where?: TextsWhereInput
    /**
     * Limit how many Texts to delete.
     */
    limit?: number
  }

  /**
   * Texts without action
   */
  export type TextsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Texts
     */
    select?: TextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Texts
     */
    omit?: TextsOmit<ExtArgs> | null
  }


  /**
   * Model Structures
   */

  export type AggregateStructures = {
    _count: StructuresCountAggregateOutputType | null
    _avg: StructuresAvgAggregateOutputType | null
    _sum: StructuresSumAggregateOutputType | null
    _min: StructuresMinAggregateOutputType | null
    _max: StructuresMaxAggregateOutputType | null
  }

  export type StructuresAvgAggregateOutputType = {
    id: number | null
  }

  export type StructuresSumAggregateOutputType = {
    id: number | null
  }

  export type StructuresMinAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    udate: Date | null
    cdate: Date | null
  }

  export type StructuresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    udate: Date | null
    cdate: Date | null
  }

  export type StructuresCountAggregateOutputType = {
    id: number
    name: number
    path: number
    json: number
    udate: number
    cdate: number
    _all: number
  }


  export type StructuresAvgAggregateInputType = {
    id?: true
  }

  export type StructuresSumAggregateInputType = {
    id?: true
  }

  export type StructuresMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    udate?: true
    cdate?: true
  }

  export type StructuresMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    udate?: true
    cdate?: true
  }

  export type StructuresCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    json?: true
    udate?: true
    cdate?: true
    _all?: true
  }

  export type StructuresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Structures to aggregate.
     */
    where?: StructuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructuresOrderByWithRelationInput | StructuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StructuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Structures
    **/
    _count?: true | StructuresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StructuresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StructuresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StructuresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StructuresMaxAggregateInputType
  }

  export type GetStructuresAggregateType<T extends StructuresAggregateArgs> = {
        [P in keyof T & keyof AggregateStructures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStructures[P]>
      : GetScalarType<T[P], AggregateStructures[P]>
  }




  export type StructuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructuresWhereInput
    orderBy?: StructuresOrderByWithAggregationInput | StructuresOrderByWithAggregationInput[]
    by: StructuresScalarFieldEnum[] | StructuresScalarFieldEnum
    having?: StructuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StructuresCountAggregateInputType | true
    _avg?: StructuresAvgAggregateInputType
    _sum?: StructuresSumAggregateInputType
    _min?: StructuresMinAggregateInputType
    _max?: StructuresMaxAggregateInputType
  }

  export type StructuresGroupByOutputType = {
    id: number
    name: string
    path: string
    json: JsonValue
    udate: Date
    cdate: Date
    _count: StructuresCountAggregateOutputType | null
    _avg: StructuresAvgAggregateOutputType | null
    _sum: StructuresSumAggregateOutputType | null
    _min: StructuresMinAggregateOutputType | null
    _max: StructuresMaxAggregateOutputType | null
  }

  type GetStructuresGroupByPayload<T extends StructuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StructuresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StructuresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StructuresGroupByOutputType[P]>
            : GetScalarType<T[P], StructuresGroupByOutputType[P]>
        }
      >
    >


  export type StructuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["structures"]>

  export type StructuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["structures"]>

  export type StructuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["structures"]>

  export type StructuresSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }

  export type StructuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "json" | "udate" | "cdate", ExtArgs["result"]["structures"]>

  export type $StructuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Structures"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      path: string
      json: Prisma.JsonValue
      udate: Date
      cdate: Date
    }, ExtArgs["result"]["structures"]>
    composites: {}
  }

  type StructuresGetPayload<S extends boolean | null | undefined | StructuresDefaultArgs> = $Result.GetResult<Prisma.$StructuresPayload, S>

  type StructuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StructuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StructuresCountAggregateInputType | true
    }

  export interface StructuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Structures'], meta: { name: 'Structures' } }
    /**
     * Find zero or one Structures that matches the filter.
     * @param {StructuresFindUniqueArgs} args - Arguments to find a Structures
     * @example
     * // Get one Structures
     * const structures = await prisma.structures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StructuresFindUniqueArgs>(args: SelectSubset<T, StructuresFindUniqueArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Structures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StructuresFindUniqueOrThrowArgs} args - Arguments to find a Structures
     * @example
     * // Get one Structures
     * const structures = await prisma.structures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StructuresFindUniqueOrThrowArgs>(args: SelectSubset<T, StructuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Structures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresFindFirstArgs} args - Arguments to find a Structures
     * @example
     * // Get one Structures
     * const structures = await prisma.structures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StructuresFindFirstArgs>(args?: SelectSubset<T, StructuresFindFirstArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Structures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresFindFirstOrThrowArgs} args - Arguments to find a Structures
     * @example
     * // Get one Structures
     * const structures = await prisma.structures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StructuresFindFirstOrThrowArgs>(args?: SelectSubset<T, StructuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Structures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Structures
     * const structures = await prisma.structures.findMany()
     * 
     * // Get first 10 Structures
     * const structures = await prisma.structures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const structuresWithIdOnly = await prisma.structures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StructuresFindManyArgs>(args?: SelectSubset<T, StructuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Structures.
     * @param {StructuresCreateArgs} args - Arguments to create a Structures.
     * @example
     * // Create one Structures
     * const Structures = await prisma.structures.create({
     *   data: {
     *     // ... data to create a Structures
     *   }
     * })
     * 
     */
    create<T extends StructuresCreateArgs>(args: SelectSubset<T, StructuresCreateArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Structures.
     * @param {StructuresCreateManyArgs} args - Arguments to create many Structures.
     * @example
     * // Create many Structures
     * const structures = await prisma.structures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StructuresCreateManyArgs>(args?: SelectSubset<T, StructuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Structures and returns the data saved in the database.
     * @param {StructuresCreateManyAndReturnArgs} args - Arguments to create many Structures.
     * @example
     * // Create many Structures
     * const structures = await prisma.structures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Structures and only return the `id`
     * const structuresWithIdOnly = await prisma.structures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StructuresCreateManyAndReturnArgs>(args?: SelectSubset<T, StructuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Structures.
     * @param {StructuresDeleteArgs} args - Arguments to delete one Structures.
     * @example
     * // Delete one Structures
     * const Structures = await prisma.structures.delete({
     *   where: {
     *     // ... filter to delete one Structures
     *   }
     * })
     * 
     */
    delete<T extends StructuresDeleteArgs>(args: SelectSubset<T, StructuresDeleteArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Structures.
     * @param {StructuresUpdateArgs} args - Arguments to update one Structures.
     * @example
     * // Update one Structures
     * const structures = await prisma.structures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StructuresUpdateArgs>(args: SelectSubset<T, StructuresUpdateArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Structures.
     * @param {StructuresDeleteManyArgs} args - Arguments to filter Structures to delete.
     * @example
     * // Delete a few Structures
     * const { count } = await prisma.structures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StructuresDeleteManyArgs>(args?: SelectSubset<T, StructuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Structures
     * const structures = await prisma.structures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StructuresUpdateManyArgs>(args: SelectSubset<T, StructuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Structures and returns the data updated in the database.
     * @param {StructuresUpdateManyAndReturnArgs} args - Arguments to update many Structures.
     * @example
     * // Update many Structures
     * const structures = await prisma.structures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Structures and only return the `id`
     * const structuresWithIdOnly = await prisma.structures.updateManyAndReturn({
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
    updateManyAndReturn<T extends StructuresUpdateManyAndReturnArgs>(args: SelectSubset<T, StructuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Structures.
     * @param {StructuresUpsertArgs} args - Arguments to update or create a Structures.
     * @example
     * // Update or create a Structures
     * const structures = await prisma.structures.upsert({
     *   create: {
     *     // ... data to create a Structures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Structures we want to update
     *   }
     * })
     */
    upsert<T extends StructuresUpsertArgs>(args: SelectSubset<T, StructuresUpsertArgs<ExtArgs>>): Prisma__StructuresClient<$Result.GetResult<Prisma.$StructuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresCountArgs} args - Arguments to filter Structures to count.
     * @example
     * // Count the number of Structures
     * const count = await prisma.structures.count({
     *   where: {
     *     // ... the filter for the Structures we want to count
     *   }
     * })
    **/
    count<T extends StructuresCountArgs>(
      args?: Subset<T, StructuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StructuresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StructuresAggregateArgs>(args: Subset<T, StructuresAggregateArgs>): Prisma.PrismaPromise<GetStructuresAggregateType<T>>

    /**
     * Group by Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuresGroupByArgs} args - Group by arguments.
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
      T extends StructuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StructuresGroupByArgs['orderBy'] }
        : { orderBy?: StructuresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StructuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStructuresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Structures model
   */
  readonly fields: StructuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Structures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StructuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Structures model
   */
  interface StructuresFieldRefs {
    readonly id: FieldRef<"Structures", 'Int'>
    readonly name: FieldRef<"Structures", 'String'>
    readonly path: FieldRef<"Structures", 'String'>
    readonly json: FieldRef<"Structures", 'Json'>
    readonly udate: FieldRef<"Structures", 'DateTime'>
    readonly cdate: FieldRef<"Structures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Structures findUnique
   */
  export type StructuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where: StructuresWhereUniqueInput
  }

  /**
   * Structures findUniqueOrThrow
   */
  export type StructuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where: StructuresWhereUniqueInput
  }

  /**
   * Structures findFirst
   */
  export type StructuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where?: StructuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructuresOrderByWithRelationInput | StructuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Structures.
     */
    cursor?: StructuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Structures.
     */
    distinct?: StructuresScalarFieldEnum | StructuresScalarFieldEnum[]
  }

  /**
   * Structures findFirstOrThrow
   */
  export type StructuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where?: StructuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructuresOrderByWithRelationInput | StructuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Structures.
     */
    cursor?: StructuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Structures.
     */
    distinct?: StructuresScalarFieldEnum | StructuresScalarFieldEnum[]
  }

  /**
   * Structures findMany
   */
  export type StructuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where?: StructuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructuresOrderByWithRelationInput | StructuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Structures.
     */
    cursor?: StructuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    distinct?: StructuresScalarFieldEnum | StructuresScalarFieldEnum[]
  }

  /**
   * Structures create
   */
  export type StructuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * The data needed to create a Structures.
     */
    data: XOR<StructuresCreateInput, StructuresUncheckedCreateInput>
  }

  /**
   * Structures createMany
   */
  export type StructuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Structures.
     */
    data: StructuresCreateManyInput | StructuresCreateManyInput[]
  }

  /**
   * Structures createManyAndReturn
   */
  export type StructuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * The data used to create many Structures.
     */
    data: StructuresCreateManyInput | StructuresCreateManyInput[]
  }

  /**
   * Structures update
   */
  export type StructuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * The data needed to update a Structures.
     */
    data: XOR<StructuresUpdateInput, StructuresUncheckedUpdateInput>
    /**
     * Choose, which Structures to update.
     */
    where: StructuresWhereUniqueInput
  }

  /**
   * Structures updateMany
   */
  export type StructuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Structures.
     */
    data: XOR<StructuresUpdateManyMutationInput, StructuresUncheckedUpdateManyInput>
    /**
     * Filter which Structures to update
     */
    where?: StructuresWhereInput
    /**
     * Limit how many Structures to update.
     */
    limit?: number
  }

  /**
   * Structures updateManyAndReturn
   */
  export type StructuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * The data used to update Structures.
     */
    data: XOR<StructuresUpdateManyMutationInput, StructuresUncheckedUpdateManyInput>
    /**
     * Filter which Structures to update
     */
    where?: StructuresWhereInput
    /**
     * Limit how many Structures to update.
     */
    limit?: number
  }

  /**
   * Structures upsert
   */
  export type StructuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * The filter to search for the Structures to update in case it exists.
     */
    where: StructuresWhereUniqueInput
    /**
     * In case the Structures found by the `where` argument doesn't exist, create a new Structures with this data.
     */
    create: XOR<StructuresCreateInput, StructuresUncheckedCreateInput>
    /**
     * In case the Structures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StructuresUpdateInput, StructuresUncheckedUpdateInput>
  }

  /**
   * Structures delete
   */
  export type StructuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
    /**
     * Filter which Structures to delete.
     */
    where: StructuresWhereUniqueInput
  }

  /**
   * Structures deleteMany
   */
  export type StructuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Structures to delete
     */
    where?: StructuresWhereInput
    /**
     * Limit how many Structures to delete.
     */
    limit?: number
  }

  /**
   * Structures without action
   */
  export type StructuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structures
     */
    select?: StructuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structures
     */
    omit?: StructuresOmit<ExtArgs> | null
  }


  /**
   * Model Routes
   */

  export type AggregateRoutes = {
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  export type RoutesAvgAggregateOutputType = {
    id: number | null
  }

  export type RoutesSumAggregateOutputType = {
    id: number | null
  }

  export type RoutesMinAggregateOutputType = {
    id: number | null
    name: string | null
    udate: Date | null
    cdate: Date | null
  }

  export type RoutesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    udate: Date | null
    cdate: Date | null
  }

  export type RoutesCountAggregateOutputType = {
    id: number
    name: number
    json: number
    udate: number
    cdate: number
    _all: number
  }


  export type RoutesAvgAggregateInputType = {
    id?: true
  }

  export type RoutesSumAggregateInputType = {
    id?: true
  }

  export type RoutesMinAggregateInputType = {
    id?: true
    name?: true
    udate?: true
    cdate?: true
  }

  export type RoutesMaxAggregateInputType = {
    id?: true
    name?: true
    udate?: true
    cdate?: true
  }

  export type RoutesCountAggregateInputType = {
    id?: true
    name?: true
    json?: true
    udate?: true
    cdate?: true
    _all?: true
  }

  export type RoutesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to aggregate.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RoutesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutesMaxAggregateInputType
  }

  export type GetRoutesAggregateType<T extends RoutesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutes[P]>
      : GetScalarType<T[P], AggregateRoutes[P]>
  }




  export type RoutesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutesWhereInput
    orderBy?: RoutesOrderByWithAggregationInput | RoutesOrderByWithAggregationInput[]
    by: RoutesScalarFieldEnum[] | RoutesScalarFieldEnum
    having?: RoutesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutesCountAggregateInputType | true
    _avg?: RoutesAvgAggregateInputType
    _sum?: RoutesSumAggregateInputType
    _min?: RoutesMinAggregateInputType
    _max?: RoutesMaxAggregateInputType
  }

  export type RoutesGroupByOutputType = {
    id: number
    name: string
    json: JsonValue
    udate: Date
    cdate: Date
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  type GetRoutesGroupByPayload<T extends RoutesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutesGroupByOutputType[P]>
            : GetScalarType<T[P], RoutesGroupByOutputType[P]>
        }
      >
    >


  export type RoutesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectScalar = {
    id?: boolean
    name?: boolean
    json?: boolean
    udate?: boolean
    cdate?: boolean
  }

  export type RoutesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "json" | "udate" | "cdate", ExtArgs["result"]["routes"]>

  export type $RoutesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      json: Prisma.JsonValue
      udate: Date
      cdate: Date
    }, ExtArgs["result"]["routes"]>
    composites: {}
  }

  type RoutesGetPayload<S extends boolean | null | undefined | RoutesDefaultArgs> = $Result.GetResult<Prisma.$RoutesPayload, S>

  type RoutesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutesCountAggregateInputType | true
    }

  export interface RoutesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routes'], meta: { name: 'Routes' } }
    /**
     * Find zero or one Routes that matches the filter.
     * @param {RoutesFindUniqueArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutesFindUniqueArgs>(args: SelectSubset<T, RoutesFindUniqueArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutesFindUniqueOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutesFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindFirstArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutesFindFirstArgs>(args?: SelectSubset<T, RoutesFindFirstArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindFirstOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutesFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.routes.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.routes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routesWithIdOnly = await prisma.routes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutesFindManyArgs>(args?: SelectSubset<T, RoutesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routes.
     * @param {RoutesCreateArgs} args - Arguments to create a Routes.
     * @example
     * // Create one Routes
     * const Routes = await prisma.routes.create({
     *   data: {
     *     // ... data to create a Routes
     *   }
     * })
     * 
     */
    create<T extends RoutesCreateArgs>(args: SelectSubset<T, RoutesCreateArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RoutesCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutesCreateManyArgs>(args?: SelectSubset<T, RoutesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RoutesCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routesWithIdOnly = await prisma.routes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutesCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routes.
     * @param {RoutesDeleteArgs} args - Arguments to delete one Routes.
     * @example
     * // Delete one Routes
     * const Routes = await prisma.routes.delete({
     *   where: {
     *     // ... filter to delete one Routes
     *   }
     * })
     * 
     */
    delete<T extends RoutesDeleteArgs>(args: SelectSubset<T, RoutesDeleteArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routes.
     * @param {RoutesUpdateArgs} args - Arguments to update one Routes.
     * @example
     * // Update one Routes
     * const routes = await prisma.routes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutesUpdateArgs>(args: SelectSubset<T, RoutesUpdateArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RoutesDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.routes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutesDeleteManyArgs>(args?: SelectSubset<T, RoutesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutesUpdateManyArgs>(args: SelectSubset<T, RoutesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RoutesUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routesWithIdOnly = await prisma.routes.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutesUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routes.
     * @param {RoutesUpsertArgs} args - Arguments to update or create a Routes.
     * @example
     * // Update or create a Routes
     * const routes = await prisma.routes.upsert({
     *   create: {
     *     // ... data to create a Routes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routes we want to update
     *   }
     * })
     */
    upsert<T extends RoutesUpsertArgs>(args: SelectSubset<T, RoutesUpsertArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.routes.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RoutesCountArgs>(
      args?: Subset<T, RoutesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutesAggregateArgs>(args: Subset<T, RoutesAggregateArgs>): Prisma.PrismaPromise<GetRoutesAggregateType<T>>

    /**
     * Group by Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesGroupByArgs} args - Group by arguments.
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
      T extends RoutesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutesGroupByArgs['orderBy'] }
        : { orderBy?: RoutesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routes model
   */
  readonly fields: RoutesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Routes model
   */
  interface RoutesFieldRefs {
    readonly id: FieldRef<"Routes", 'Int'>
    readonly name: FieldRef<"Routes", 'String'>
    readonly json: FieldRef<"Routes", 'Json'>
    readonly udate: FieldRef<"Routes", 'DateTime'>
    readonly cdate: FieldRef<"Routes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routes findUnique
   */
  export type RoutesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes findUniqueOrThrow
   */
  export type RoutesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes findFirst
   */
  export type RoutesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes findFirstOrThrow
   */
  export type RoutesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes findMany
   */
  export type RoutesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes create
   */
  export type RoutesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data needed to create a Routes.
     */
    data: XOR<RoutesCreateInput, RoutesUncheckedCreateInput>
  }

  /**
   * Routes createMany
   */
  export type RoutesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RoutesCreateManyInput | RoutesCreateManyInput[]
  }

  /**
   * Routes createManyAndReturn
   */
  export type RoutesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RoutesCreateManyInput | RoutesCreateManyInput[]
  }

  /**
   * Routes update
   */
  export type RoutesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data needed to update a Routes.
     */
    data: XOR<RoutesUpdateInput, RoutesUncheckedUpdateInput>
    /**
     * Choose, which Routes to update.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes updateMany
   */
  export type RoutesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RoutesUpdateManyMutationInput, RoutesUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Routes updateManyAndReturn
   */
  export type RoutesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RoutesUpdateManyMutationInput, RoutesUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Routes upsert
   */
  export type RoutesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The filter to search for the Routes to update in case it exists.
     */
    where: RoutesWhereUniqueInput
    /**
     * In case the Routes found by the `where` argument doesn't exist, create a new Routes with this data.
     */
    create: XOR<RoutesCreateInput, RoutesUncheckedCreateInput>
    /**
     * In case the Routes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutesUpdateInput, RoutesUncheckedUpdateInput>
  }

  /**
   * Routes delete
   */
  export type RoutesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter which Routes to delete.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes deleteMany
   */
  export type RoutesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Routes without action
   */
  export type RoutesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    code: 'code',
    cDate: 'cDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TextsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    text: 'text'
  };

  export type TextsScalarFieldEnum = (typeof TextsScalarFieldEnum)[keyof typeof TextsScalarFieldEnum]


  export const StructuresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    json: 'json',
    udate: 'udate',
    cdate: 'cdate'
  };

  export type StructuresScalarFieldEnum = (typeof StructuresScalarFieldEnum)[keyof typeof StructuresScalarFieldEnum]


  export const RoutesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    json: 'json',
    udate: 'udate',
    cdate: 'cdate'
  };

  export type RoutesScalarFieldEnum = (typeof RoutesScalarFieldEnum)[keyof typeof RoutesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    code?: StringFilter<"User"> | string
    cDate?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    cDate?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    code?: StringFilter<"User"> | string
    cDate?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    cDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    code?: StringWithAggregatesFilter<"User"> | string
    cDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    refreshToken?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    refreshToken?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    refreshToken?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
  }

  export type TextsWhereInput = {
    AND?: TextsWhereInput | TextsWhereInput[]
    OR?: TextsWhereInput[]
    NOT?: TextsWhereInput | TextsWhereInput[]
    id?: IntFilter<"Texts"> | number
    name?: StringFilter<"Texts"> | string
    text?: StringFilter<"Texts"> | string
  }

  export type TextsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
  }

  export type TextsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TextsWhereInput | TextsWhereInput[]
    OR?: TextsWhereInput[]
    NOT?: TextsWhereInput | TextsWhereInput[]
    text?: StringFilter<"Texts"> | string
  }, "id" | "name">

  export type TextsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    _count?: TextsCountOrderByAggregateInput
    _avg?: TextsAvgOrderByAggregateInput
    _max?: TextsMaxOrderByAggregateInput
    _min?: TextsMinOrderByAggregateInput
    _sum?: TextsSumOrderByAggregateInput
  }

  export type TextsScalarWhereWithAggregatesInput = {
    AND?: TextsScalarWhereWithAggregatesInput | TextsScalarWhereWithAggregatesInput[]
    OR?: TextsScalarWhereWithAggregatesInput[]
    NOT?: TextsScalarWhereWithAggregatesInput | TextsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Texts"> | number
    name?: StringWithAggregatesFilter<"Texts"> | string
    text?: StringWithAggregatesFilter<"Texts"> | string
  }

  export type StructuresWhereInput = {
    AND?: StructuresWhereInput | StructuresWhereInput[]
    OR?: StructuresWhereInput[]
    NOT?: StructuresWhereInput | StructuresWhereInput[]
    id?: IntFilter<"Structures"> | number
    name?: StringFilter<"Structures"> | string
    path?: StringFilter<"Structures"> | string
    json?: JsonFilter<"Structures">
    udate?: DateTimeFilter<"Structures"> | Date | string
    cdate?: DateTimeFilter<"Structures"> | Date | string
  }

  export type StructuresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type StructuresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StructuresWhereInput | StructuresWhereInput[]
    OR?: StructuresWhereInput[]
    NOT?: StructuresWhereInput | StructuresWhereInput[]
    path?: StringFilter<"Structures"> | string
    json?: JsonFilter<"Structures">
    udate?: DateTimeFilter<"Structures"> | Date | string
    cdate?: DateTimeFilter<"Structures"> | Date | string
  }, "id" | "name">

  export type StructuresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
    _count?: StructuresCountOrderByAggregateInput
    _avg?: StructuresAvgOrderByAggregateInput
    _max?: StructuresMaxOrderByAggregateInput
    _min?: StructuresMinOrderByAggregateInput
    _sum?: StructuresSumOrderByAggregateInput
  }

  export type StructuresScalarWhereWithAggregatesInput = {
    AND?: StructuresScalarWhereWithAggregatesInput | StructuresScalarWhereWithAggregatesInput[]
    OR?: StructuresScalarWhereWithAggregatesInput[]
    NOT?: StructuresScalarWhereWithAggregatesInput | StructuresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Structures"> | number
    name?: StringWithAggregatesFilter<"Structures"> | string
    path?: StringWithAggregatesFilter<"Structures"> | string
    json?: JsonWithAggregatesFilter<"Structures">
    udate?: DateTimeWithAggregatesFilter<"Structures"> | Date | string
    cdate?: DateTimeWithAggregatesFilter<"Structures"> | Date | string
  }

  export type RoutesWhereInput = {
    AND?: RoutesWhereInput | RoutesWhereInput[]
    OR?: RoutesWhereInput[]
    NOT?: RoutesWhereInput | RoutesWhereInput[]
    id?: IntFilter<"Routes"> | number
    name?: StringFilter<"Routes"> | string
    json?: JsonFilter<"Routes">
    udate?: DateTimeFilter<"Routes"> | Date | string
    cdate?: DateTimeFilter<"Routes"> | Date | string
  }

  export type RoutesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type RoutesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoutesWhereInput | RoutesWhereInput[]
    OR?: RoutesWhereInput[]
    NOT?: RoutesWhereInput | RoutesWhereInput[]
    json?: JsonFilter<"Routes">
    udate?: DateTimeFilter<"Routes"> | Date | string
    cdate?: DateTimeFilter<"Routes"> | Date | string
  }, "id" | "name">

  export type RoutesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
    _count?: RoutesCountOrderByAggregateInput
    _avg?: RoutesAvgOrderByAggregateInput
    _max?: RoutesMaxOrderByAggregateInput
    _min?: RoutesMinOrderByAggregateInput
    _sum?: RoutesSumOrderByAggregateInput
  }

  export type RoutesScalarWhereWithAggregatesInput = {
    AND?: RoutesScalarWhereWithAggregatesInput | RoutesScalarWhereWithAggregatesInput[]
    OR?: RoutesScalarWhereWithAggregatesInput[]
    NOT?: RoutesScalarWhereWithAggregatesInput | RoutesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Routes"> | number
    name?: StringWithAggregatesFilter<"Routes"> | string
    json?: JsonWithAggregatesFilter<"Routes">
    udate?: DateTimeWithAggregatesFilter<"Routes"> | Date | string
    cdate?: DateTimeWithAggregatesFilter<"Routes"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    isActive?: boolean
    code: string
    cDate?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    isActive?: boolean
    code: string
    cDate?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    isActive?: boolean
    code: string
    cDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    refreshToken: string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    refreshToken: string
    userId: string
  }

  export type TokenUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateManyInput = {
    id?: number
    refreshToken: string
    userId: string
  }

  export type TokenUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TextsCreateInput = {
    name: string
    text: string
  }

  export type TextsUncheckedCreateInput = {
    id?: number
    name: string
    text: string
  }

  export type TextsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TextsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TextsCreateManyInput = {
    id?: number
    name: string
    text: string
  }

  export type TextsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TextsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type StructuresCreateInput = {
    name: string
    path: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type StructuresUncheckedCreateInput = {
    id?: number
    name: string
    path: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type StructuresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructuresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructuresCreateManyInput = {
    id?: number
    name: string
    path: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type StructuresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructuresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesCreateInput = {
    name: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type RoutesUncheckedCreateInput = {
    id?: number
    name: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type RoutesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesCreateManyInput = {
    id?: number
    name: string
    json: JsonNullValueInput | InputJsonValue
    udate: Date | string
    cdate?: Date | string
  }

  export type RoutesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    json?: JsonNullValueInput | InputJsonValue
    udate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    cDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    cDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    cDate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type TextsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
  }

  export type TextsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TextsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
  }

  export type TextsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
  }

  export type TextsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StructuresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type StructuresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StructuresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type StructuresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type StructuresSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RoutesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    json?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type RoutesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoutesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type RoutesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    udate?: SortOrder
    cdate?: SortOrder
  }

  export type RoutesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TokenCreateWithoutUserInput = {
    refreshToken: string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    refreshToken: string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    refreshToken?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    isActive?: boolean
    code: string
    cDate?: Date | string
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    isActive?: boolean
    code: string
    cDate?: Date | string
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: StringFieldUpdateOperationsInput | string
    cDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    refreshToken: string
  }

  export type TokenUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
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