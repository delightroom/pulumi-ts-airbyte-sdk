import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMixpanel(args: GetSourceMixpanelArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMixpanelResult>;
/**
 * A collection of arguments for invoking getSourceMixpanel.
 */
export interface GetSourceMixpanelArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMixpanel.
 */
export interface GetSourceMixpanelResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMixpanelResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMixpanelOutput(args: GetSourceMixpanelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMixpanelResult>;
/**
 * A collection of arguments for invoking getSourceMixpanel.
 */
export interface GetSourceMixpanelOutputArgs {
    sourceId: pulumi.Input<string>;
}
