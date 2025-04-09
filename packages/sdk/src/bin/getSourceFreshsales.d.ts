import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreshsales(args: GetSourceFreshsalesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshsalesResult>;
/**
 * A collection of arguments for invoking getSourceFreshsales.
 */
export interface GetSourceFreshsalesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshsales.
 */
export interface GetSourceFreshsalesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreshsalesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreshsalesOutput(args: GetSourceFreshsalesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshsalesResult>;
/**
 * A collection of arguments for invoking getSourceFreshsales.
 */
export interface GetSourceFreshsalesOutputArgs {
    sourceId: pulumi.Input<string>;
}
