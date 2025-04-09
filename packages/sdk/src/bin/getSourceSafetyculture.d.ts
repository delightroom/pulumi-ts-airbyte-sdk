import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSafetyculture(args: GetSourceSafetycultureArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSafetycultureResult>;
/**
 * A collection of arguments for invoking getSourceSafetyculture.
 */
export interface GetSourceSafetycultureArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSafetyculture.
 */
export interface GetSourceSafetycultureResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSafetycultureResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSafetycultureOutput(args: GetSourceSafetycultureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSafetycultureResult>;
/**
 * A collection of arguments for invoking getSourceSafetyculture.
 */
export interface GetSourceSafetycultureOutputArgs {
    sourceId: pulumi.Input<string>;
}
