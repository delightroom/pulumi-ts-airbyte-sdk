import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePendo(args: GetSourcePendoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePendoResult>;
/**
 * A collection of arguments for invoking getSourcePendo.
 */
export interface GetSourcePendoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePendo.
 */
export interface GetSourcePendoResult {
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
export declare function getSourcePendoOutput(args: GetSourcePendoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePendoResult>;
/**
 * A collection of arguments for invoking getSourcePendo.
 */
export interface GetSourcePendoOutputArgs {
    sourceId: pulumi.Input<string>;
}
