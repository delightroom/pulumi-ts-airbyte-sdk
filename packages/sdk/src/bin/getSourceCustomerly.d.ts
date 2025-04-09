import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCustomerly(args: GetSourceCustomerlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCustomerlyResult>;
/**
 * A collection of arguments for invoking getSourceCustomerly.
 */
export interface GetSourceCustomerlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCustomerly.
 */
export interface GetSourceCustomerlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCustomerlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCustomerlyOutput(args: GetSourceCustomerlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCustomerlyResult>;
/**
 * A collection of arguments for invoking getSourceCustomerly.
 */
export interface GetSourceCustomerlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
