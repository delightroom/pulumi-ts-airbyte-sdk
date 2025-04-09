import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGreenhouse(args: GetSourceGreenhouseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGreenhouseResult>;
/**
 * A collection of arguments for invoking getSourceGreenhouse.
 */
export interface GetSourceGreenhouseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGreenhouse.
 */
export interface GetSourceGreenhouseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGreenhouseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGreenhouseOutput(args: GetSourceGreenhouseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGreenhouseResult>;
/**
 * A collection of arguments for invoking getSourceGreenhouse.
 */
export interface GetSourceGreenhouseOutputArgs {
    sourceId: pulumi.Input<string>;
}
