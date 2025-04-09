import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCimis(args: GetSourceCimisArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCimisResult>;
/**
 * A collection of arguments for invoking getSourceCimis.
 */
export interface GetSourceCimisArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCimis.
 */
export interface GetSourceCimisResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCimisResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCimisOutput(args: GetSourceCimisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCimisResult>;
/**
 * A collection of arguments for invoking getSourceCimis.
 */
export interface GetSourceCimisOutputArgs {
    sourceId: pulumi.Input<string>;
}
