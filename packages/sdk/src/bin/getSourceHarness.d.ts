import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHarness(args: GetSourceHarnessArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHarnessResult>;
/**
 * A collection of arguments for invoking getSourceHarness.
 */
export interface GetSourceHarnessArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHarness.
 */
export interface GetSourceHarnessResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHarnessResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHarnessOutput(args: GetSourceHarnessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHarnessResult>;
/**
 * A collection of arguments for invoking getSourceHarness.
 */
export interface GetSourceHarnessOutputArgs {
    sourceId: pulumi.Input<string>;
}
