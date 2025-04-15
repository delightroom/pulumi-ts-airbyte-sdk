import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSource100ms(args: GetSource100msArgs, opts?: pulumi.InvokeOptions): Promise<GetSource100msResult>;
/**
 * A collection of arguments for invoking getSource100ms.
 */
export interface GetSource100msArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSource100ms.
 */
export interface GetSource100msResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSource100msResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSource100msOutput(args: GetSource100msOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSource100msResult>;
/**
 * A collection of arguments for invoking getSource100ms.
 */
export interface GetSource100msOutputArgs {
    sourceId: pulumi.Input<string>;
}
