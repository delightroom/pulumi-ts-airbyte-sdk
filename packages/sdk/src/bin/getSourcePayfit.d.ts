import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePayfit(args: GetSourcePayfitArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePayfitResult>;
/**
 * A collection of arguments for invoking getSourcePayfit.
 */
export interface GetSourcePayfitArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePayfit.
 */
export interface GetSourcePayfitResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePayfitResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePayfitOutput(args: GetSourcePayfitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePayfitResult>;
/**
 * A collection of arguments for invoking getSourcePayfit.
 */
export interface GetSourcePayfitOutputArgs {
    sourceId: pulumi.Input<string>;
}
