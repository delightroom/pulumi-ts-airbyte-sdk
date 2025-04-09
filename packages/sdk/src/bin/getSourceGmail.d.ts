import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGmail(args: GetSourceGmailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGmailResult>;
/**
 * A collection of arguments for invoking getSourceGmail.
 */
export interface GetSourceGmailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGmail.
 */
export interface GetSourceGmailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGmailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGmailOutput(args: GetSourceGmailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGmailResult>;
/**
 * A collection of arguments for invoking getSourceGmail.
 */
export interface GetSourceGmailOutputArgs {
    sourceId: pulumi.Input<string>;
}
