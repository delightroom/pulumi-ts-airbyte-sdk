import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePrimetric(args: GetSourcePrimetricArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePrimetricResult>;
/**
 * A collection of arguments for invoking getSourcePrimetric.
 */
export interface GetSourcePrimetricArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePrimetric.
 */
export interface GetSourcePrimetricResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePrimetricResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePrimetricOutput(args: GetSourcePrimetricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePrimetricResult>;
/**
 * A collection of arguments for invoking getSourcePrimetric.
 */
export interface GetSourcePrimetricOutputArgs {
    sourceId: pulumi.Input<string>;
}
