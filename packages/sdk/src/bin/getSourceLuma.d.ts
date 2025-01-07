import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLuma(args: GetSourceLumaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLumaResult>;
/**
 * A collection of arguments for invoking getSourceLuma.
 */
export interface GetSourceLumaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLuma.
 */
export interface GetSourceLumaResult {
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
export declare function getSourceLumaOutput(args: GetSourceLumaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLumaResult>;
/**
 * A collection of arguments for invoking getSourceLuma.
 */
export interface GetSourceLumaOutputArgs {
    sourceId: pulumi.Input<string>;
}
