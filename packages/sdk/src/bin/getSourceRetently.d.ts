import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRetently(args: GetSourceRetentlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRetentlyResult>;
/**
 * A collection of arguments for invoking getSourceRetently.
 */
export interface GetSourceRetentlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRetently.
 */
export interface GetSourceRetentlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRetentlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRetentlyOutput(args: GetSourceRetentlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRetentlyResult>;
/**
 * A collection of arguments for invoking getSourceRetently.
 */
export interface GetSourceRetentlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
