/**
 *
 * @type {{DataTypes; Deferrable; Op; QueryTypes; TableHints; Utils; Error; useInflection; Promise: typeof Bluebird; validator; SyncOptions: SyncOptions; DefaultSetOptions: DefaultSetOptions; PoolOptions: PoolOptions; ReplicationOptions: ReplicationOptions; OperatorsAliases: OperatorsAliases; Config: Config; Dialect: Dialect; RetryOptions: RetryOptions; Options: Options; QueryOptionsTransactionRequired: QueryOptionsTransactionRequired; Sequelize: Sequelize; fn; col; cast; literal; and; or; json; AttributeType: AttributeType; LogicType: LogicType; where; BindOrReplacements: BindOrReplacements; QueryOptions: QueryOptions; QueryOptionsWithWhere: QueryOptionsWithWhere; QueryOptionsWithModel: QueryOptionsWithModel; QueryOptionsWithType: QueryOptionsWithType; QueryInterfaceOptions: QueryInterfaceOptions; CollateCharsetOptions: CollateCharsetOptions; QueryInterfaceCreateTableOptions: QueryInterfaceCreateTableOptions; QueryInterfaceDropTableOptions: QueryInterfaceDropTableOptions; QueryInterfaceDropAllTablesOptions: QueryInterfaceDropAllTablesOptions; QueryInterfaceIndexOptions: QueryInterfaceIndexOptions; AddUniqueConstraintOptions: AddUniqueConstraintOptions; AddDefaultConstraintOptions: AddDefaultConstraintOptions; AddCheckConstraintOptions: AddCheckConstraintOptions; AddPrimaryKeyConstraintOptions: AddPrimaryKeyConstraintOptions; AddForeignKeyConstraintOptions: AddForeignKeyConstraintOptions; AddConstraintOptions: AddConstraintOptions; CreateDatabaseOptions: CreateDatabaseOptions; FunctionParam: FunctionParam; QueryInterface: QueryInterface; DataType: DataType; ABSTRACT: AbstractDataTypeConstructor; AbstractDataTypeConstructor: AbstractDataTypeConstructor; AbstractDataType: AbstractDataType; STRING: StringDataTypeConstructor; StringDataTypeConstructor: StringDataTypeConstructor; StringDataType: StringDataType; StringDataTypeOptions: StringDataTypeOptions; CHAR: CharDataTypeConstructor; CharDataTypeConstructor: CharDataTypeConstructor; CharDataType: CharDataType; CharDataTypeOptions: CharDataTypeOptions; TEXT: TextDataTypeConstructor; TextDataTypeConstructor: TextDataTypeConstructor; TextDataType: TextDataType; TextDataTypeOptions: TextDataTypeOptions; NUMBER: NumberDataTypeConstructor; NumberDataTypeConstructor: NumberDataTypeConstructor; NumberDataType: NumberDataType; IntegerDataTypeOptions: IntegerDataTypeOptions; NumberDataTypeOptions: NumberDataTypeOptions; TINYINT: TinyIntegerDataTypeConstructor; TinyIntegerDataTypeConstructor: TinyIntegerDataTypeConstructor; TinyIntegerDataType: TinyIntegerDataType; SMALLINT: SmallIntegerDataTypeConstructor; SmallIntegerDataTypeConstructor: SmallIntegerDataTypeConstructor; SmallIntegerDataType: SmallIntegerDataType; MEDIUMINT: MediumIntegerDataTypeConstructor; MediumIntegerDataTypeConstructor: MediumIntegerDataTypeConstructor; MediumIntegerDataType: MediumIntegerDataType; INTEGER: IntegerDataTypeConstructor; IntegerDataTypeConstructor: IntegerDataTypeConstructor; IntegerDataType: IntegerDataType; BIGINT: BigIntDataTypeConstructor; BigIntDataTypeConstructor: BigIntDataTypeConstructor; BigIntDataType: BigIntDataType; FLOAT: FloatDataTypeConstructor; FloatDataTypeConstructor: FloatDataTypeConstructor; FloatDataType: FloatDataType; FloatDataTypeOptions: FloatDataTypeOptions; REAL: RealDataTypeConstructor; RealDataTypeConstructor: RealDataTypeConstructor; RealDataType: RealDataType; RealDataTypeOptions: RealDataTypeOptions; DOUBLE: DoubleDataTypeConstructor; DoubleDataTypeConstructor: DoubleDataTypeConstructor; DoubleDataType: DoubleDataType; DoubleDataTypeOptions: DoubleDataTypeOptions; DECIMAL: DecimalDataTypeConstructor; DecimalDataTypeConstructor: DecimalDataTypeConstructor; DecimalDataType: DecimalDataType; DecimalDataTypeOptions: DecimalDataTypeOptions; BOOLEAN: AbstractDataTypeConstructor; TIME: AbstractDataTypeConstructor; DATE: DateDataTypeConstructor; DateDataTypeConstructor: DateDataTypeConstructor; DateDataType: DateDataType; DateDataTypeOptions: DateDataTypeOptions; DATEONLY: DateOnlyDataTypeConstructor; DateOnlyDataTypeConstructor: DateOnlyDataTypeConstructor; DateOnlyDataType: DateOnlyDataType; HSTORE: AbstractDataTypeConstructor; JSON: AbstractDataTypeConstructor; JSONB: AbstractDataTypeConstructor; NOW: AbstractDataTypeConstructor; BLOB: BlobDataTypeConstructor; BlobSize: BlobSize; BlobDataTypeConstructor: BlobDataTypeConstructor; BlobDataType: BlobDataType; BlobDataTypeOptions: BlobDataTypeOptions; RANGE: RangeDataTypeConstructor; RangeableDataType: RangeableDataType; RangeDataTypeConstructor: RangeDataTypeConstructor; RangeDataType: RangeDataType; RangeDataTypeOptions: RangeDataTypeOptions; UUID: AbstractDataTypeConstructor; UUIDV1: AbstractDataTypeConstructor; UUIDV4: AbstractDataTypeConstructor; VIRTUAL: VirtualDataTypeConstructor; VirtualDataTypeConstructor: VirtualDataTypeConstructor; VirtualDataType: VirtualDataType; ENUM: EnumDataTypeConstructor; EnumDataTypeConstructor: EnumDataTypeConstructor; EnumDataType: EnumDataType; EnumDataTypeOptions: EnumDataTypeOptions; ARRAY: ArrayDataTypeConstructor; ArrayDataTypeConstructor: ArrayDataTypeConstructor; ArrayDataType: ArrayDataType; ArrayDataTypeOptions: ArrayDataTypeOptions; GEOMETRY: GeometryDataTypeConstructor; GeometryDataTypeConstructor: GeometryDataTypeConstructor; GeometryDataType: GeometryDataType; GeometryDataTypeOptions: GeometryDataTypeOptions; GEOGRAPHY: GeographyDataTypeConstructor; GeographyDataTypeConstructor: GeographyDataTypeConstructor; GeographyDataType: GeographyDataType; GeographyDataTypeOptions: GeographyDataTypeOptions; CIDR: AbstractDataTypeConstructor; INET: AbstractDataTypeConstructor; MACADDR: AbstractDataTypeConstructor; CITEXT: AbstractDataTypeConstructor; DataTypeAbstract: DataTypeAbstract; Logging: Logging; Transactionable: Transactionable; SearchPathable: SearchPathable; Filterable: Filterable; Projectable: Projectable; Paranoid: Paranoid; GroupOption: GroupOption; DropOptions: DropOptions; SchemaOptions: SchemaOptions; ScopeOptions: ScopeOptions; WhereOptions: WhereOptions; AnyOperator: AnyOperator; AllOperator: AllOperator; WhereOperators: WhereOperators; OrOperator: OrOperator; AndOperator: AndOperator; WhereGeometryOptions: WhereGeometryOptions; WhereValue: WhereValue; WhereAttributeHash: WhereAttributeHash; IncludeThroughOptions: IncludeThroughOptions; Includeable: Includeable; IncludeOptions: IncludeOptions; OrderItem: OrderItem; Order: Order; ProjectionAlias: ProjectionAlias; FindAttributeOptions: FindAttributeOptions; FindOptions: FindOptions; NonNullFindOptions: NonNullFindOptions; CountOptions: CountOptions; FindAndCountOptions: FindAndCountOptions; BuildOptions: BuildOptions; Silent: Silent; CreateOptions: CreateOptions; FindOrCreateOptions: FindOrCreateOptions; UpsertOptions: UpsertOptions; BulkCreateOptions: BulkCreateOptions; TruncateOptions: TruncateOptions; DestroyOptions: DestroyOptions; RestoreOptions: RestoreOptions; UpdateOptions: UpdateOptions; AggregateOptions: AggregateOptions; IncrementDecrementOptions: IncrementDecrementOptions; IncrementDecrementOptionsWithBy: IncrementDecrementOptionsWithBy; InstanceRestoreOptions: InstanceRestoreOptions; InstanceDestroyOptions: InstanceDestroyOptions; InstanceUpdateOptions: InstanceUpdateOptions; SetOptions: SetOptions; SaveOptions: SaveOptions; ModelValidateOptions: ModelValidateOptions; ModelIndexesOptions: ModelIndexesOptions; ModelNameOptions: ModelNameOptions; ModelGetterOptions: ModelGetterOptions; ModelSetterOptions: ModelSetterOptions; ModelScopeOptions: ModelScopeOptions; ColumnOptions: ColumnOptions; ModelAttributeColumnReferencesOptions: ModelAttributeColumnReferencesOptions; ModelAttributeColumnOptions: ModelAttributeColumnOptions; ModelAttributes: ModelAttributes; Identifier: Identifier; ModelOptions: ModelOptions; InitOptions: InitOptions; AddScopeOptions: AddScopeOptions; Model: Model; ModelType: ModelType; ModelCtor: ModelCtor; Transaction: Transaction; TransactionOptions: TransactionOptions; Association: Association; SingleAssociationAccessors: SingleAssociationAccessors; MultiAssociationAccessors: MultiAssociationAccessors; ForeignKeyOptions: ForeignKeyOptions; AssociationOptions: AssociationOptions; AssociationScope: AssociationScope; ManyToManyOptions: ManyToManyOptions; BelongsToOptions: BelongsToOptions; BelongsTo: BelongsTo; BelongsToGetAssociationMixinOptions: BelongsToGetAssociationMixinOptions; BelongsToGetAssociationMixin: BelongsToGetAssociationMixin; BelongsToSetAssociationMixinOptions: BelongsToSetAssociationMixinOptions; BelongsToSetAssociationMixin: BelongsToSetAssociationMixin; BelongsToCreateAssociationMixinOptions: BelongsToCreateAssociationMixinOptions; BelongsToCreateAssociationMixin: BelongsToCreateAssociationMixin; HasOneOptions: HasOneOptions; HasOne: HasOne; HasOneGetAssociationMixinOptions: HasOneGetAssociationMixinOptions; HasOneGetAssociationMixin: HasOneGetAssociationMixin; HasOneSetAssociationMixinOptions: HasOneSetAssociationMixinOptions; HasOneSetAssociationMixin: HasOneSetAssociationMixin; HasOneCreateAssociationMixinOptions: HasOneCreateAssociationMixinOptions; HasOneCreateAssociationMixin: HasOneCreateAssociationMixin; HasManyOptions: HasManyOptions; HasMany: HasMany; HasManyGetAssociationsMixinOptions: HasManyGetAssociationsMixinOptions; HasManyGetAssociationsMixin: HasManyGetAssociationsMixin; HasManySetAssociationsMixinOptions: HasManySetAssociationsMixinOptions; HasManySetAssociationsMixin: HasManySetAssociationsMixin; HasManyAddAssociationsMixinOptions: HasManyAddAssociationsMixinOptions; HasManyAddAssociationsMixin: HasManyAddAssociationsMixin; HasManyAddAssociationMixinOptions: HasManyAddAssociationMixinOptions; HasManyAddAssociationMixin: HasManyAddAssociationMixin; HasManyCreateAssociationMixinOptions: HasManyCreateAssociationMixinOptions; HasManyCreateAssociationMixin: HasManyCreateAssociationMixin; HasManyRemoveAssociationMixinOptions: HasManyRemoveAssociationMixinOptions; HasManyRemoveAssociationMixin: HasManyRemoveAssociationMixin; HasManyRemoveAssociationsMixinOptions: HasManyRemoveAssociationsMixinOptions; HasManyRemoveAssociationsMixin: HasManyRemoveAssociationsMixin; HasManyHasAssociationMixinOptions: HasManyHasAssociationMixinOptions; HasManyHasAssociationMixin: HasManyHasAssociationMixin; HasManyHasAssociationsMixinOptions: HasManyHasAssociationsMixinOptions; HasManyHasAssociationsMixin: HasManyHasAssociationsMixin; HasManyCountAssociationsMixinOptions: HasManyCountAssociationsMixinOptions; HasManyCountAssociationsMixin: HasManyCountAssociationsMixin; ThroughOptions: ThroughOptions; JoinTableAttributes: JoinTableAttributes; BelongsToManyOptions: BelongsToManyOptions; BelongsToMany: BelongsToMany; BelongsToManyGetAssociationsMixinOptions: BelongsToManyGetAssociationsMixinOptions; BelongsToManyGetAssociationsMixin: BelongsToManyGetAssociationsMixin; BelongsToManySetAssociationsMixinOptions: BelongsToManySetAssociationsMixinOptions; BelongsToManySetAssociationsMixin: BelongsToManySetAssociationsMixin; BelongsToManyAddAssociationsMixinOptions: BelongsToManyAddAssociationsMixinOptions; BelongsToManyAddAssociationsMixin: BelongsToManyAddAssociationsMixin; BelongsToManyAddAssociationMixinOptions: BelongsToManyAddAssociationMixinOptions; BelongsToManyAddAssociationMixin: BelongsToManyAddAssociationMixin; BelongsToManyCreateAssociationMixinOptions: BelongsToManyCreateAssociationMixinOptions; BelongsToManyCreateAssociationMixin: BelongsToManyCreateAssociationMixin; BelongsToManyRemoveAssociationMixinOptions: BelongsToManyRemoveAssociationMixinOptions; BelongsToManyRemoveAssociationMixin: BelongsToManyRemoveAssociationMixin; BelongsToManyRemoveAssociationsMixinOptions: BelongsToManyRemoveAssociationsMixinOptions; BelongsToManyRemoveAssociationsMixin: BelongsToManyRemoveAssociationsMixin; BelongsToManyHasAssociationMixinOptions: BelongsToManyHasAssociationMixinOptions; BelongsToManyHasAssociationMixin: BelongsToManyHasAssociationMixin; BelongsToManyHasAssociationsMixinOptions: BelongsToManyHasAssociationsMixinOptions; BelongsToManyHasAssociationsMixin: BelongsToManyHasAssociationsMixin; BelongsToManyCountAssociationsMixinOptions: BelongsToManyCountAssociationsMixinOptions; BelongsToManyCountAssociationsMixin: BelongsToManyCountAssociationsMixin; BaseError: BaseError; SequelizeScopeError: SequelizeScopeError; ValidationError: ValidationError; ValidationErrorItem: ValidationErrorItem; CommonErrorProperties: CommonErrorProperties; EmptyResultError: EmptyResultError; DatabaseError: DatabaseError; TimeoutError: TimeoutError; UniqueConstraintErrorOptions: UniqueConstraintErrorOptions; UniqueConstraintError: UniqueConstraintError; ForeignKeyConstraintError: ForeignKeyConstraintError; ExclusionConstraintError: ExclusionConstraintError; ConnectionError: ConnectionError; ConnectionRefusedError: ConnectionRefusedError; AccessDeniedError: AccessDeniedError; HostNotFoundError: HostNotFoundError; HostNotReachableError: HostNotReachableError; InvalidConnectionError: InvalidConnectionError; ConnectionTimedOutError: ConnectionTimedOutError}}
 */
var Sequelize = require('sequelize');
var sequelize = require('../config/db');

/**
 * 创建用户 model
 */
var Book_model = sequelize.define('book', {
    id: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    title: Sequelize.STRING(255),
    author: Sequelize.STRING(255),
    type: Sequelize.STRING(255),
    introduce:Sequelize.STRING(255),
    imgsrc:Sequelize.STRING(255),
    epubsrc:Sequelize.STRING(255),
    subscribe:Sequelize.STRING(255),
    collection:Sequelize.STRING(255),
    read:Sequelize.STRING(255),
    recommended:Sequelize.STRING(255),
    time:Sequelize.STRING(255),
}, {
    timestamps: false
});
class Book {
    constructor(params,where) {
        this.params = params;
        this.where = where
    }
    async find() {


        try {
            var books = await Book_model.findAll({
                where: {
                    [this.where]: this.params[this.where]
                }
            });
            return books;
        } catch (err) {
            return 1
        }
    }

    async add() {
        try {
            var now = Date.now();
            var random = Math.round(Math.random() * 100)
            now = (now + '' + random) * 1
            await Book_model.create({
                id: now,
                title: this.params.title,
                author: this.params.author,
                type: this.params.type,
                introduce: this.params.introduce,
                imgsrc: this.params.imgsrc,
                epubsrc: this.params.epubsrc,
                subscribe: this.params.subscribe,
                collection: this.params.collection,
                read: this.params.read,
                recommended:this.params.recommended,
                time: this.params.time,
            });
            return 0;
        } catch (err) {
            return 1;
        }
    }

    async delete() {
        try {
            var books = await Book_model.findAll({
                where: {
                    id: this.params.id
                }
            });

            for (let b of books) {
                await b.destroy()
            }

            return 0;
        } catch (err) {
            return 1;
        }
    }

    async update() {
        try {
            var books = await Book_model.findAll({
                where: {
                    pid: this.params.id
                }
            });

            for (let b of books) {
                await b.update(this.params)
            }


            return 0;
        } catch (err) {
            return 1;
        }
    }

}
module.exports = Book;