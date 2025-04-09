import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWhenIWork(args: GetSourceWhenIWorkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWhenIWorkResult>;
/**
 * A collection of arguments for invoking getSourceWhenIWork.
 */
export interface GetSourceWhenIWorkArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWhenIWork.
 */
export interface GetSourceWhenIWorkResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWhenIWorkResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWhenIWorkOutput(args: GetSourceWhenIWorkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWhenIWorkResult>;
/**
 * A collection of arguments for invoking getSourceWhenIWork.
 */
export interface GetSourceWhenIWorkOutputArgs {
    sourceId: pulumi.Input<string>;
}
