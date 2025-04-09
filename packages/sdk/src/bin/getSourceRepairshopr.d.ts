import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRepairshopr(args: GetSourceRepairshoprArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRepairshoprResult>;
/**
 * A collection of arguments for invoking getSourceRepairshopr.
 */
export interface GetSourceRepairshoprArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRepairshopr.
 */
export interface GetSourceRepairshoprResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRepairshoprResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRepairshoprOutput(args: GetSourceRepairshoprOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRepairshoprResult>;
/**
 * A collection of arguments for invoking getSourceRepairshopr.
 */
export interface GetSourceRepairshoprOutputArgs {
    sourceId: pulumi.Input<string>;
}
