import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDbt(args: GetSourceDbtArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDbtResult>;
/**
 * A collection of arguments for invoking getSourceDbt.
 */
export interface GetSourceDbtArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDbt.
 */
export interface GetSourceDbtResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDbtResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDbtOutput(args: GetSourceDbtOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDbtResult>;
/**
 * A collection of arguments for invoking getSourceDbt.
 */
export interface GetSourceDbtOutputArgs {
    sourceId: pulumi.Input<string>;
}
