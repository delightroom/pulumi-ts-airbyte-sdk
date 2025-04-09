import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSegment(args: GetSourceSegmentArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSegmentResult>;
/**
 * A collection of arguments for invoking getSourceSegment.
 */
export interface GetSourceSegmentArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSegment.
 */
export interface GetSourceSegmentResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSegmentResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSegmentOutput(args: GetSourceSegmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSegmentResult>;
/**
 * A collection of arguments for invoking getSourceSegment.
 */
export interface GetSourceSegmentOutputArgs {
    sourceId: pulumi.Input<string>;
}
