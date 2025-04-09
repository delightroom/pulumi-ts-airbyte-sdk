import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreshservice(args: GetSourceFreshserviceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshserviceResult>;
/**
 * A collection of arguments for invoking getSourceFreshservice.
 */
export interface GetSourceFreshserviceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshservice.
 */
export interface GetSourceFreshserviceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreshserviceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreshserviceOutput(args: GetSourceFreshserviceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshserviceResult>;
/**
 * A collection of arguments for invoking getSourceFreshservice.
 */
export interface GetSourceFreshserviceOutputArgs {
    sourceId: pulumi.Input<string>;
}
