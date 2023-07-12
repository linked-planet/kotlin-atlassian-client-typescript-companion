import {
    Bool,
    Confluence,
    DateTime,
    Date,
    DoubleNumber,
    Email,
    Group,
    InsightAttribute,
    InsightObject,
    Integer,
    Ipaddress,
    Project,
    Reference,
    Select,
    Status,
    Text,
    Textarea,
    Url,
    User,
    Version
} from "./generated";
import {
    attributeByName,
    boolAttribute,
    confluenceAttribute,
    dateAttribute,
    dateTimeAttribute,
    displayValueFor,
    displayValuesFor,
    doubleNumberAttribute,
    emailAttribute,
    groupAttribute,
    integerAttribute,
    ipaddressAttribute,
    projectAttribute,
    referenceAttribute,
    selectAttribute,
    statusAttribute,
    stringValueFor,
    stringValuesFor,
    textareaAttribute,
    textAttribute,
    urlAttribute,
    userAttribute,
    versionAttribute
} from "./InsightObjectMethods";

export interface InsightObjectExtensionMethods {
    getAttributeByName(attributeName: String): InsightAttribute | undefined

    getDisplayValuesFor(attributeName: String): string[]
    getDisplayValueFor(attributeName: String): string | undefined

    getStringValuesFor(attributeName: String): string[]
    getStringValueFor(attributeName: String): string | undefined

    getTextAttribute(attributeName: String): Text | undefined
    getReferenceAttribute(attributeName: String): Reference | undefined
    getTextareaAttribute(attributeName: String): Textarea | undefined
    getIntegerAttribute(attributeName: String): Integer | undefined
    getBoolAttribute(attributeName: String): Bool | undefined
    getDoubleNumberAttribute(attributeName: String): DoubleNumber | undefined
    getSelectAttribute(attributeName: String): Select | undefined
    getDateAttribute(attributeName: String): Date | undefined
    getDateTimeAttribute(attributeName: String): DateTime | undefined
    getUrlAttribute(attributeName: String): Url | undefined
    getEmailAttribute(attributeName: String): Email | undefined
    getIpaddressAttribute(attributeName: String): Ipaddress | undefined
    getUserAttribute(attributeName: String): User | undefined
    getConfluenceAttribute(attributeName: String): Confluence | undefined
    getGroupAttribute(attributeName: String): Group | undefined
    getVersionAttribute(attributeName: String): Version | undefined
    getProjectAttribute(attributeName: String): Project | undefined
    getStatusAttribute(attributeName: String): Status | undefined
}

declare module "./generated" { // to tell the compiler that the generated interface provides the methods
    interface InsightObject extends InsightObjectExtensionMethods {
    }
}

export class InsightObjectClass implements InsightObject {
    attachmentsExist!: boolean;
    attributes!: InsightAttribute[];
    id!: number;
    label!: string;
    objectKey!: string;
    objectSelf!: string;
    objectTypeId!: number;
    objectTypeName!: string;

    constructor(config: InsightObject) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, config);
    }

    getAttributeByName = (attributeName: String): InsightAttribute | undefined => attributeByName(this, attributeName)

    getDisplayValuesFor = (attributeName: String): string[] => displayValuesFor(this, attributeName)
    getDisplayValueFor = (attributeName: String): string | undefined => displayValueFor(this, attributeName)

    getStringValuesFor = (attributeName: String): string[] => stringValuesFor(this, attributeName)
    getStringValueFor = (attributeName: String): string | undefined => stringValueFor(this, attributeName)

    getTextAttribute = (attributeName: String): Text | undefined => textAttribute(this, attributeName)
    getReferenceAttribute = (attributeName: String): Reference | undefined => referenceAttribute(this, attributeName)
    getTextareaAttribute = (attributeName: String): Textarea | undefined => textareaAttribute(this, attributeName)
    getIntegerAttribute = (attributeName: String): Integer | undefined => integerAttribute(this, attributeName)
    getBoolAttribute = (attributeName: String): Bool | undefined => boolAttribute(this, attributeName)
    getDoubleNumberAttribute = (attributeName: String): DoubleNumber | undefined => doubleNumberAttribute(this, attributeName)
    getSelectAttribute = (attributeName: String): Select | undefined => selectAttribute(this, attributeName)
    getDateAttribute = (attributeName: String): Date | undefined => dateAttribute(this, attributeName)
    getDateTimeAttribute = (attributeName: String): DateTime | undefined => dateTimeAttribute(this, attributeName)
    getUrlAttribute = (attributeName: String): Url | undefined => urlAttribute(this, attributeName)
    getEmailAttribute = (attributeName: String): Email | undefined => emailAttribute(this, attributeName)
    getIpaddressAttribute = (attributeName: String): Ipaddress | undefined => ipaddressAttribute(this, attributeName)
    getUserAttribute = (attributeName: String): User | undefined => userAttribute(this, attributeName)
    getConfluenceAttribute = (attributeName: String): Confluence | undefined => confluenceAttribute(this, attributeName)
    getGroupAttribute = (attributeName: String): Group | undefined => groupAttribute(this, attributeName)
    getVersionAttribute = (attributeName: String): Version | undefined => versionAttribute(this, attributeName)
    getProjectAttribute = (attributeName: String): Project | undefined => projectAttribute(this, attributeName)
    getStatusAttribute = (attributeName: String): Status | undefined => statusAttribute(this, attributeName)
}

export function isInsightObject(obj: any): obj is InsightObject {
    return (
        typeof obj === 'object' &&
        typeof obj.attachmentsExist === 'boolean' &&
        typeof obj.id === 'number' &&
        typeof obj.label === 'string' &&
        typeof obj.objectKey === 'string' &&
        typeof obj.objectSelf === 'string' &&
        typeof obj.objectTypeId === 'number' &&
        typeof obj.objectTypeName === 'string'
    );
}
