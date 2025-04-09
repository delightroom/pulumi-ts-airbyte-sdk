import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNavan(args: GetSourceNavanArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNavanResult>;
/**
 * A collection of arguments for invoking getSourceNavan.
 */
export interface GetSourceNavanArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNavan.
 */
export interface GetSourceNavanResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNavanResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNavanOutput(args: GetSourceNavanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNavanResult>;
/**
 * A collection of arguments for invoking getSourceNavan.
 */
export interface GetSourceNavanOutputArgs {
    sourceId: pulumi.Input<string>;
}
