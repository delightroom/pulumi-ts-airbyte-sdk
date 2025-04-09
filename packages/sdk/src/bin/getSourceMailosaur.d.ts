import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailosaur(args: GetSourceMailosaurArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailosaurResult>;
/**
 * A collection of arguments for invoking getSourceMailosaur.
 */
export interface GetSourceMailosaurArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailosaur.
 */
export interface GetSourceMailosaurResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailosaurResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailosaurOutput(args: GetSourceMailosaurOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailosaurResult>;
/**
 * A collection of arguments for invoking getSourceMailosaur.
 */
export interface GetSourceMailosaurOutputArgs {
    sourceId: pulumi.Input<string>;
}
