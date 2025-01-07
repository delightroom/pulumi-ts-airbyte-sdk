import * as pulumi from "@pulumi/pulumi";
export declare function getSourceClockify(args: GetSourceClockifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClockifyResult>;
/**
 * A collection of arguments for invoking getSourceClockify.
 */
export interface GetSourceClockifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClockify.
 */
export interface GetSourceClockifyResult {
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
export declare function getSourceClockifyOutput(args: GetSourceClockifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClockifyResult>;
/**
 * A collection of arguments for invoking getSourceClockify.
 */
export interface GetSourceClockifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
