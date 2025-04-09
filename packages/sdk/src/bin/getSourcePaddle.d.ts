import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePaddle(args: GetSourcePaddleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaddleResult>;
/**
 * A collection of arguments for invoking getSourcePaddle.
 */
export interface GetSourcePaddleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePaddle.
 */
export interface GetSourcePaddleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePaddleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePaddleOutput(args: GetSourcePaddleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePaddleResult>;
/**
 * A collection of arguments for invoking getSourcePaddle.
 */
export interface GetSourcePaddleOutputArgs {
    sourceId: pulumi.Input<string>;
}
