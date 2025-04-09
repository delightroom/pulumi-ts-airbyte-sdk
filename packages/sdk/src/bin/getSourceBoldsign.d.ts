import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBoldsign(args: GetSourceBoldsignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBoldsignResult>;
/**
 * A collection of arguments for invoking getSourceBoldsign.
 */
export interface GetSourceBoldsignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBoldsign.
 */
export interface GetSourceBoldsignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBoldsignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBoldsignOutput(args: GetSourceBoldsignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBoldsignResult>;
/**
 * A collection of arguments for invoking getSourceBoldsign.
 */
export interface GetSourceBoldsignOutputArgs {
    sourceId: pulumi.Input<string>;
}
