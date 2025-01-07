import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAuth0(args: GetSourceAuth0Args, opts?: pulumi.InvokeOptions): Promise<GetSourceAuth0Result>;
/**
 * A collection of arguments for invoking getSourceAuth0.
 */
export interface GetSourceAuth0Args {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAuth0.
 */
export interface GetSourceAuth0Result {
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
export declare function getSourceAuth0Output(args: GetSourceAuth0OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAuth0Result>;
/**
 * A collection of arguments for invoking getSourceAuth0.
 */
export interface GetSourceAuth0OutputArgs {
    sourceId: pulumi.Input<string>;
}
