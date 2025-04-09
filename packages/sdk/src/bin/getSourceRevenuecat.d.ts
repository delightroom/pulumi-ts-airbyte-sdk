import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRevenuecat(args: GetSourceRevenuecatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRevenuecatResult>;
/**
 * A collection of arguments for invoking getSourceRevenuecat.
 */
export interface GetSourceRevenuecatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRevenuecat.
 */
export interface GetSourceRevenuecatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRevenuecatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRevenuecatOutput(args: GetSourceRevenuecatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRevenuecatResult>;
/**
 * A collection of arguments for invoking getSourceRevenuecat.
 */
export interface GetSourceRevenuecatOutputArgs {
    sourceId: pulumi.Input<string>;
}
