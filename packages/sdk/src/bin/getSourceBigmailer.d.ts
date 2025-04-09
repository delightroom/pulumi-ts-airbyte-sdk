import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBigmailer(args: GetSourceBigmailerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBigmailerResult>;
/**
 * A collection of arguments for invoking getSourceBigmailer.
 */
export interface GetSourceBigmailerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBigmailer.
 */
export interface GetSourceBigmailerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBigmailerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBigmailerOutput(args: GetSourceBigmailerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBigmailerResult>;
/**
 * A collection of arguments for invoking getSourceBigmailer.
 */
export interface GetSourceBigmailerOutputArgs {
    sourceId: pulumi.Input<string>;
}
