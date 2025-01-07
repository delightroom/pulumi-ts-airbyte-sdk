import * as pulumi from "@pulumi/pulumi";
export declare function getSourceChameleon(args: GetSourceChameleonArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceChameleonResult>;
/**
 * A collection of arguments for invoking getSourceChameleon.
 */
export interface GetSourceChameleonArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceChameleon.
 */
export interface GetSourceChameleonResult {
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
export declare function getSourceChameleonOutput(args: GetSourceChameleonOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceChameleonResult>;
/**
 * A collection of arguments for invoking getSourceChameleon.
 */
export interface GetSourceChameleonOutputArgs {
    sourceId: pulumi.Input<string>;
}
