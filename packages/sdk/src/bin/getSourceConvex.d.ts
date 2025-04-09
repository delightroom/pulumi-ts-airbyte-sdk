import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceConvex(args: GetSourceConvexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConvexResult>;
/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConvex.
 */
export interface GetSourceConvexResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConvexResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceConvexOutput(args: GetSourceConvexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConvexResult>;
/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexOutputArgs {
    sourceId: pulumi.Input<string>;
}
