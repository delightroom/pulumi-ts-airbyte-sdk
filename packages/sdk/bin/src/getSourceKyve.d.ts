import * as pulumi from "@pulumi/pulumi";
export declare function getSourceKyve(args: GetSourceKyveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKyveResult>;
/**
 * A collection of arguments for invoking getSourceKyve.
 */
export interface GetSourceKyveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKyve.
 */
export interface GetSourceKyveResult {
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
export declare function getSourceKyveOutput(args: GetSourceKyveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKyveResult>;
/**
 * A collection of arguments for invoking getSourceKyve.
 */
export interface GetSourceKyveOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceKyve.d.ts.map