import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFlexmail(args: GetSourceFlexmailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFlexmailResult>;
/**
 * A collection of arguments for invoking getSourceFlexmail.
 */
export interface GetSourceFlexmailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFlexmail.
 */
export interface GetSourceFlexmailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFlexmailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFlexmailOutput(args: GetSourceFlexmailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFlexmailResult>;
/**
 * A collection of arguments for invoking getSourceFlexmail.
 */
export interface GetSourceFlexmailOutputArgs {
    sourceId: pulumi.Input<string>;
}
