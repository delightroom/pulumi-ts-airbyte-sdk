import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBeamer(args: GetSourceBeamerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBeamerResult>;
/**
 * A collection of arguments for invoking getSourceBeamer.
 */
export interface GetSourceBeamerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBeamer.
 */
export interface GetSourceBeamerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBeamerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBeamerOutput(args: GetSourceBeamerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBeamerResult>;
/**
 * A collection of arguments for invoking getSourceBeamer.
 */
export interface GetSourceBeamerOutputArgs {
    sourceId: pulumi.Input<string>;
}
