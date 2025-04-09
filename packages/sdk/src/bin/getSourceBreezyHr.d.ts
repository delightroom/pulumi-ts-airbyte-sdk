import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBreezyHr(args: GetSourceBreezyHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBreezyHrResult>;
/**
 * A collection of arguments for invoking getSourceBreezyHr.
 */
export interface GetSourceBreezyHrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBreezyHr.
 */
export interface GetSourceBreezyHrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBreezyHrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBreezyHrOutput(args: GetSourceBreezyHrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBreezyHrResult>;
/**
 * A collection of arguments for invoking getSourceBreezyHr.
 */
export interface GetSourceBreezyHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
