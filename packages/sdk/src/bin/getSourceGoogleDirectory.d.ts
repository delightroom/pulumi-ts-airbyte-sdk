import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoogleDirectory(args: GetSourceGoogleDirectoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleDirectoryResult>;
/**
 * A collection of arguments for invoking getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryResult {
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
export declare function getSourceGoogleDirectoryOutput(args: GetSourceGoogleDirectoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleDirectoryResult>;
/**
 * A collection of arguments for invoking getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
