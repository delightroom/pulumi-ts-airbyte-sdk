import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCallrail(args: GetSourceCallrailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCallrailResult>;
/**
 * A collection of arguments for invoking getSourceCallrail.
 */
export interface GetSourceCallrailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCallrail.
 */
export interface GetSourceCallrailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCallrailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCallrailOutput(args: GetSourceCallrailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCallrailResult>;
/**
 * A collection of arguments for invoking getSourceCallrail.
 */
export interface GetSourceCallrailOutputArgs {
    sourceId: pulumi.Input<string>;
}
