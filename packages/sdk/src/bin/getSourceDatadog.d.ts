import * as pulumi from "@pulumi/pulumi";
export declare function getSourceDatadog(args: GetSourceDatadogArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDatadogResult>;
/**
 * A collection of arguments for invoking getSourceDatadog.
 */
export interface GetSourceDatadogArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDatadog.
 */
export interface GetSourceDatadogResult {
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
export declare function getSourceDatadogOutput(args: GetSourceDatadogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDatadogResult>;
/**
 * A collection of arguments for invoking getSourceDatadog.
 */
export interface GetSourceDatadogOutputArgs {
    sourceId: pulumi.Input<string>;
}
