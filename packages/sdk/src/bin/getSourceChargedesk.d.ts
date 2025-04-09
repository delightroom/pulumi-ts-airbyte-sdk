import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceChargedesk(args: GetSourceChargedeskArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceChargedeskResult>;
/**
 * A collection of arguments for invoking getSourceChargedesk.
 */
export interface GetSourceChargedeskArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceChargedesk.
 */
export interface GetSourceChargedeskResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceChargedeskResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceChargedeskOutput(args: GetSourceChargedeskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceChargedeskResult>;
/**
 * A collection of arguments for invoking getSourceChargedesk.
 */
export interface GetSourceChargedeskOutputArgs {
    sourceId: pulumi.Input<string>;
}
