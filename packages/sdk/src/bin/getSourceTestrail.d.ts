import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTestrail(args: GetSourceTestrailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTestrailResult>;
/**
 * A collection of arguments for invoking getSourceTestrail.
 */
export interface GetSourceTestrailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTestrail.
 */
export interface GetSourceTestrailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTestrailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTestrailOutput(args: GetSourceTestrailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTestrailResult>;
/**
 * A collection of arguments for invoking getSourceTestrail.
 */
export interface GetSourceTestrailOutputArgs {
    sourceId: pulumi.Input<string>;
}
