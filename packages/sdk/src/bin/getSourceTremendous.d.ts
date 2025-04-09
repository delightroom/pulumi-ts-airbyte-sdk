import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTremendous(args: GetSourceTremendousArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTremendousResult>;
/**
 * A collection of arguments for invoking getSourceTremendous.
 */
export interface GetSourceTremendousArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTremendous.
 */
export interface GetSourceTremendousResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTremendousResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTremendousOutput(args: GetSourceTremendousOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTremendousResult>;
/**
 * A collection of arguments for invoking getSourceTremendous.
 */
export interface GetSourceTremendousOutputArgs {
    sourceId: pulumi.Input<string>;
}
