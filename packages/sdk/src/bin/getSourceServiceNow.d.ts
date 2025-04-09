import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceServiceNow(args: GetSourceServiceNowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceServiceNowResult>;
/**
 * A collection of arguments for invoking getSourceServiceNow.
 */
export interface GetSourceServiceNowArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceServiceNow.
 */
export interface GetSourceServiceNowResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceServiceNowResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceServiceNowOutput(args: GetSourceServiceNowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceServiceNowResult>;
/**
 * A collection of arguments for invoking getSourceServiceNow.
 */
export interface GetSourceServiceNowOutputArgs {
    sourceId: pulumi.Input<string>;
}
