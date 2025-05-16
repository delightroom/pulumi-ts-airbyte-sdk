import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAwinAdvertiser(args: GetSourceAwinAdvertiserArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAwinAdvertiserResult>;
/**
 * A collection of arguments for invoking getSourceAwinAdvertiser.
 */
export interface GetSourceAwinAdvertiserArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAwinAdvertiser.
 */
export interface GetSourceAwinAdvertiserResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAwinAdvertiserResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAwinAdvertiserOutput(args: GetSourceAwinAdvertiserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAwinAdvertiserResult>;
/**
 * A collection of arguments for invoking getSourceAwinAdvertiser.
 */
export interface GetSourceAwinAdvertiserOutputArgs {
    sourceId: pulumi.Input<string>;
}
