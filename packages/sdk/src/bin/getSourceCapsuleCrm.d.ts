import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCapsuleCrm(args: GetSourceCapsuleCrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCapsuleCrmResult>;
/**
 * A collection of arguments for invoking getSourceCapsuleCrm.
 */
export interface GetSourceCapsuleCrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCapsuleCrm.
 */
export interface GetSourceCapsuleCrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCapsuleCrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCapsuleCrmOutput(args: GetSourceCapsuleCrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCapsuleCrmResult>;
/**
 * A collection of arguments for invoking getSourceCapsuleCrm.
 */
export interface GetSourceCapsuleCrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
