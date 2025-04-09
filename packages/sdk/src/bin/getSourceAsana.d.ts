import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAsana(args: GetSourceAsanaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAsanaResult>;
/**
 * A collection of arguments for invoking getSourceAsana.
 */
export interface GetSourceAsanaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAsana.
 */
export interface GetSourceAsanaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAsanaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAsanaOutput(args: GetSourceAsanaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAsanaResult>;
/**
 * A collection of arguments for invoking getSourceAsana.
 */
export interface GetSourceAsanaOutputArgs {
    sourceId: pulumi.Input<string>;
}
