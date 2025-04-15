import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceJamfPro(args: GetSourceJamfProArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJamfProResult>;
/**
 * A collection of arguments for invoking getSourceJamfPro.
 */
export interface GetSourceJamfProArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJamfPro.
 */
export interface GetSourceJamfProResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJamfProResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceJamfProOutput(args: GetSourceJamfProOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJamfProResult>;
/**
 * A collection of arguments for invoking getSourceJamfPro.
 */
export interface GetSourceJamfProOutputArgs {
    sourceId: pulumi.Input<string>;
}
