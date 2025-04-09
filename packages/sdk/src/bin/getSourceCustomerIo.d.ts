import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCustomerIo(args: GetSourceCustomerIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCustomerIoResult>;
/**
 * A collection of arguments for invoking getSourceCustomerIo.
 */
export interface GetSourceCustomerIoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCustomerIo.
 */
export interface GetSourceCustomerIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCustomerIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCustomerIoOutput(args: GetSourceCustomerIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCustomerIoResult>;
/**
 * A collection of arguments for invoking getSourceCustomerIo.
 */
export interface GetSourceCustomerIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
