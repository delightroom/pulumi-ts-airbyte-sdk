import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNetsuite(args: GetSourceNetsuiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNetsuiteResult>;
/**
 * A collection of arguments for invoking getSourceNetsuite.
 */
export interface GetSourceNetsuiteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNetsuite.
 */
export interface GetSourceNetsuiteResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNetsuiteResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNetsuiteOutput(args: GetSourceNetsuiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNetsuiteResult>;
/**
 * A collection of arguments for invoking getSourceNetsuite.
 */
export interface GetSourceNetsuiteOutputArgs {
    sourceId: pulumi.Input<string>;
}
