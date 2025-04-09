import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCalCom(args: GetSourceCalComArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCalComResult>;
/**
 * A collection of arguments for invoking getSourceCalCom.
 */
export interface GetSourceCalComArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCalCom.
 */
export interface GetSourceCalComResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCalComResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCalComOutput(args: GetSourceCalComOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCalComResult>;
/**
 * A collection of arguments for invoking getSourceCalCom.
 */
export interface GetSourceCalComOutputArgs {
    sourceId: pulumi.Input<string>;
}
