import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailjetMail(args: GetSourceMailjetMailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailjetMailResult>;
/**
 * A collection of arguments for invoking getSourceMailjetMail.
 */
export interface GetSourceMailjetMailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailjetMail.
 */
export interface GetSourceMailjetMailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailjetMailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailjetMailOutput(args: GetSourceMailjetMailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailjetMailResult>;
/**
 * A collection of arguments for invoking getSourceMailjetMail.
 */
export interface GetSourceMailjetMailOutputArgs {
    sourceId: pulumi.Input<string>;
}
