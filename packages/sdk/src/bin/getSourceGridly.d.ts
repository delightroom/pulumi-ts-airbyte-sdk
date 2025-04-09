import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGridly(args: GetSourceGridlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGridlyResult>;
/**
 * A collection of arguments for invoking getSourceGridly.
 */
export interface GetSourceGridlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGridly.
 */
export interface GetSourceGridlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGridlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGridlyOutput(args: GetSourceGridlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGridlyResult>;
/**
 * A collection of arguments for invoking getSourceGridly.
 */
export interface GetSourceGridlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
