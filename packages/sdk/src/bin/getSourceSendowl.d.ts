import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSendowl(args: GetSourceSendowlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendowlResult>;
/**
 * A collection of arguments for invoking getSourceSendowl.
 */
export interface GetSourceSendowlArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSendowl.
 */
export interface GetSourceSendowlResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSendowlResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSendowlOutput(args: GetSourceSendowlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSendowlResult>;
/**
 * A collection of arguments for invoking getSourceSendowl.
 */
export interface GetSourceSendowlOutputArgs {
    sourceId: pulumi.Input<string>;
}
