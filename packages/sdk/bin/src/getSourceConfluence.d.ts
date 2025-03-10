import * as pulumi from "@pulumi/pulumi";
export declare function getSourceConfluence(args: GetSourceConfluenceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConfluenceResult>;
/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConfluence.
 */
export interface GetSourceConfluenceResult {
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
export declare function getSourceConfluenceOutput(args: GetSourceConfluenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConfluenceResult>;
/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceConfluence.d.ts.map