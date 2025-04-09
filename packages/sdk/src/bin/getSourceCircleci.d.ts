import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCircleci(args: GetSourceCircleciArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCircleciResult>;
/**
 * A collection of arguments for invoking getSourceCircleci.
 */
export interface GetSourceCircleciArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCircleci.
 */
export interface GetSourceCircleciResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCircleciResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCircleciOutput(args: GetSourceCircleciOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCircleciResult>;
/**
 * A collection of arguments for invoking getSourceCircleci.
 */
export interface GetSourceCircleciOutputArgs {
    sourceId: pulumi.Input<string>;
}
