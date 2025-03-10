import * as pulumi from "@pulumi/pulumi";
export declare function getSourceZoom(args: GetSourceZoomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZoomResult>;
/**
 * A collection of arguments for invoking getSourceZoom.
 */
export interface GetSourceZoomArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZoom.
 */
export interface GetSourceZoomResult {
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
export declare function getSourceZoomOutput(args: GetSourceZoomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZoomResult>;
/**
 * A collection of arguments for invoking getSourceZoom.
 */
export interface GetSourceZoomOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceZoom.d.ts.map