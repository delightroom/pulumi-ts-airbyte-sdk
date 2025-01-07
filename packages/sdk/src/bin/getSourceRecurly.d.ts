import * as pulumi from "@pulumi/pulumi";
export declare function getSourceRecurly(args: GetSourceRecurlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRecurlyResult>;
/**
 * A collection of arguments for invoking getSourceRecurly.
 */
export interface GetSourceRecurlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRecurly.
 */
export interface GetSourceRecurlyResult {
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
export declare function getSourceRecurlyOutput(args: GetSourceRecurlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRecurlyResult>;
/**
 * A collection of arguments for invoking getSourceRecurly.
 */
export interface GetSourceRecurlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
