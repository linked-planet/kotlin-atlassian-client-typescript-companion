import {InsightObjectClass, isInsightObject} from "./InsightObjectExtensions";

/**
 * Replaces specific anonymous objects in a json structure with concrete classes.
 * APIs deliver plain json objects, but for some types we need classes, so we can add extension methods.
 *
 * @param json a json object tree
 * @return a json object tree where some anonymous objects are replaced by their corresponding class
 */
export function transformJsonObjectsToClass(json: any): InsightObjectClass | InsightObjectClass[] | any {
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
