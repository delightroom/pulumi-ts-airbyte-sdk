import * as pulumi from "@pulumi/pulumi";
export declare function getSourceRedshift(args: GetSourceRedshiftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRedshiftResult>;
/**
 * A collection of arguments for invoking getSourceRedshift.
 */
export interface GetSourceRedshiftArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRedshift.
 */
export interface GetSourceRedshiftResult {
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
export declare function getSourceRedshiftOutput(args: GetSourceRedshiftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRedshiftResult>;
/**
 * A collection of arguments for invoking getSourceRedshift.
 */
export interface GetSourceRedshiftOutputArgs {
    sourceId: pulumi.Input<string>;
}
