import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreshcaller(args: GetSourceFreshcallerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshcallerResult>;
/**
 * A collection of arguments for invoking getSourceFreshcaller.
 */
export interface GetSourceFreshcallerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshcaller.
 */
export interface GetSourceFreshcallerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreshcallerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreshcallerOutput(args: GetSourceFreshcallerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshcallerResult>;
/**
 * A collection of arguments for invoking getSourceFreshcaller.
 */
export interface GetSourceFreshcallerOutputArgs {
    sourceId: pulumi.Input<string>;
}
