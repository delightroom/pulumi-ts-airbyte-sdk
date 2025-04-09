import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceScryfall(args: GetSourceScryfallArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceScryfallResult>;
/**
 * A collection of arguments for invoking getSourceScryfall.
 */
export interface GetSourceScryfallArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceScryfall.
 */
export interface GetSourceScryfallResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceScryfallResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceScryfallOutput(args: GetSourceScryfallOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceScryfallResult>;
/**
 * A collection of arguments for invoking getSourceScryfall.
 */
export interface GetSourceScryfallOutputArgs {
    sourceId: pulumi.Input<string>;
}
