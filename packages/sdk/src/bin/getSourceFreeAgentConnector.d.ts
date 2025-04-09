import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreeAgentConnector(args: GetSourceFreeAgentConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreeAgentConnectorResult>;
/**
 * A collection of arguments for invoking getSourceFreeAgentConnector.
 */
export interface GetSourceFreeAgentConnectorArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreeAgentConnector.
 */
export interface GetSourceFreeAgentConnectorResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreeAgentConnectorResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreeAgentConnectorOutput(args: GetSourceFreeAgentConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreeAgentConnectorResult>;
/**
 * A collection of arguments for invoking getSourceFreeAgentConnector.
 */
export interface GetSourceFreeAgentConnectorOutputArgs {
    sourceId: pulumi.Input<string>;
}
