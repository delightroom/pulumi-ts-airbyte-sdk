import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTheGuardianApi(args: GetSourceTheGuardianApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTheGuardianApiResult>;
/**
 * A collection of arguments for invoking getSourceTheGuardianApi.
 */
export interface GetSourceTheGuardianApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTheGuardianApi.
 */
export interface GetSourceTheGuardianApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTheGuardianApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTheGuardianApiOutput(args: GetSourceTheGuardianApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTheGuardianApiResult>;
/**
 * A collection of arguments for invoking getSourceTheGuardianApi.
 */
export interface GetSourceTheGuardianApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
