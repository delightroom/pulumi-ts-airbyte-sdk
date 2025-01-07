import * as pulumi from "@pulumi/pulumi";
export declare function getSourceOrbit(args: GetSourceOrbitArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOrbitResult>;
/**
 * A collection of arguments for invoking getSourceOrbit.
 */
export interface GetSourceOrbitArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOrbit.
 */
export interface GetSourceOrbitResult {
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
export declare function getSourceOrbitOutput(args: GetSourceOrbitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOrbitResult>;
/**
 * A collection of arguments for invoking getSourceOrbit.
 */
export interface GetSourceOrbitOutputArgs {
    sourceId: pulumi.Input<string>;
}
