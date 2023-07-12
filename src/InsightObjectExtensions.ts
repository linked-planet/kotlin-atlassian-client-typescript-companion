import {InsightAttribute, InsightObject, Reference, Text, Textarea} from "./generated";
import {
    attributeByName,
    displayValuesFor,
    referenceAttribute,
    stringValuesFor,
    textareaAttribute,
    textAttribute
} from "./InsightObjectMethods";

export interface InsightObjectExtensionMethods {
    getAttributeByName(attributeName: String): InsightAttribute | undefined

    getDisplayValuesFor(attributeName: String): string[]

    getStringValuesFor(attributeName: String): string[]

    getTextAttribute(attributeName: String): Text | undefined

    getReferenceAttribute(attributeName: String): Reference | undefined

    getTextareaAttribute(attributeName: String): Textarea | undefined
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
    getStringValuesFor = (attributeName: String): string[] => stringValuesFor(this, attributeName)
    getTextAttribute = (attributeName: String): Text | undefined => textAttribute(this, attributeName)
    getReferenceAttribute = (attributeName: String): Reference | undefined => referenceAttribute(this, attributeName)
    getTextareaAttribute = (attributeName: String): Textarea | undefined => textareaAttribute(this, attributeName)
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
