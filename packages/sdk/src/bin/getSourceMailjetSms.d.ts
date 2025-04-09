import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailjetSms(args: GetSourceMailjetSmsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailjetSmsResult>;
/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailjetSmsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailjetSmsOutput(args: GetSourceMailjetSmsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailjetSmsResult>;
/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsOutputArgs {
    sourceId: pulumi.Input<string>;
}
