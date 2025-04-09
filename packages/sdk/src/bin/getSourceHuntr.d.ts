import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHuntr(args: GetSourceHuntrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHuntrResult>;
/**
 * A collection of arguments for invoking getSourceHuntr.
 */
export interface GetSourceHuntrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHuntr.
 */
export interface GetSourceHuntrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHuntrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHuntrOutput(args: GetSourceHuntrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHuntrResult>;
/**
 * A collection of arguments for invoking getSourceHuntr.
 */
export interface GetSourceHuntrOutputArgs {
    sourceId: pulumi.Input<string>;
}
