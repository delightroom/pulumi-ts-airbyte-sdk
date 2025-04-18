import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDynamodb(args: GetSourceDynamodbArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDynamodbResult>;
/**
 * A collection of arguments for invoking getSourceDynamodb.
 */
export interface GetSourceDynamodbArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDynamodb.
 */
export interface GetSourceDynamodbResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDynamodbResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDynamodbOutput(args: GetSourceDynamodbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDynamodbResult>;
/**
 * A collection of arguments for invoking getSourceDynamodb.
 */
export interface GetSourceDynamodbOutputArgs {
    sourceId: pulumi.Input<string>;
}
