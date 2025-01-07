import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFauna(args: GetSourceFaunaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFaunaResult>;
/**
 * A collection of arguments for invoking getSourceFauna.
 */
export interface GetSourceFaunaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFauna.
 */
export interface GetSourceFaunaResult {
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
export declare function getSourceFaunaOutput(args: GetSourceFaunaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFaunaResult>;
/**
 * A collection of arguments for invoking getSourceFauna.
 */
export interface GetSourceFaunaOutputArgs {
    sourceId: pulumi.Input<string>;
}
