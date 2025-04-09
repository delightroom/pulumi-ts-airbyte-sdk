import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYoutubeData(args: GetSourceYoutubeDataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYoutubeDataResult>;
/**
 * A collection of arguments for invoking getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYoutubeDataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYoutubeDataOutput(args: GetSourceYoutubeDataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYoutubeDataResult>;
/**
 * A collection of arguments for invoking getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataOutputArgs {
    sourceId: pulumi.Input<string>;
}
