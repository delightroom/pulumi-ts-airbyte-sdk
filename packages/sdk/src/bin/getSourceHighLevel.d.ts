import * as pulumi from "@pulumi/pulumi";
export declare function getSourceHighLevel(args: GetSourceHighLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHighLevelResult>;
/**
 * A collection of arguments for invoking getSourceHighLevel.
 */
export interface GetSourceHighLevelArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHighLevel.
 */
export interface GetSourceHighLevelResult {
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
export declare function getSourceHighLevelOutput(args: GetSourceHighLevelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHighLevelResult>;
/**
 * A collection of arguments for invoking getSourceHighLevel.
 */
export interface GetSourceHighLevelOutputArgs {
    sourceId: pulumi.Input<string>;
}
