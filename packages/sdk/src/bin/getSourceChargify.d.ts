import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceChargify(args: GetSourceChargifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceChargifyResult>;
/**
 * A collection of arguments for invoking getSourceChargify.
 */
export interface GetSourceChargifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceChargify.
 */
export interface GetSourceChargifyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceChargifyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceChargifyOutput(args: GetSourceChargifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceChargifyResult>;
/**
 * A collection of arguments for invoking getSourceChargify.
 */
export interface GetSourceChargifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
