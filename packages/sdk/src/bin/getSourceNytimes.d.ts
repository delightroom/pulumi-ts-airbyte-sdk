import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNytimes(args: GetSourceNytimesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNytimesResult>;
/**
 * A collection of arguments for invoking getSourceNytimes.
 */
export interface GetSourceNytimesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNytimes.
 */
export interface GetSourceNytimesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNytimesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNytimesOutput(args: GetSourceNytimesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNytimesResult>;
/**
 * A collection of arguments for invoking getSourceNytimes.
 */
export interface GetSourceNytimesOutputArgs {
    sourceId: pulumi.Input<string>;
}
