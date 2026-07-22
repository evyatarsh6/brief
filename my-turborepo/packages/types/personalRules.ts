
export const EGeneralOperators = {
    EQUALS: "$eq",
    NOT_EQUALS: "$ne",
    EXISTS: "$exists",
} as const
export type EGeneralOperators = typeof EGeneralOperators[keyof typeof EGeneralOperators]

export const EStringOperators = {
    ...EGeneralOperators,
    IN: "$in",
    REGEX: "$regex",
} as const
export type TStringOperators = typeof EStringOperators[keyof typeof EStringOperators]

export const ENumberOperators = {
    ...EGeneralOperators,
    GT: "$gt",
    LT: "$lt",
    GTE: "$gte",
    LTE: "$lte",
} as const
export type TNumberOperators = typeof ENumberOperators[keyof typeof ENumberOperators]

export const EDatesOperators = {
    ...EGeneralOperators,
    GT: "$gt",
    LT: "$lt",
    GTE: "$gte",
    LTE: "$lte",
} as const
export type TDatesOperators = typeof EDatesOperators[keyof typeof EDatesOperators]

export type TBaseCondition<T> = {
    conditionId: string
    label: string
    path: Path<T>
}

export type TStringCondition<T> = TBaseCondition<T> & {
    operator: TStringOperators
    type: 'string'
    value: string | string[]
}

export type TNumberCondition<T> = TBaseCondition<T> & {
    operator: TNumberOperators
    type: 'number'
    value: number | number[]
}

export type TDateCondition<T> = TBaseCondition<T> & {
    operator: TDatesOperators
    type: 'date'
    value: Date | Date[]
}

export type TCondition<T> = TStringCondition<T> | TNumberCondition<T> | TDateCondition<T>

export type TCompoundQeury = {
    compoundConditionId: string
    compoundOperator: 'AND' | 'OR' | 'NOR'
    ids: {
        conditionIds?: string[]
        compoundConditionIds?: string[]
    }
}


export type TLookupQuery = {
    //entityName
    collection: string
    query: TCompoundQeury
}

export type TPersonalRulesKit<T> = {
    conditions: {
        entity?: TCondition<T>[]
    }
    compoundQuery: {   
        entity?: TCompoundQeury[]
    }
    //for the POC stage, wont be active - supporting only one compound query for now
    lookupQuery: TLookupQuery[]
    pipelines: unknown[]
    createdBy?: string
    sharedWith?: string[]
    updatedAt?: Date
    cteatedAt?: Date
}