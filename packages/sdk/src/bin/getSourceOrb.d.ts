import * as pulumi from "@pulumi/pulumi";
export declare function getSourceOrb(args: GetSourceOrbArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOrbResult>;
/**
 * A collection of arguments for invoking getSourceOrb.
 */
export interface GetSourceOrbArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOrb.
 */
export interface GetSourceOrbResult {
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
export declare function getSourceOrbOutput(args: GetSourceOrbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOrbResult>;
/**
 * A collection of arguments for invoking getSourceOrb.
 */
export interface GetSourceOrbOutputArgs {
    sourceId: pulumi.Input<string>;
}
