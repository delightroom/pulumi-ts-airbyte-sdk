import * as pulumi from "@pulumi/pulumi";
export declare function getSourceClickupApi(args: GetSourceClickupApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClickupApiResult>;
/**
 * A collection of arguments for invoking getSourceClickupApi.
 */
export interface GetSourceClickupApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClickupApi.
 */
export interface GetSourceClickupApiResult {
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
export declare function getSourceClickupApiOutput(args: GetSourceClickupApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClickupApiResult>;
/**
 * A collection of arguments for invoking getSourceClickupApi.
 */
export interface GetSourceClickupApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
