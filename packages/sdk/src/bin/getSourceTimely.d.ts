import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTimely(args: GetSourceTimelyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTimelyResult>;
/**
 * A collection of arguments for invoking getSourceTimely.
 */
export interface GetSourceTimelyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTimely.
 */
export interface GetSourceTimelyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTimelyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTimelyOutput(args: GetSourceTimelyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTimelyResult>;
/**
 * A collection of arguments for invoking getSourceTimely.
 */
export interface GetSourceTimelyOutputArgs {
    sourceId: pulumi.Input<string>;
}
