import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLinnworks(args: GetSourceLinnworksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinnworksResult>;
/**
 * A collection of arguments for invoking getSourceLinnworks.
 */
export interface GetSourceLinnworksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLinnworks.
 */
export interface GetSourceLinnworksResult {
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
export declare function getSourceLinnworksOutput(args: GetSourceLinnworksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinnworksResult>;
/**
 * A collection of arguments for invoking getSourceLinnworks.
 */
export interface GetSourceLinnworksOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceLinnworks.d.ts.map