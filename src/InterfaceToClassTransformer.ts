/**
 * The API delivers plain json objects, but for some types we need classes, so we can add extension methods
 * @param json a json object tree
 */
import {InsightObjectClass, isInsightObject} from "./InsightObjectExtensions";

export function transformJsonObjectsToClass(json: any): any {
    if (isInsightObject(json)) {
        return new InsightObjectClass(json);
    } else if (Array.isArray(json)) {
        return json.map(transformJsonObjectsToClass);
    } else if (typeof json === 'object' && json !== null) {
        return Object.fromEntries(
            Object.entries(json).map(([key, value]) => [key, transformJsonObjectsToClass(value)])
        );
    }
    return json;
}
