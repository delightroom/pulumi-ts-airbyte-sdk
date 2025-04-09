import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePhyllo(args: GetSourcePhylloArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePhylloResult>;
/**
 * A collection of arguments for invoking getSourcePhyllo.
 */
export interface GetSourcePhylloArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePhyllo.
 */
export interface GetSourcePhylloResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePhylloResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePhylloOutput(args: GetSourcePhylloOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePhylloResult>;
/**
 * A collection of arguments for invoking getSourcePhyllo.
 */
export interface GetSourcePhylloOutputArgs {
    sourceId: pulumi.Input<string>;
}
