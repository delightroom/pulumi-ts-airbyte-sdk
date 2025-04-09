import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHardcodedRecords(args: GetSourceHardcodedRecordsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHardcodedRecordsResult>;
/**
 * A collection of arguments for invoking getSourceHardcodedRecords.
 */
export interface GetSourceHardcodedRecordsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHardcodedRecords.
 */
export interface GetSourceHardcodedRecordsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHardcodedRecordsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHardcodedRecordsOutput(args: GetSourceHardcodedRecordsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHardcodedRecordsResult>;
/**
 * A collection of arguments for invoking getSourceHardcodedRecords.
 */
export interface GetSourceHardcodedRecordsOutputArgs {
    sourceId: pulumi.Input<string>;
}
