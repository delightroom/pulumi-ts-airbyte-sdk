import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftDataverse(args: GetSourceMicrosoftDataverseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftDataverseResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftDataverseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftDataverseOutput(args: GetSourceMicrosoftDataverseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftDataverseResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseOutputArgs {
    sourceId: pulumi.Input<string>;
}
