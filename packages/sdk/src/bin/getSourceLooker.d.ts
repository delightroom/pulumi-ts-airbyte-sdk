import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLooker(args: GetSourceLookerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLookerResult>;
/**
 * A collection of arguments for invoking getSourceLooker.
 */
export interface GetSourceLookerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLooker.
 */
export interface GetSourceLookerResult {
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
export declare function getSourceLookerOutput(args: GetSourceLookerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLookerResult>;
/**
 * A collection of arguments for invoking getSourceLooker.
 */
export interface GetSourceLookerOutputArgs {
    sourceId: pulumi.Input<string>;
}
