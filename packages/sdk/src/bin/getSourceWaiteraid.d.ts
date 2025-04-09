import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWaiteraid(args: GetSourceWaiteraidArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWaiteraidResult>;
/**
 * A collection of arguments for invoking getSourceWaiteraid.
 */
export interface GetSourceWaiteraidArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWaiteraid.
 */
export interface GetSourceWaiteraidResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWaiteraidResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWaiteraidOutput(args: GetSourceWaiteraidOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWaiteraidResult>;
/**
 * A collection of arguments for invoking getSourceWaiteraid.
 */
export interface GetSourceWaiteraidOutputArgs {
    sourceId: pulumi.Input<string>;
}
