import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSonarCloud(args: GetSourceSonarCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSonarCloudResult>;
/**
 * A collection of arguments for invoking getSourceSonarCloud.
 */
export interface GetSourceSonarCloudArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSonarCloud.
 */
export interface GetSourceSonarCloudResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSonarCloudResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSonarCloudOutput(args: GetSourceSonarCloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSonarCloudResult>;
/**
 * A collection of arguments for invoking getSourceSonarCloud.
 */
export interface GetSourceSonarCloudOutputArgs {
    sourceId: pulumi.Input<string>;
}
