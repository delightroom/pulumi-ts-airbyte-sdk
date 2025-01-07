import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePipedrive(args: GetSourcePipedriveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePipedriveResult>;
/**
 * A collection of arguments for invoking getSourcePipedrive.
 */
export interface GetSourcePipedriveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePipedrive.
 */
export interface GetSourcePipedriveResult {
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
export declare function getSourcePipedriveOutput(args: GetSourcePipedriveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePipedriveResult>;
/**
 * A collection of arguments for invoking getSourcePipedrive.
 */
export interface GetSourcePipedriveOutputArgs {
    sourceId: pulumi.Input<string>;
}
