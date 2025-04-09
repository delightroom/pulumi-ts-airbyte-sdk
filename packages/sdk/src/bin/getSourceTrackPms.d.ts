import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTrackPms(args: GetSourceTrackPmsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTrackPmsResult>;
/**
 * A collection of arguments for invoking getSourceTrackPms.
 */
export interface GetSourceTrackPmsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTrackPms.
 */
export interface GetSourceTrackPmsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTrackPmsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTrackPmsOutput(args: GetSourceTrackPmsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTrackPmsResult>;
/**
 * A collection of arguments for invoking getSourceTrackPms.
 */
export interface GetSourceTrackPmsOutputArgs {
    sourceId: pulumi.Input<string>;
}
