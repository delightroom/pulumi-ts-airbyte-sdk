import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSmaily(args: GetSourceSmailyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmailyResult>;
/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmaily.
 */
export interface GetSourceSmailyResult {
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
export declare function getSourceSmailyOutput(args: GetSourceSmailyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmailyResult>;
/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyOutputArgs {
    sourceId: pulumi.Input<string>;
}
