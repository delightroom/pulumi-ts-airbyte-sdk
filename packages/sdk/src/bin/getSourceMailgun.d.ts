import * as pulumi from "@pulumi/pulumi";
export declare function getSourceMailgun(args: GetSourceMailgunArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailgunResult>;
/**
 * A collection of arguments for invoking getSourceMailgun.
 */
export interface GetSourceMailgunArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailgun.
 */
export interface GetSourceMailgunResult {
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
export declare function getSourceMailgunOutput(args: GetSourceMailgunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailgunResult>;
/**
 * A collection of arguments for invoking getSourceMailgun.
 */
export interface GetSourceMailgunOutputArgs {
    sourceId: pulumi.Input<string>;
}
