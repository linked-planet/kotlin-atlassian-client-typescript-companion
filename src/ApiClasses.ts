import {InsightAttribute, InsightObject} from "./generated";

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
        Object.assign(this, config);
    }
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
