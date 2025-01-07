import * as pulumi from "@pulumi/pulumi";
export declare function getSourceBraze(args: GetSourceBrazeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBrazeResult>;
/**
 * A collection of arguments for invoking getSourceBraze.
 */
export interface GetSourceBrazeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBraze.
 */
export interface GetSourceBrazeResult {
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
export declare function getSourceBrazeOutput(args: GetSourceBrazeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBrazeResult>;
/**
 * A collection of arguments for invoking getSourceBraze.
 */
export interface GetSourceBrazeOutputArgs {
    sourceId: pulumi.Input<string>;
}
