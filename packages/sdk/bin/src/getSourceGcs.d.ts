import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGcs(args: GetSourceGcsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGcsResult>;
/**
 * A collection of arguments for invoking getSourceGcs.
 */
export interface GetSourceGcsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGcs.
 */
export interface GetSourceGcsResult {
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
export declare function getSourceGcsOutput(args: GetSourceGcsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGcsResult>;
/**
 * A collection of arguments for invoking getSourceGcs.
 */
export interface GetSourceGcsOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGcs.d.ts.map