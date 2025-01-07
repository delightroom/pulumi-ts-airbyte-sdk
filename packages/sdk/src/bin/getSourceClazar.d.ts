import * as pulumi from "@pulumi/pulumi";
export declare function getSourceClazar(args: GetSourceClazarArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClazarResult>;
/**
 * A collection of arguments for invoking getSourceClazar.
 */
export interface GetSourceClazarArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClazar.
 */
export interface GetSourceClazarResult {
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
export declare function getSourceClazarOutput(args: GetSourceClazarOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClazarResult>;
/**
 * A collection of arguments for invoking getSourceClazar.
 */
export interface GetSourceClazarOutputArgs {
    sourceId: pulumi.Input<string>;
}
