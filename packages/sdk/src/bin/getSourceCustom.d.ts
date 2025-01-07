import * as pulumi from "@pulumi/pulumi";
export declare function getSourceCustom(args: GetSourceCustomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCustomResult>;
/**
 * A collection of arguments for invoking getSourceCustom.
 */
export interface GetSourceCustomArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCustom.
 */
export interface GetSourceCustomResult {
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
export declare function getSourceCustomOutput(args: GetSourceCustomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCustomResult>;
/**
 * A collection of arguments for invoking getSourceCustom.
 */
export interface GetSourceCustomOutputArgs {
    sourceId: pulumi.Input<string>;
}
