import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKeka(args: GetSourceKekaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKekaResult>;
/**
 * A collection of arguments for invoking getSourceKeka.
 */
export interface GetSourceKekaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKeka.
 */
export interface GetSourceKekaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKekaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKekaOutput(args: GetSourceKekaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKekaResult>;
/**
 * A collection of arguments for invoking getSourceKeka.
 */
export interface GetSourceKekaOutputArgs {
    sourceId: pulumi.Input<string>;
}
