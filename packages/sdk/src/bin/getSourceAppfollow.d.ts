import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAppfollow(args: GetSourceAppfollowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppfollowResult>;
/**
 * A collection of arguments for invoking getSourceAppfollow.
 */
export interface GetSourceAppfollowArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppfollow.
 */
export interface GetSourceAppfollowResult {
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
export declare function getSourceAppfollowOutput(args: GetSourceAppfollowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppfollowResult>;
/**
 * A collection of arguments for invoking getSourceAppfollow.
 */
export interface GetSourceAppfollowOutputArgs {
    sourceId: pulumi.Input<string>;
}
