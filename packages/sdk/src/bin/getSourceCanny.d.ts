import * as pulumi from "@pulumi/pulumi";
export declare function getSourceCanny(args: GetSourceCannyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCannyResult>;
/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCanny.
 */
export interface GetSourceCannyResult {
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
export declare function getSourceCannyOutput(args: GetSourceCannyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCannyResult>;
/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyOutputArgs {
    sourceId: pulumi.Input<string>;
}
