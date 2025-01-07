import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFreshdesk(args: GetSourceFreshdeskArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshdeskResult>;
/**
 * A collection of arguments for invoking getSourceFreshdesk.
 */
export interface GetSourceFreshdeskArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshdesk.
 */
export interface GetSourceFreshdeskResult {
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
export declare function getSourceFreshdeskOutput(args: GetSourceFreshdeskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshdeskResult>;
/**
 * A collection of arguments for invoking getSourceFreshdesk.
 */
export interface GetSourceFreshdeskOutputArgs {
    sourceId: pulumi.Input<string>;
}
