import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYounium(args: GetSourceYouniumArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYouniumResult>;
/**
 * A collection of arguments for invoking getSourceYounium.
 */
export interface GetSourceYouniumArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYounium.
 */
export interface GetSourceYouniumResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYouniumResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYouniumOutput(args: GetSourceYouniumOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYouniumResult>;
/**
 * A collection of arguments for invoking getSourceYounium.
 */
export interface GetSourceYouniumOutputArgs {
    sourceId: pulumi.Input<string>;
}
