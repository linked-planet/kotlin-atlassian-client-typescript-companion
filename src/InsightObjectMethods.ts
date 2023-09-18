import {
    AttributeType,
    Bool,
    Confluence,
    Date,
    DateTime,
    DoubleNumber,
    Email,
    Group,
    InsightAttribute,
    InsightObject,
    Integer,
    Ipaddress,
    Project,
    Reference,
    ReferencedObject,
    Select,
    Status,
    Text,
    Textarea,
    Url,
    User,
    Version
} from "./generated";

export function attributeByName(insightObject: InsightObject | undefined, attributeName: String): InsightAttribute | undefined {
    if (insightObject === undefined) return undefined
    return insightObject?.attributes?.find((item) => item.schema?.name == attributeName);
}

// region displayValue

export function displayValuesFor(insightObject: InsightObject | undefined, attributeName: String): string[] {
    let attribute = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return []
    return displayValuesForAttribute(attribute);
}

export function displayValueFor(insightObject: InsightObject | undefined, attributeName: String): string | undefined {
    let attribute: InsightAttribute | undefined = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return undefined
    if ((attribute.schema?.maximumCardinality ?? 0) > 1) {
        console.warn("Used displayValueFor for cardinality > 1" + attributeName + " attribute:" + JSON.stringify(attribute))
    }
    return displayValueForAttribute(attribute);
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
            console.warn("Unsupported Attribute Type:" + attribute.type + " attribute:" + JSON.stringify(attribute))
            return undefined
        }
    }
}

export function displayValuesForAttribute(attribute: InsightAttribute): string[] {
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

// region values as string

export function stringValuesFor(insightObject: InsightObject | undefined, attributeName: String): string[] {
    let attribute = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return []
    return stringValuesForAttribute(attribute);
}

export function stringValueFor(insightObject: InsightObject | undefined, attributeName: String): string | undefined {
    let attribute: InsightAttribute | undefined = attributeByName(insightObject, attributeName)
    if (attribute == undefined) return undefined
    if ((attribute.schema?.maximumCardinality ?? 0) > 1) {
        console.warn("Used stringValueFor for cardinality > 1" + attributeName + " attribute:" + JSON.stringify(attribute))
    }
    return stringValueForAttribute(attribute);
}

export function stringValueForAttribute(attribute: InsightAttribute) {
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
            console.warn("Unsupported Attribute Type:" + attribute.type + " attribute:" + JSON.stringify(attribute))
            return undefined
        }
    }
}

export function stringValuesForAttribute(attribute: InsightAttribute): string[] {
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
            const singleValue = stringValueForAttribute(attribute)
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

export function integerAttribute(insightObject: InsightObject | undefined, attributeName: String): Integer | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asInteger(attribute)
}
export function asInteger(attribute: InsightAttribute | undefined): Integer | undefined {
    return asType<Integer>(attribute, "Integer")
}

export function boolAttribute(insightObject: InsightObject | undefined, attributeName: String): Bool | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asBool(attribute)
}
export function asBool(attribute: InsightAttribute | undefined): Bool | undefined {
    return asType<Bool>(attribute, "Bool")
}

export function doubleNumberAttribute(insightObject: InsightObject | undefined, attributeName: String): DoubleNumber | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asDoubleNumber(attribute)
}
export function asDoubleNumber(attribute: InsightAttribute | undefined): DoubleNumber | undefined {
    return asType<DoubleNumber>(attribute, "DoubleNumber")
}

export function selectAttribute(insightObject: InsightObject | undefined, attributeName: String): Select | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asSelect(attribute)
}
export function asSelect(attribute: InsightAttribute | undefined): Select | undefined {
    return asType<Select>(attribute, "Select")
}

export function dateAttribute(insightObject: InsightObject | undefined, attributeName: String): Date | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asDate(attribute)
}
export function asDate(attribute: InsightAttribute | undefined): Date | undefined {
    return asType<Date>(attribute, "Date")
}

export function dateTimeAttribute(insightObject: InsightObject | undefined, attributeName: String): DateTime | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asDateTime(attribute)
}
export function asDateTime(attribute: InsightAttribute | undefined): DateTime | undefined {
    return asType<DateTime>(attribute, "DateTime")
}

export function urlAttribute(insightObject: InsightObject | undefined, attributeName: String): Url | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asUrl(attribute)
}
export function asUrl(attribute: InsightAttribute | undefined): Url | undefined {
    return asType<Url>(attribute, "Url")
}

export function emailAttribute(insightObject: InsightObject | undefined, attributeName: String): Email | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asEmail(attribute)
}
export function asEmail(attribute: InsightAttribute | undefined): Email | undefined {
    return asType<Email>(attribute, "Email")
}

export function ipaddressAttribute(insightObject: InsightObject | undefined, attributeName: String): Ipaddress | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asIpaddress(attribute)
}
export function asIpaddress(attribute: InsightAttribute | undefined): Ipaddress | undefined {
    return asType<Ipaddress>(attribute, "Ipaddress")
}

export function userAttribute(insightObject: InsightObject | undefined, attributeName: String): User | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asUser(attribute)
}
export function asUser(attribute: InsightAttribute | undefined): User | undefined {
    return asType<User>(attribute, "User")
}

export function confluenceAttribute(insightObject: InsightObject | undefined, attributeName: String): Confluence | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asConfluence(attribute)
}
export function asConfluence(attribute: InsightAttribute | undefined): Confluence | undefined {
    return asType<Confluence>(attribute, "Confluence")
}

export function groupAttribute(insightObject: InsightObject | undefined, attributeName: String): Group | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asGroup(attribute)
}
export function asGroup(attribute: InsightAttribute | undefined): Group | undefined {
    return asType<Group>(attribute, "Group")
}

export function versionAttribute(insightObject: InsightObject | undefined, attributeName: String): Version | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asVersion(attribute)
}
export function asVersion(attribute: InsightAttribute | undefined): Version | undefined {
    return asType<Version>(attribute, "Version")
}

export function projectAttribute(insightObject: InsightObject | undefined, attributeName: String): Project | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asProject(attribute)
}
export function asProject(attribute: InsightAttribute | undefined): Project | undefined {
    return asType<Project>(attribute, "Project")
}

export function statusAttribute(insightObject: InsightObject | undefined, attributeName: String): Status | undefined {
    let attribute = attributeByName(insightObject, attributeName)
    return asStatus(attribute)
}
export function asStatus(attribute: InsightAttribute | undefined): Status | undefined {
    return asType<Status>(attribute, "Status")
}

// region private
function asType<T>(attribute: InsightAttribute | undefined, typeString: AttributeType): T | undefined {
    if (attribute && attribute.type == typeString) {
        return attribute as unknown as T
    }
    console.warn(`Attribute.type is not ${typeString}, but ${attribute?.type} attribute:${JSON.stringify(attribute)}`)
    return undefined
}
// endregion
