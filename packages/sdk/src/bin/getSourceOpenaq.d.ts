import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpenaq(args: GetSourceOpenaqArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpenaqResult>;
/**
 * A collection of arguments for invoking getSourceOpenaq.
 */
export interface GetSourceOpenaqArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpenaq.
 */
export interface GetSourceOpenaqResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpenaqResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpenaqOutput(args: GetSourceOpenaqOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpenaqResult>;
/**
 * A collection of arguments for invoking getSourceOpenaq.
 */
export interface GetSourceOpenaqOutputArgs {
    sourceId: pulumi.Input<string>;
}
