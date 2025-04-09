import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWordpress(args: GetSourceWordpressArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWordpressResult>;
/**
 * A collection of arguments for invoking getSourceWordpress.
 */
export interface GetSourceWordpressArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWordpress.
 */
export interface GetSourceWordpressResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWordpressResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWordpressOutput(args: GetSourceWordpressOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWordpressResult>;
/**
 * A collection of arguments for invoking getSourceWordpress.
 */
export interface GetSourceWordpressOutputArgs {
    sourceId: pulumi.Input<string>;
}
