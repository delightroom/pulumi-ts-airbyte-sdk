import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSimplesat(args: GetSourceSimplesatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSimplesatResult>;
/**
 * A collection of arguments for invoking getSourceSimplesat.
 */
export interface GetSourceSimplesatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSimplesat.
 */
export interface GetSourceSimplesatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSimplesatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSimplesatOutput(args: GetSourceSimplesatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSimplesatResult>;
/**
 * A collection of arguments for invoking getSourceSimplesat.
 */
export interface GetSourceSimplesatOutputArgs {
    sourceId: pulumi.Input<string>;
}
