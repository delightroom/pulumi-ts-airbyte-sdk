import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBrex(args: GetSourceBrexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBrexResult>;
/**
 * A collection of arguments for invoking getSourceBrex.
 */
export interface GetSourceBrexArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBrex.
 */
export interface GetSourceBrexResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBrexResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBrexOutput(args: GetSourceBrexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBrexResult>;
/**
 * A collection of arguments for invoking getSourceBrex.
 */
export interface GetSourceBrexOutputArgs {
    sourceId: pulumi.Input<string>;
}
