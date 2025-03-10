import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAwsCloudtrail(args: GetSourceAwsCloudtrailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAwsCloudtrailResult>;
/**
 * A collection of arguments for invoking getSourceAwsCloudtrail.
 */
export interface GetSourceAwsCloudtrailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAwsCloudtrail.
 */
export interface GetSourceAwsCloudtrailResult {
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
export declare function getSourceAwsCloudtrailOutput(args: GetSourceAwsCloudtrailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAwsCloudtrailResult>;
/**
 * A collection of arguments for invoking getSourceAwsCloudtrail.
 */
export interface GetSourceAwsCloudtrailOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAwsCloudtrail.d.ts.map