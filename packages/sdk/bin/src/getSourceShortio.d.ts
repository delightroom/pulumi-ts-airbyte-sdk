import * as pulumi from "@pulumi/pulumi";
export declare function getSourceShortio(args: GetSourceShortioArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShortioResult>;
/**
 * A collection of arguments for invoking getSourceShortio.
 */
export interface GetSourceShortioArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShortio.
 */
export interface GetSourceShortioResult {
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
export declare function getSourceShortioOutput(args: GetSourceShortioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShortioResult>;
/**
 * A collection of arguments for invoking getSourceShortio.
 */
export interface GetSourceShortioOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceShortio.d.ts.map