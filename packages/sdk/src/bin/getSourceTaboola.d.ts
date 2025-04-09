import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTaboola(args: GetSourceTaboolaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTaboolaResult>;
/**
 * A collection of arguments for invoking getSourceTaboola.
 */
export interface GetSourceTaboolaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTaboola.
 */
export interface GetSourceTaboolaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTaboolaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTaboolaOutput(args: GetSourceTaboolaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTaboolaResult>;
/**
 * A collection of arguments for invoking getSourceTaboola.
 */
export interface GetSourceTaboolaOutputArgs {
    sourceId: pulumi.Input<string>;
}
