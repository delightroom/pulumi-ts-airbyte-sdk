import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZendeskSupport(args: GetSourceZendeskSupportArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskSupportResult>;
/**
 * A collection of arguments for invoking getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZendeskSupportResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZendeskSupportOutput(args: GetSourceZendeskSupportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZendeskSupportResult>;
/**
 * A collection of arguments for invoking getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportOutputArgs {
    sourceId: pulumi.Input<string>;
}
