import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAirtable(args: GetSourceAirtableArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAirtableResult>;
/**
 * A collection of arguments for invoking getSourceAirtable.
 */
export interface GetSourceAirtableArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAirtable.
 */
export interface GetSourceAirtableResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAirtableOutput(args: GetSourceAirtableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAirtableResult>;
/**
 * A collection of arguments for invoking getSourceAirtable.
 */
export interface GetSourceAirtableOutputArgs {
    sourceId: pulumi.Input<string>;
}
