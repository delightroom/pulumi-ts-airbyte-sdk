import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceJotform(args: GetSourceJotformArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJotformResult>;
/**
 * A collection of arguments for invoking getSourceJotform.
 */
export interface GetSourceJotformArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJotform.
 */
export interface GetSourceJotformResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJotformResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceJotformOutput(args: GetSourceJotformOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJotformResult>;
/**
 * A collection of arguments for invoking getSourceJotform.
 */
export interface GetSourceJotformOutputArgs {
    sourceId: pulumi.Input<string>;
}
