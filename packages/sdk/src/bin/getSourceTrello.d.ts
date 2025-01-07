import * as pulumi from "@pulumi/pulumi";
export declare function getSourceTrello(args: GetSourceTrelloArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTrelloResult>;
/**
 * A collection of arguments for invoking getSourceTrello.
 */
export interface GetSourceTrelloArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTrello.
 */
export interface GetSourceTrelloResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTrelloOutput(args: GetSourceTrelloOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTrelloResult>;
/**
 * A collection of arguments for invoking getSourceTrello.
 */
export interface GetSourceTrelloOutputArgs {
    sourceId: pulumi.Input<string>;
}
