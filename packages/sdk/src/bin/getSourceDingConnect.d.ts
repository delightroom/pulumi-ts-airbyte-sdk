import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDingConnect(args: GetSourceDingConnectArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDingConnectResult>;
/**
 * A collection of arguments for invoking getSourceDingConnect.
 */
export interface GetSourceDingConnectArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDingConnect.
 */
export interface GetSourceDingConnectResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDingConnectResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDingConnectOutput(args: GetSourceDingConnectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDingConnectResult>;
/**
 * A collection of arguments for invoking getSourceDingConnect.
 */
export interface GetSourceDingConnectOutputArgs {
    sourceId: pulumi.Input<string>;
}
