import * as pulumi from "@pulumi/pulumi";
export declare function getSourceConvex(args: GetSourceConvexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConvexResult>;
/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConvex.
 */
export interface GetSourceConvexResult {
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
export declare function getSourceConvexOutput(args: GetSourceConvexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConvexResult>;
/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceConvex.d.ts.map