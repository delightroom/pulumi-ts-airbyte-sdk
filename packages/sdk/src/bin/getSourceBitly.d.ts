import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBitly(args: GetSourceBitlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBitlyResult>;
/**
 * A collection of arguments for invoking getSourceBitly.
 */
export interface GetSourceBitlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBitly.
 */
export interface GetSourceBitlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBitlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBitlyOutput(args: GetSourceBitlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBitlyResult>;
/**
 * A collection of arguments for invoking getSourceBitly.
 */
export interface GetSourceBitlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
