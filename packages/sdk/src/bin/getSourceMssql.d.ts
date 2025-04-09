import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMssql(args: GetSourceMssqlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMssqlResult>;
/**
 * A collection of arguments for invoking getSourceMssql.
 */
export interface GetSourceMssqlArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMssql.
 */
export interface GetSourceMssqlResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMssqlResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMssqlOutput(args: GetSourceMssqlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMssqlResult>;
/**
 * A collection of arguments for invoking getSourceMssql.
 */
export interface GetSourceMssqlOutputArgs {
    sourceId: pulumi.Input<string>;
}
