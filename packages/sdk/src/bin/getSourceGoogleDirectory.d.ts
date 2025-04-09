import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleDirectoryResourceAllocation;
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
