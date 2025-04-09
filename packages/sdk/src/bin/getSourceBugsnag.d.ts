import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBugsnag(args: GetSourceBugsnagArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBugsnagResult>;
/**
 * A collection of arguments for invoking getSourceBugsnag.
 */
export interface GetSourceBugsnagArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBugsnag.
 */
export interface GetSourceBugsnagResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBugsnagResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBugsnagOutput(args: GetSourceBugsnagOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBugsnagResult>;
/**
 * A collection of arguments for invoking getSourceBugsnag.
 */
export interface GetSourceBugsnagOutputArgs {
    sourceId: pulumi.Input<string>;
}
