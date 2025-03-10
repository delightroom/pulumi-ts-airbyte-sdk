import * as pulumi from "@pulumi/pulumi";
export declare function getSourceKlaviyo(args: GetSourceKlaviyoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKlaviyoResult>;
/**
 * A collection of arguments for invoking getSourceKlaviyo.
 */
export interface GetSourceKlaviyoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKlaviyo.
 */
export interface GetSourceKlaviyoResult {
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
export declare function getSourceKlaviyoOutput(args: GetSourceKlaviyoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKlaviyoResult>;
/**
 * A collection of arguments for invoking getSourceKlaviyo.
 */
export interface GetSourceKlaviyoOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceKlaviyo.d.ts.map