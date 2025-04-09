import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEverhour(args: GetSourceEverhourArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEverhourResult>;
/**
 * A collection of arguments for invoking getSourceEverhour.
 */
export interface GetSourceEverhourArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEverhour.
 */
export interface GetSourceEverhourResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEverhourResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEverhourOutput(args: GetSourceEverhourOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEverhourResult>;
/**
 * A collection of arguments for invoking getSourceEverhour.
 */
export interface GetSourceEverhourOutputArgs {
    sourceId: pulumi.Input<string>;
}
