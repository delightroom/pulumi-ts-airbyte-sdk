import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSenseforce(args: GetSourceSenseforceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSenseforceResult>;
/**
 * A collection of arguments for invoking getSourceSenseforce.
 */
export interface GetSourceSenseforceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSenseforce.
 */
export interface GetSourceSenseforceResult {
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
export declare function getSourceSenseforceOutput(args: GetSourceSenseforceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSenseforceResult>;
/**
 * A collection of arguments for invoking getSourceSenseforce.
 */
export interface GetSourceSenseforceOutputArgs {
    sourceId: pulumi.Input<string>;
}
