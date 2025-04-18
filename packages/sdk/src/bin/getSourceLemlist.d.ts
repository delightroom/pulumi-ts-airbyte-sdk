import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLemlist(args: GetSourceLemlistArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLemlistResult>;
/**
 * A collection of arguments for invoking getSourceLemlist.
 */
export interface GetSourceLemlistArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLemlist.
 */
export interface GetSourceLemlistResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLemlistResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLemlistOutput(args: GetSourceLemlistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLemlistResult>;
/**
 * A collection of arguments for invoking getSourceLemlist.
 */
export interface GetSourceLemlistOutputArgs {
    sourceId: pulumi.Input<string>;
}
