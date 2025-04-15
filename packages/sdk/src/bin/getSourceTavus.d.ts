import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTavus(args: GetSourceTavusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTavusResult>;
/**
 * A collection of arguments for invoking getSourceTavus.
 */
export interface GetSourceTavusArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTavus.
 */
export interface GetSourceTavusResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTavusResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTavusOutput(args: GetSourceTavusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTavusResult>;
/**
 * A collection of arguments for invoking getSourceTavus.
 */
export interface GetSourceTavusOutputArgs {
    sourceId: pulumi.Input<string>;
}
