type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type AttributeType =
    | "Text"
    | "Integer"
    | "Bool"
    | "DoubleNumber"
    | "Select"
    | "Date"
    | "Time"
    | "DateTime"
    | "Url"
    | "Email"
    | "Textarea"
    | "Ipaddress"
    | "Reference"
    | "User"
    | "Confluence"
    | "Group"
    | "Version"
    | "Project"
    | "Status"
    | "Unknown";

export interface Bool {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: boolean;
}

export interface BoolSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Confluence {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface ConfluenceSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Date {
    /** @format int32 */
    attributeId: number;
    displayValue?: string;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    /** @format date */
    value?: string;
}

export interface DateSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface DateTime {
    /** @format int32 */
    attributeId: number;
    displayValue?: string;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    /** @format date-time */
    value?: string;
}

export interface DateTimeSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface DomainError {
    error?: string;
    message?: string;
}

export interface DoubleNumber {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    /** @format double */
    value?: number;
}

export interface DoubleNumberSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Email {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: string;
}

export interface EmailSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface ExtendedJiraTransition {
    id: string;
    name: string;
    to: JiraStatus;
}

export interface Filter {
    attributeName?: string;
    availableValues?: string[];
    selectableValues?: string[];
    selectedValues?: string[];
}

export interface FilterRequest {
    availability?: "ALL" | "AVAILABLE" | "NOT_AVAILABLE";
    insightEntries?: number[];
    /** @format int32 */
    projectConfigId?: number;
    searchString?: string;
    selectedAttributes?: Record<string, string[]>;
}

export interface GeneralConfig {
    data_protection_link?: string;
    feedback_link?: string;
    help_link?: string;
    query_refresh_seconds?: string;
    serviceUser?: string;
}

export interface GenericJiraTicket {
    description: string;
    end: string;
    id: string;
    key: string;
    obj?: InsightObject;
    objectKey: string;
    start: string;
    status: JiraStatus;
    summary: string;
    transitions: ExtendedJiraTransition[];
    user: JiraUser;
}

export interface Group {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface GroupSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface InsightAttachment {
    author: string;
    comment: string;
    created: string;
    filename: string;
    filesize: string;
    /** @format int32 */
    id: number;
    mimeType: string;
    url: string;
}

export type InsightAttribute = (
    | UtilRequiredKeys<Text, "attributeId" | "type">
    | UtilRequiredKeys<Integer, "attributeId" | "type">
    | UtilRequiredKeys<Bool, "attributeId" | "type">
    | UtilRequiredKeys<DoubleNumber, "attributeId" | "type">
    | UtilRequiredKeys<Select, "attributeId" | "type">
    | UtilRequiredKeys<Date, "attributeId" | "type">
    | UtilRequiredKeys<Time, "attributeId" | "type">
    | UtilRequiredKeys<DateTime, "attributeId" | "type">
    | UtilRequiredKeys<Url, "attributeId" | "type">
    | UtilRequiredKeys<Email, "attributeId" | "type">
    | UtilRequiredKeys<Textarea, "attributeId" | "type">
    | UtilRequiredKeys<Ipaddress, "attributeId" | "type">
    | UtilRequiredKeys<Reference, "attributeId" | "type">
    | UtilRequiredKeys<User, "attributeId" | "type">
    | UtilRequiredKeys<Confluence, "attributeId" | "type">
    | UtilRequiredKeys<Group, "attributeId" | "type">
    | UtilRequiredKeys<Version, "attributeId" | "type">
    | UtilRequiredKeys<Project, "attributeId" | "type">
    | UtilRequiredKeys<Status, "attributeId" | "type">
    | UtilRequiredKeys<Unknown, "attributeId" | "type">
    ) & {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
};

export interface InsightConfigEntry {
    additionalInfoField?: string;
    additionalTooltipField?: string;
    digitalProduct?: boolean;
    downloadAttachments?: boolean;
    enabled?: boolean;
    fields?: string[];
    filterFields?: string[];
    hasAdditionalInfo?: boolean;
    hasAdditionalTooltip?: boolean;
    /** @format int32 */
    id?: number;
    /** @format int32 */
    insightObjectTypeId?: number;
    insightObjectTypeName?: string;
    /** @format int32 */
    insightSchemaId?: number;
    insightSchemaName?: string;
    jiraConfigEntry?: JiraConfigEntry;
    objectTypeDisplayName?: string;
    projectConfig?: ProjectConfig;
    showAttachments?: boolean;
    subTitleField?: string;
    titleField?: string;
    withCollisions?: boolean;
}

export interface InsightObject {
    attachmentsExist: boolean;
    attributes: InsightAttribute[];
    /** @format int32 */
    id: number;
    label: string;
    objectKey: string;
    objectSelf: string;
    /** @format int32 */
    objectTypeId: number;
    objectTypeName: string;
}

export interface InsightObjectTypeId {
    /** @format int32 */
    raw: number;
}

export interface InsightObjects {
    objects: InsightObject[];
    /** @format int32 */
    totalFilterCount: number;
}

export interface InsightSchema {
    /** @format int32 */
    id: number;
    name: string;
    /** @format int32 */
    objectCount: number;
    /** @format int32 */
    objectTypeCount: number;
}

export interface InsightSchemas {
    objectschemas: InsightSchema[];
}

export interface InsightUser {
    displayName: string;
    emailAddress: string;
    key: string;
    name: string;
}

export interface Integer {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    /** @format int32 */
    value?: number;
}

export interface IntegerSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Ipaddress {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: string;
}

export interface IpaddressSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface JiraConfigEntry {
    createActionName?: string;
    /** @format int32 */
    id?: number;
    includeTime?: boolean;
    jiraDescription?: string;
    jiraEndField?: string;
    /** @format int32 */
    jiraIssueTypeId?: number;
    jiraIssueTypeName?: string;
    jiraObjectField?: string;
    /** @format int32 */
    jiraProjectId?: number;
    jiraProjectName?: string;
    jiraStartField?: string;
    jiraSummary?: string;
    projectConfig?: ProjectConfig;
}

export interface JiraIssueType {
    id?: string;
    name?: string;
}

export interface JiraIssueTypeAttribute {
    id?: string;
    name?: string;
}

export interface JiraProject {
    id?: string;
    key?: string;
    name?: string;
}

export interface JiraStatus {
    id?: string;
    name?: string;
    statusCategory?: string;
}

export interface JiraUpsertRequest {
    end: string;
    /** @format int32 */
    insightConfigEntryId: number;
    objectKey: string;
    reporter: string;
    start: string;
    ticketKey?: string;
}

export interface JiraUser {
    avatarUrl?: string;
    displayName?: string;
    emailAddress?: string;
    key?: string;
    name?: string;
}

export interface LocalTime {
    /** @format int32 */
    hour?: number;
    /** @format int32 */
    minute?: number;
    /** @format int32 */
    nano?: number;
    /** @format int32 */
    second?: number;
}

export interface ObjectTypeSchema {
    attributes: ObjectTypeSchemaAttribute[];
    /** @format int32 */
    id: number;
    name: string;
    parentObjectTypeId?: InsightObjectTypeId;
}

export type ObjectTypeSchemaAttribute = (
    | UtilRequiredKeys<
    TextSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    IntegerSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    BoolSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    DoubleNumberSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    SelectSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    DateSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    TimeSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    DateTimeSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    UrlSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    EmailSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    TextareaSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    IpaddressSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    ReferenceSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    UserSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    ConfluenceSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    GroupSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    VersionSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    ProjectSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    StatusSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    | UtilRequiredKeys<
    UnknownSchema,
    "id" | "includeChildObjectTypes" | "maximumCardinality" | "minimumCardinality" | "name" | "type"
    >
    ) & {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
};

export interface Page {
    /** @format int32 */
    currentPageIndex?: number;
    items?: object[];
    /** @format int32 */
    pageSize?: number;
    /** @format int32 */
    totalItems?: number;
    /** @format int32 */
    totalPages?: number;
}

export interface PermissionUser {
    currentUser: JiraUser;
    hasAdminPermission: boolean;
    hasLeadPermission: boolean;
    hasUserPermission: boolean;
}

export interface Project {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface ProjectConfig {
    dropdownFilter?: boolean;
    enabled?: boolean;
    /** @format int32 */
    id?: number;
    insightConfigEntries?: InsightConfigEntry[];
    jiraConfigEntries?: JiraConfigEntry[];
    /** @format int32 */
    jiraProjectId?: number;
    jiraProjectName?: string;
    key?: string;
    name?: string;
    showObjectSearch?: boolean;
    showTimelineSearch?: boolean;
}

export interface ProjectSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Reference {
    /** @format int32 */
    attributeId: number;
    referencedObjects: ReferencedObject[];
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface ReferenceSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    referenceKind: "UNKNOWN" | "DEPENDENCY" | "LINK" | "REFERENCE" | "FINANCIAL" | "TECHNICAL";
    /** @format int32 */
    referenceObjectTypeId: number;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface ReferencedObject {
    /** @format int32 */
    id: number;
    label: string;
    objectKey: string;
    objectType?: ReferencedObjectType;
}

export interface ReferencedObjectType {
    /** @format int32 */
    id: number;
    name: string;
}

export interface SearchResponse {
    filterRequest?: FilterRequest;
    filters?: Filter[];
    results?: InsightObjects;
}

export interface Select {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    values?: string[];
}

export interface SelectSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    options: string[];
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Status {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface StatusSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Text {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: string;
}

export interface TextSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Textarea {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: string;
}

export interface TextareaSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Time {
    /** @format int32 */
    attributeId: number;
    displayValue?: string;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    value?: LocalTime;
}

export interface TimeSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface TimetableObject {
    insightObject: InsightObject;
    tickets: GenericJiraTicket[];
}

export interface TimetableObjects {
    objects: TimetableObject[];
    /** @format int32 */
    totalFilterCount: number;
}

export interface TranslationResponseObject {
    key?: string;
    value?: string;
}

export interface Unknown {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface UnknownSchema {
    debugDescription: string;
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Url {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    values?: string[];
}

export interface UrlSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface User {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
    users: InsightUser[];
}

export interface UserSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface Version {
    /** @format int32 */
    attributeId: number;
    schema?: ObjectTypeSchemaAttribute;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}

export interface VersionSchema {
    /** @format int32 */
    id: number;
    includeChildObjectTypes: boolean;
    /** @format int32 */
    maximumCardinality: number;
    /** @format int32 */
    minimumCardinality: number;
    name: string;
    type:
        | "Text"
        | "Integer"
        | "Bool"
        | "DoubleNumber"
        | "Select"
        | "Date"
        | "Time"
        | "DateTime"
        | "Url"
        | "Email"
        | "Textarea"
        | "Ipaddress"
        | "Reference"
        | "User"
        | "Confluence"
        | "Group"
        | "Version"
        | "Project"
        | "Status"
        | "Unknown";
}
