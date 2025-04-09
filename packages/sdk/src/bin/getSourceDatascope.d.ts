import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDatascope(args: GetSourceDatascopeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDatascopeResult>;
/**
 * A collection of arguments for invoking getSourceDatascope.
 */
export interface GetSourceDatascopeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDatascope.
 */
export interface GetSourceDatascopeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDatascopeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDatascopeOutput(args: GetSourceDatascopeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDatascopeResult>;
/**
 * A collection of arguments for invoking getSourceDatascope.
 */
export interface GetSourceDatascopeOutputArgs {
    sourceId: pulumi.Input<string>;
}
