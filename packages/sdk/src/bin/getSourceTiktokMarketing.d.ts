import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTiktokMarketing(args: GetSourceTiktokMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTiktokMarketingResult>;
/**
 * A collection of arguments for invoking getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTiktokMarketingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTiktokMarketingOutput(args: GetSourceTiktokMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTiktokMarketingResult>;
/**
 * A collection of arguments for invoking getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
