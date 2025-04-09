import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHibob(args: GetSourceHibobArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHibobResult>;
/**
 * A collection of arguments for invoking getSourceHibob.
 */
export interface GetSourceHibobArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHibob.
 */
export interface GetSourceHibobResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHibobResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHibobOutput(args: GetSourceHibobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHibobResult>;
/**
 * A collection of arguments for invoking getSourceHibob.
 */
export interface GetSourceHibobOutputArgs {
    sourceId: pulumi.Input<string>;
}
