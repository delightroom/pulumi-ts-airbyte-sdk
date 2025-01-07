import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFile(args: GetSourceFileArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFileResult>;
/**
 * A collection of arguments for invoking getSourceFile.
 */
export interface GetSourceFileArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFile.
 */
export interface GetSourceFileResult {
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
export declare function getSourceFileOutput(args: GetSourceFileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFileResult>;
/**
 * A collection of arguments for invoking getSourceFile.
 */
export interface GetSourceFileOutputArgs {
    sourceId: pulumi.Input<string>;
}
