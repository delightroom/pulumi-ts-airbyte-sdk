import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMongodb(args: GetDestinationMongodbArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMongodbResult>;
/**
 * A collection of arguments for invoking getDestinationMongodb.
 */
export interface GetDestinationMongodbArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMongodb.
 */
export interface GetDestinationMongodbResult {
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
    readonly resourceAllocation: outputs.GetDestinationMongodbResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMongodbOutput(args: GetDestinationMongodbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMongodbResult>;
/**
 * A collection of arguments for invoking getDestinationMongodb.
 */
export interface GetDestinationMongodbOutputArgs {
    destinationId: pulumi.Input<string>;
}
