import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKlaviyo(args: GetSourceKlaviyoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKlaviyoResult>;
/**
 * A collection of arguments for invoking getSourceKlaviyo.
 */
export interface GetSourceKlaviyoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKlaviyo.
 */
export interface GetSourceKlaviyoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKlaviyoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKlaviyoOutput(args: GetSourceKlaviyoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKlaviyoResult>;
/**
 * A collection of arguments for invoking getSourceKlaviyo.
 */
export interface GetSourceKlaviyoOutputArgs {
    sourceId: pulumi.Input<string>;
}
