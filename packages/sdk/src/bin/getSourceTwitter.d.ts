import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTwitter(args: GetSourceTwitterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTwitterResult>;
/**
 * A collection of arguments for invoking getSourceTwitter.
 */
export interface GetSourceTwitterArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTwitter.
 */
export interface GetSourceTwitterResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTwitterResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTwitterOutput(args: GetSourceTwitterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTwitterResult>;
/**
 * A collection of arguments for invoking getSourceTwitter.
 */
export interface GetSourceTwitterOutputArgs {
    sourceId: pulumi.Input<string>;
}
