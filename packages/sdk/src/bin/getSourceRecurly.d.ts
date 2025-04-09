import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRecurly(args: GetSourceRecurlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRecurlyResult>;
/**
 * A collection of arguments for invoking getSourceRecurly.
 */
export interface GetSourceRecurlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRecurly.
 */
export interface GetSourceRecurlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRecurlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRecurlyOutput(args: GetSourceRecurlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRecurlyResult>;
/**
 * A collection of arguments for invoking getSourceRecurly.
 */
export interface GetSourceRecurlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
