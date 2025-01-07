import * as pulumi from "@pulumi/pulumi";
export declare function getSourceTempo(args: GetSourceTempoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTempoResult>;
/**
 * A collection of arguments for invoking getSourceTempo.
 */
export interface GetSourceTempoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTempo.
 */
export interface GetSourceTempoResult {
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
export declare function getSourceTempoOutput(args: GetSourceTempoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTempoResult>;
/**
 * A collection of arguments for invoking getSourceTempo.
 */
export interface GetSourceTempoOutputArgs {
    sourceId: pulumi.Input<string>;
}
