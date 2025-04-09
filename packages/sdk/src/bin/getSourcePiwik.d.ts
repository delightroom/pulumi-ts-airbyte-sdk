import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePiwik(args: GetSourcePiwikArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePiwikResult>;
/**
 * A collection of arguments for invoking getSourcePiwik.
 */
export interface GetSourcePiwikArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePiwik.
 */
export interface GetSourcePiwikResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePiwikResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePiwikOutput(args: GetSourcePiwikOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePiwikResult>;
/**
 * A collection of arguments for invoking getSourcePiwik.
 */
export interface GetSourcePiwikOutputArgs {
    sourceId: pulumi.Input<string>;
}
