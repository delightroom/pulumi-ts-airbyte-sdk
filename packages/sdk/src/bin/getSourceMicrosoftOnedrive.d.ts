import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftOnedrive(args: GetSourceMicrosoftOnedriveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftOnedriveResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftOnedrive.
 */
export interface GetSourceMicrosoftOnedriveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftOnedrive.
 */
export interface GetSourceMicrosoftOnedriveResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftOnedriveResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftOnedriveOutput(args: GetSourceMicrosoftOnedriveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftOnedriveResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftOnedrive.
 */
export interface GetSourceMicrosoftOnedriveOutputArgs {
    sourceId: pulumi.Input<string>;
}
