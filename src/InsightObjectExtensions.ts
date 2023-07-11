// noinspection ES6UnusedImports, because they are used by the module declaration
import {InsightAttribute, InsightObject} from "./generated-model";
import {InsightObjectClass} from "./ApiClasses/InsightObjectClass"
import {attributeByName, displayValuesFor, stringValuesFor} from "@linked-planet/kotlin-atlassian-client-typescript-companion";

declare module "./generated-model" { // to tell the compiler that the generated interface provides the function
    interface InsightObject {
        getAttributeByName(attributeName: String): InsightAttribute | undefined

        getDisplayValuesFor(attributeName: String): string[]

        getStringValuesFor(attributeName: String): string[]
    }
    export = InsightObject;
}

declare module "./ApiClasses/InsightObjectClass" { // to tell the compiler that the class itself provides the function we provide below
    interface InsightObjectClass {
        getAttributeByName(attributeName: String): InsightAttribute | undefined

        getDisplayValuesFor(attributeName: String): string[]

        getStringValuesFor(attributeName: String): string[]
    }
    export = InsightObjectClass;
}

InsightObjectClass.prototype.getAttributeByName = (attributeName: String): InsightAttribute | undefined => {
    return attributeByName(this, attributeName)
}

InsightObjectClass.prototype.getDisplayValuesFor = (attributeName: String): string[] => {
    return displayValuesFor(this, attributeName)
}

InsightObjectClass.prototype.getStringValuesFor = (attributeName: String): string[] => {
    return stringValuesFor(this, attributeName)
}
