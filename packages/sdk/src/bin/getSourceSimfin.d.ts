import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSimfin(args: GetSourceSimfinArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSimfinResult>;
/**
 * A collection of arguments for invoking getSourceSimfin.
 */
export interface GetSourceSimfinArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSimfin.
 */
export interface GetSourceSimfinResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSimfinResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSimfinOutput(args: GetSourceSimfinOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSimfinResult>;
/**
 * A collection of arguments for invoking getSourceSimfin.
 */
export interface GetSourceSimfinOutputArgs {
    sourceId: pulumi.Input<string>;
}
