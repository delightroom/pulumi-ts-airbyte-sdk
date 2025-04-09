import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFlexport(args: GetSourceFlexportArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFlexportResult>;
/**
 * A collection of arguments for invoking getSourceFlexport.
 */
export interface GetSourceFlexportArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFlexport.
 */
export interface GetSourceFlexportResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFlexportResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFlexportOutput(args: GetSourceFlexportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFlexportResult>;
/**
 * A collection of arguments for invoking getSourceFlexport.
 */
export interface GetSourceFlexportOutputArgs {
    sourceId: pulumi.Input<string>;
}
