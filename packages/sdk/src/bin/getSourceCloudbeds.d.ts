import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCloudbeds(args: GetSourceCloudbedsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCloudbedsResult>;
/**
 * A collection of arguments for invoking getSourceCloudbeds.
 */
export interface GetSourceCloudbedsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCloudbeds.
 */
export interface GetSourceCloudbedsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCloudbedsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCloudbedsOutput(args: GetSourceCloudbedsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCloudbedsResult>;
/**
 * A collection of arguments for invoking getSourceCloudbeds.
 */
export interface GetSourceCloudbedsOutputArgs {
    sourceId: pulumi.Input<string>;
}
