import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationS3DataLake(args: GetDestinationS3DataLakeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationS3DataLakeResult>;
/**
 * A collection of arguments for invoking getDestinationS3DataLake.
 */
export interface GetDestinationS3DataLakeArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationS3DataLake.
 */
export interface GetDestinationS3DataLakeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationS3DataLakeResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationS3DataLakeOutput(args: GetDestinationS3DataLakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationS3DataLakeResult>;
/**
 * A collection of arguments for invoking getDestinationS3DataLake.
 */
export interface GetDestinationS3DataLakeOutputArgs {
    destinationId: pulumi.Input<string>;
}
