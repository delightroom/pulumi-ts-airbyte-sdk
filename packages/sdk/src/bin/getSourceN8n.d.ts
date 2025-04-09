import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceN8n(args: GetSourceN8nArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceN8nResult>;
/**
 * A collection of arguments for invoking getSourceN8n.
 */
export interface GetSourceN8nArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceN8n.
 */
export interface GetSourceN8nResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceN8nResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceN8nOutput(args: GetSourceN8nOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceN8nResult>;
/**
 * A collection of arguments for invoking getSourceN8n.
 */
export interface GetSourceN8nOutputArgs {
    sourceId: pulumi.Input<string>;
}
