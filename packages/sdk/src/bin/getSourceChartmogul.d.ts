import * as pulumi from "@pulumi/pulumi";
export declare function getSourceChartmogul(args: GetSourceChartmogulArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceChartmogulResult>;
/**
 * A collection of arguments for invoking getSourceChartmogul.
 */
export interface GetSourceChartmogulArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceChartmogul.
 */
export interface GetSourceChartmogulResult {
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
export declare function getSourceChartmogulOutput(args: GetSourceChartmogulOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceChartmogulResult>;
/**
 * A collection of arguments for invoking getSourceChartmogul.
 */
export interface GetSourceChartmogulOutputArgs {
    sourceId: pulumi.Input<string>;
}
