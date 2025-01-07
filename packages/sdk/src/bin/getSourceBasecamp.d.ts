import * as pulumi from "@pulumi/pulumi";
export declare function getSourceBasecamp(args: GetSourceBasecampArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBasecampResult>;
/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBasecamp.
 */
export interface GetSourceBasecampResult {
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
export declare function getSourceBasecampOutput(args: GetSourceBasecampOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBasecampResult>;
/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampOutputArgs {
    sourceId: pulumi.Input<string>;
}
