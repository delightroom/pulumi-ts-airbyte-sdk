import * as pulumi from "@pulumi/pulumi";
export declare function getSourceChargebee(args: GetSourceChargebeeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceChargebeeResult>;
/**
 * A collection of arguments for invoking getSourceChargebee.
 */
export interface GetSourceChargebeeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceChargebee.
 */
export interface GetSourceChargebeeResult {
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
export declare function getSourceChargebeeOutput(args: GetSourceChargebeeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceChargebeeResult>;
/**
 * A collection of arguments for invoking getSourceChargebee.
 */
export interface GetSourceChargebeeOutputArgs {
    sourceId: pulumi.Input<string>;
}
