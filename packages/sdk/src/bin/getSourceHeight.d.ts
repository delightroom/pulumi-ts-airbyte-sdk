import * as pulumi from "@pulumi/pulumi";
export declare function getSourceHeight(args: GetSourceHeightArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHeightResult>;
/**
 * A collection of arguments for invoking getSourceHeight.
 */
export interface GetSourceHeightArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHeight.
 */
export interface GetSourceHeightResult {
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
export declare function getSourceHeightOutput(args: GetSourceHeightOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHeightResult>;
/**
 * A collection of arguments for invoking getSourceHeight.
 */
export interface GetSourceHeightOutputArgs {
    sourceId: pulumi.Input<string>;
}
