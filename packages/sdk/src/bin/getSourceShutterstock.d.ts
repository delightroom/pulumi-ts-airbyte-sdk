import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceShutterstock(args: GetSourceShutterstockArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShutterstockResult>;
/**
 * A collection of arguments for invoking getSourceShutterstock.
 */
export interface GetSourceShutterstockArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShutterstock.
 */
export interface GetSourceShutterstockResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceShutterstockResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceShutterstockOutput(args: GetSourceShutterstockOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShutterstockResult>;
/**
 * A collection of arguments for invoking getSourceShutterstock.
 */
export interface GetSourceShutterstockOutputArgs {
    sourceId: pulumi.Input<string>;
}
