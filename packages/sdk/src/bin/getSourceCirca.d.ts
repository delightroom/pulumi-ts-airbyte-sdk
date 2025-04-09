import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCirca(args: GetSourceCircaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCircaResult>;
/**
 * A collection of arguments for invoking getSourceCirca.
 */
export interface GetSourceCircaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCirca.
 */
export interface GetSourceCircaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCircaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCircaOutput(args: GetSourceCircaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCircaResult>;
/**
 * A collection of arguments for invoking getSourceCirca.
 */
export interface GetSourceCircaOutputArgs {
    sourceId: pulumi.Input<string>;
}
