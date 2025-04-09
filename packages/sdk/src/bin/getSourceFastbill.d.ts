import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFastbill(args: GetSourceFastbillArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFastbillResult>;
/**
 * A collection of arguments for invoking getSourceFastbill.
 */
export interface GetSourceFastbillArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFastbill.
 */
export interface GetSourceFastbillResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFastbillResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFastbillOutput(args: GetSourceFastbillOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFastbillResult>;
/**
 * A collection of arguments for invoking getSourceFastbill.
 */
export interface GetSourceFastbillOutputArgs {
    sourceId: pulumi.Input<string>;
}
