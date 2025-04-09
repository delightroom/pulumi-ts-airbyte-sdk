import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBreezometer(args: GetSourceBreezometerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBreezometerResult>;
/**
 * A collection of arguments for invoking getSourceBreezometer.
 */
export interface GetSourceBreezometerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBreezometer.
 */
export interface GetSourceBreezometerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBreezometerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBreezometerOutput(args: GetSourceBreezometerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBreezometerResult>;
/**
 * A collection of arguments for invoking getSourceBreezometer.
 */
export interface GetSourceBreezometerOutputArgs {
    sourceId: pulumi.Input<string>;
}
