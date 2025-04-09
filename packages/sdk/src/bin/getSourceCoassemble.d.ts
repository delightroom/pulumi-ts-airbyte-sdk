import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCoassemble(args: GetSourceCoassembleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCoassembleResult>;
/**
 * A collection of arguments for invoking getSourceCoassemble.
 */
export interface GetSourceCoassembleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCoassemble.
 */
export interface GetSourceCoassembleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCoassembleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCoassembleOutput(args: GetSourceCoassembleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCoassembleResult>;
/**
 * A collection of arguments for invoking getSourceCoassemble.
 */
export interface GetSourceCoassembleOutputArgs {
    sourceId: pulumi.Input<string>;
}
