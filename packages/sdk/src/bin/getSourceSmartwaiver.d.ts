import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSmartwaiver(args: GetSourceSmartwaiverArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmartwaiverResult>;
/**
 * A collection of arguments for invoking getSourceSmartwaiver.
 */
export interface GetSourceSmartwaiverArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmartwaiver.
 */
export interface GetSourceSmartwaiverResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmartwaiverResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSmartwaiverOutput(args: GetSourceSmartwaiverOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmartwaiverResult>;
/**
 * A collection of arguments for invoking getSourceSmartwaiver.
 */
export interface GetSourceSmartwaiverOutputArgs {
    sourceId: pulumi.Input<string>;
}
