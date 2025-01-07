import * as pulumi from "@pulumi/pulumi";
export declare function getSourceBambooHr(args: GetSourceBambooHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBambooHrResult>;
/**
 * A collection of arguments for invoking getSourceBambooHr.
 */
export interface GetSourceBambooHrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBambooHr.
 */
export interface GetSourceBambooHrResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBambooHrOutput(args: GetSourceBambooHrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBambooHrResult>;
/**
 * A collection of arguments for invoking getSourceBambooHr.
 */
export interface GetSourceBambooHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
