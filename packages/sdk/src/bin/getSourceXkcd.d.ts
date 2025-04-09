import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceXkcd(args: GetSourceXkcdArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceXkcdResult>;
/**
 * A collection of arguments for invoking getSourceXkcd.
 */
export interface GetSourceXkcdArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceXkcd.
 */
export interface GetSourceXkcdResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceXkcdResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceXkcdOutput(args: GetSourceXkcdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceXkcdResult>;
/**
 * A collection of arguments for invoking getSourceXkcd.
 */
export interface GetSourceXkcdOutputArgs {
    sourceId: pulumi.Input<string>;
}
