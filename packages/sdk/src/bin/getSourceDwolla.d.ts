import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDwolla(args: GetSourceDwollaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDwollaResult>;
/**
 * A collection of arguments for invoking getSourceDwolla.
 */
export interface GetSourceDwollaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDwolla.
 */
export interface GetSourceDwollaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDwollaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDwollaOutput(args: GetSourceDwollaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDwollaResult>;
/**
 * A collection of arguments for invoking getSourceDwolla.
 */
export interface GetSourceDwollaOutputArgs {
    sourceId: pulumi.Input<string>;
}
