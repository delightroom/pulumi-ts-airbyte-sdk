import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceConfluence(args: GetSourceConfluenceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConfluenceResult>;
/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConfluence.
 */
export interface GetSourceConfluenceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConfluenceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceConfluenceOutput(args: GetSourceConfluenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConfluenceResult>;
/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceOutputArgs {
    sourceId: pulumi.Input<string>;
}
