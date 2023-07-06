import {
    Bool,
    Date,
    DateTime,
    DoubleNumber,
    Email,
    InsightAttribute,
    InsightObject,
    Integer,
    Ipaddress,
    Reference,
    ReferencedObject,
    Select,
    Text,
    Textarea,
    Url,
    User
} from "./generated-model";
import {AttributeType} from "./generated-model";

export function attributeByName(insightObject: InsightObject | undefined, attributeName: String): InsightAttribute | undefined {
    return insightObject?.attributes?.find((item) => item.schema?.name == attributeName);
}

// region displayValue

export function displayValuesFor(insightObject: InsightObject | undefined, attributeName: String): string[] {
    let attribute = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return []
    let displayValues = displayValuesForAttribute(attribute);
    console.info(`multiple values for ${insightObject?.objectTypeName}.${attribute.type} == [${displayValues}]`)
    return displayValues;
}

export function displayValueFor(insightObject: InsightObject | undefined, attributeName: String): string | undefined {
    let attribute: InsightAttribute | undefined = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return undefined
    if ((attribute.schema?.maximumCardinality ?? 0) > 1) {
        console.info("Used displayValueFor for cardinality > 1" + attributeName + " attribute:" + JSON.stringify(attribute))
    }
    let displayValue = displayValueForAttribute(attribute);
    console.info(`single value for: ${insightObject?.objectTypeName}.${attribute.type} == ${displayValue}`)
    return displayValue;
}

export function displayValueForAttribute(attribute: InsightAttribute) {
    switch (attribute.type) {
        case "Text":
            return (attribute as Text)?.value;
        case "Textarea":
            return (attribute as Textarea)?.value;
        case "Reference":
            return (attribute as Reference)?.referencedObjects[0]?.label;
        case "Integer":
            return (attribute as Integer)?.value?.toFixed(0)
        case "Bool":
            return (attribute as Bool)?.value?.toString()
        case "DoubleNumber":
            return (attribute as DoubleNumber)?.value?.toString()
        case "Date":
            return (attribute as Date)?.displayValue
        case "DateTime":
            return (attribute as DateTime)?.displayValue
        case "Email":
            return (attribute as Email)?.value?.toString()
        case "Ipaddress":
            return (attribute as Ipaddress)?.value?.toString()
        case "User":
            return (attribute as User)?.users?.[0]?.key ?? ""
        case "Select":
            return (attribute as Select)?.values?.[0] ?? ""
        case "Url":
            return (attribute as Url)?.values?.[0] ?? ""
        default: {
            console.info("Unsupported Attribute Type:" + attribute.type + " attribute:" + JSON.stringify(attribute))
            return undefined
        }
    }
}

function displayValuesForAttribute(attribute: InsightAttribute): string[] {
    switch (attribute.type) {
        case "Select":
            return (attribute as Select).values ?? [];
        case "Url":
            return (attribute as Url).values ?? [];
        case "Reference":
            return asReference(attribute)?.referencedObjects
                ?.map((ref: ReferencedObject) => {
                    return ref.label ?? "(Unbekanntes Label)"
                }) ?? [];
        default: {
            const singleValue = displayValueForAttribute(attribute)
            return singleValue ? [singleValue] : []
        }
    }
}

// endregion

// region textValue

export function textValuesFor(insightObject: InsightObject | undefined, attributeName: String): string[] {
    let attribute = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return []
    let displayValues = displayValuesForAttribute(attribute);
    console.info(`multiple values for ${insightObject?.objectTypeName}.${attribute.type} == [${displayValues}]`)
    return displayValues;
}

export function textValueFor(insightObject: InsightObject | undefined, attributeName: String): string | undefined {
    let attribute: InsightAttribute | undefined = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return undefined
    if ((attribute.schema?.maximumCardinality ?? 0) > 1) {
        console.info("Used displayValueFor for cardinality > 1" + attributeName + " attribute:" + JSON.stringify(attribute))
    }
    let displayValue = displayValueForAttribute(attribute);
    console.info(`single value for: ${insightObject?.objectTypeName}.${attribute.type} == ${displayValue}`)
    return displayValue;
}

export function textValueForAttribute(attribute: InsightAttribute) {
    switch (attribute.type) {
        case "Text":
            return (attribute as Text)?.value;
        case "Textarea":
            return (attribute as Textarea)?.value;
        case "Reference":
            return (attribute as Reference)?.referencedObjects[0]?.label;
        case "Integer":
            return (attribute as Integer)?.value?.toFixed(0)
        case "Bool":
            return (attribute as Bool)?.value?.toString()
        case "DoubleNumber":
            return (attribute as DoubleNumber)?.value?.toString()
        case "Date":
            return (attribute as Date)?.value
        case "DateTime":
            return (attribute as DateTime)?.value
        case "Email":
            return (attribute as Email)?.value?.toString()
        case "Ipaddress":
            return (attribute as Ipaddress)?.value?.toString()
        case "User":
            return (attribute as User)?.users?.[0]?.key ?? ""
        case "Select":
            return (attribute as Select)?.values?.[0] ?? ""
        case "Url":
            return (attribute as Url)?.values?.[0] ?? ""
        default: {
            console.info("Unsupported Attribute Type:" + attribute.type + " attribute:" + JSON.stringify(attribute))
            return undefined
        }
    }
}

function textValuesForAttribute(attribute: InsightAttribute): string[] {
    switch (attribute.type) {
        case "Select":
            return (attribute as Select).values ?? [];
        case "Url":
            return (attribute as Url).values ?? [];
        case "Reference":
            return asReference(attribute)?.referencedObjects
                ?.map((ref: ReferencedObject) => {
                    return ref.label ?? "(Unbekanntes Label)"
                }) ?? [];
        default: {
            const singleValue = displayValueForAttribute(attribute)
            return singleValue ? [singleValue] : []
        }
    }
}

// endregion


export function textAttribute(insightObject: InsightObject | undefined, attributeName: String): Text | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asText(attribute)
}
export function asText(attribute: InsightAttribute | undefined): Text | undefined {
    return asType<Text>(attribute, "Text")
}

export function textareaAttribute(insightObject: InsightObject | undefined, attributeName: String): Textarea | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asTextarea(attribute)
}
export function asTextarea(attribute: InsightAttribute | undefined): Textarea | undefined {
    return asType<Text>(attribute, "Textarea")
}

export function referenceAttribute(insightObject: InsightObject | undefined, attributeName: String): Reference | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asReference(attribute)
}
export function asReference(attribute: InsightAttribute | undefined): Reference | undefined {
    return asType<Reference>(attribute, "Reference")
}

// region private
function asType<T>(attribute: InsightAttribute | undefined, typeString: AttributeType): T | undefined {
    if (attribute && attribute.type == typeString) {
        return attribute as unknown as T
    }
    console.info(`Attribute.type is not ${typeString}, but${attribute?.type} attribute:${JSON.stringify(attribute)}`)
    return undefined
}
// endregion
