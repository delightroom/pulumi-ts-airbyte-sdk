import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationElasticsearch(args: GetDestinationElasticsearchArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationElasticsearchResult>;
/**
 * A collection of arguments for invoking getDestinationElasticsearch.
 */
export interface GetDestinationElasticsearchArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationElasticsearch.
 */
export interface GetDestinationElasticsearchResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationElasticsearchResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationElasticsearchOutput(args: GetDestinationElasticsearchOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationElasticsearchResult>;
/**
 * A collection of arguments for invoking getDestinationElasticsearch.
 */
export interface GetDestinationElasticsearchOutputArgs {
    destinationId: pulumi.Input<string>;
}
