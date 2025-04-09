import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSnapchatMarketing(args: GetSourceSnapchatMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSnapchatMarketingResult>;
/**
 * A collection of arguments for invoking getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSnapchatMarketingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSnapchatMarketingOutput(args: GetSourceSnapchatMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSnapchatMarketingResult>;
/**
 * A collection of arguments for invoking getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
