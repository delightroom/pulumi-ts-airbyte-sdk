import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWebScrapper(args: GetSourceWebScrapperArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWebScrapperResult>;
/**
 * A collection of arguments for invoking getSourceWebScrapper.
 */
export interface GetSourceWebScrapperArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWebScrapper.
 */
export interface GetSourceWebScrapperResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWebScrapperResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWebScrapperOutput(args: GetSourceWebScrapperOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWebScrapperResult>;
/**
 * A collection of arguments for invoking getSourceWebScrapper.
 */
export interface GetSourceWebScrapperOutputArgs {
    sourceId: pulumi.Input<string>;
}
