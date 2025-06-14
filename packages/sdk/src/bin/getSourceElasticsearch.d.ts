import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceElasticsearch(args: GetSourceElasticsearchArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceElasticsearchResult>;
/**
 * A collection of arguments for invoking getSourceElasticsearch.
 */
export interface GetSourceElasticsearchArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceElasticsearch.
 */
export interface GetSourceElasticsearchResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceElasticsearchResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceElasticsearchOutput(args: GetSourceElasticsearchOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceElasticsearchResult>;
/**
 * A collection of arguments for invoking getSourceElasticsearch.
 */
export interface GetSourceElasticsearchOutputArgs {
    sourceId: pulumi.Input<string>;
}
