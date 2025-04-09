import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpenfda(args: GetSourceOpenfdaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpenfdaResult>;
/**
 * A collection of arguments for invoking getSourceOpenfda.
 */
export interface GetSourceOpenfdaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpenfda.
 */
export interface GetSourceOpenfdaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpenfdaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpenfdaOutput(args: GetSourceOpenfdaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpenfdaResult>;
/**
 * A collection of arguments for invoking getSourceOpenfda.
 */
export interface GetSourceOpenfdaOutputArgs {
    sourceId: pulumi.Input<string>;
}
