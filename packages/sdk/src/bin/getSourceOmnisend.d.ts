import * as pulumi from "@pulumi/pulumi";
export declare function getSourceOmnisend(args: GetSourceOmnisendArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOmnisendResult>;
/**
 * A collection of arguments for invoking getSourceOmnisend.
 */
export interface GetSourceOmnisendArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOmnisend.
 */
export interface GetSourceOmnisendResult {
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
export declare function getSourceOmnisendOutput(args: GetSourceOmnisendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOmnisendResult>;
/**
 * A collection of arguments for invoking getSourceOmnisend.
 */
export interface GetSourceOmnisendOutputArgs {
    sourceId: pulumi.Input<string>;
}
