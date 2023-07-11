// noinspection ES6UnusedImports, because they are used by the module declaration
import {InsightAttribute, InsightObject} from "./generated";
import {InsightObjectClass} from "./ApiClasses"
import {attributeByName, displayValuesFor, stringValuesFor} from "./index";

declare module "./generated" { // to tell the compiler that the generated interface provides the function
    interface InsightObject {
        getAttributeByName(attributeName: String): InsightAttribute | undefined

        getDisplayValuesFor(attributeName: String): string[]

        getStringValuesFor(attributeName: String): string[]
    }
}

declare module "./ApiClasses" { // to tell the compiler that the class itself provides the function we provide below
    interface InsightObjectClass {
        getAttributeByName(attributeName: String): InsightAttribute | undefined

        getDisplayValuesFor(attributeName: String): string[]

        getStringValuesFor(attributeName: String): string[]
    }
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
