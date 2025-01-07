import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLaunchdarkly(args: GetSourceLaunchdarklyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLaunchdarklyResult>;
/**
 * A collection of arguments for invoking getSourceLaunchdarkly.
 */
export interface GetSourceLaunchdarklyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLaunchdarkly.
 */
export interface GetSourceLaunchdarklyResult {
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
export declare function getSourceLaunchdarklyOutput(args: GetSourceLaunchdarklyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLaunchdarklyResult>;
/**
 * A collection of arguments for invoking getSourceLaunchdarkly.
 */
export interface GetSourceLaunchdarklyOutputArgs {
    sourceId: pulumi.Input<string>;
}
