import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailchimp(args: GetSourceMailchimpArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailchimpResult>;
/**
 * A collection of arguments for invoking getSourceMailchimp.
 */
export interface GetSourceMailchimpArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailchimp.
 */
export interface GetSourceMailchimpResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailchimpResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailchimpOutput(args: GetSourceMailchimpOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailchimpResult>;
/**
 * A collection of arguments for invoking getSourceMailchimp.
 */
export interface GetSourceMailchimpOutputArgs {
    sourceId: pulumi.Input<string>;
}
