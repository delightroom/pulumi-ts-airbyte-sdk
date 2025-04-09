import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAirtableResourceAllocation;
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
