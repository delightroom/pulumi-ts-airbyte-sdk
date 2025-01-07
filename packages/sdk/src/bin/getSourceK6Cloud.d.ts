import * as pulumi from "@pulumi/pulumi";
export declare function getSourceK6Cloud(args: GetSourceK6CloudArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceK6CloudResult>;
/**
 * A collection of arguments for invoking getSourceK6Cloud.
 */
export interface GetSourceK6CloudArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceK6Cloud.
 */
export interface GetSourceK6CloudResult {
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
export declare function getSourceK6CloudOutput(args: GetSourceK6CloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceK6CloudResult>;
/**
 * A collection of arguments for invoking getSourceK6Cloud.
 */
export interface GetSourceK6CloudOutputArgs {
    sourceId: pulumi.Input<string>;
}
