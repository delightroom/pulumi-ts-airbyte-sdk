import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePostgres(args: GetSourcePostgresArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePostgresResult>;
/**
 * A collection of arguments for invoking getSourcePostgres.
 */
export interface GetSourcePostgresArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePostgres.
 */
export interface GetSourcePostgresResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePostgresResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePostgresOutput(args: GetSourcePostgresOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePostgresResult>;
/**
 * A collection of arguments for invoking getSourcePostgres.
 */
export interface GetSourcePostgresOutputArgs {
    sourceId: pulumi.Input<string>;
}
