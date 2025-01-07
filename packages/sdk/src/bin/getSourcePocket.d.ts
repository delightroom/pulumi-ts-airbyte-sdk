import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePocket(args: GetSourcePocketArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePocketResult>;
/**
 * A collection of arguments for invoking getSourcePocket.
 */
export interface GetSourcePocketArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePocket.
 */
export interface GetSourcePocketResult {
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
export declare function getSourcePocketOutput(args: GetSourcePocketOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePocketResult>;
/**
 * A collection of arguments for invoking getSourcePocket.
 */
export interface GetSourcePocketOutputArgs {
    sourceId: pulumi.Input<string>;
}
