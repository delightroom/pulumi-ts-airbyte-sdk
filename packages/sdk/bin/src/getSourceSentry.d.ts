import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSentry(args: GetSourceSentryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSentryResult>;
/**
 * A collection of arguments for invoking getSourceSentry.
 */
export interface GetSourceSentryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSentry.
 */
export interface GetSourceSentryResult {
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
export declare function getSourceSentryOutput(args: GetSourceSentryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSentryResult>;
/**
 * A collection of arguments for invoking getSourceSentry.
 */
export interface GetSourceSentryOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSentry.d.ts.map