import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceS3(args: GetSourceS3Args, opts?: pulumi.InvokeOptions): Promise<GetSourceS3Result>;
/**
 * A collection of arguments for invoking getSourceS3.
 */
export interface GetSourceS3Args {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceS3.
 */
export interface GetSourceS3Result {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceS3ResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceS3Output(args: GetSourceS3OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceS3Result>;
/**
 * A collection of arguments for invoking getSourceS3.
 */
export interface GetSourceS3OutputArgs {
    sourceId: pulumi.Input<string>;
}
