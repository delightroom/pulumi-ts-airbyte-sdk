import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftSharepoint(args: GetSourceMicrosoftSharepointArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftSharepointResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftSharepoint.
 */
export interface GetSourceMicrosoftSharepointArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftSharepoint.
 */
export interface GetSourceMicrosoftSharepointResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftSharepointResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftSharepointOutput(args: GetSourceMicrosoftSharepointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftSharepointResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftSharepoint.
 */
export interface GetSourceMicrosoftSharepointOutputArgs {
    sourceId: pulumi.Input<string>;
}
