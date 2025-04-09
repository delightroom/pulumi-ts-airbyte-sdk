import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOkta(args: GetSourceOktaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOktaResult>;
/**
 * A collection of arguments for invoking getSourceOkta.
 */
export interface GetSourceOktaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOkta.
 */
export interface GetSourceOktaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOktaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOktaOutput(args: GetSourceOktaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOktaResult>;
/**
 * A collection of arguments for invoking getSourceOkta.
 */
export interface GetSourceOktaOutputArgs {
    sourceId: pulumi.Input<string>;
}
