import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceShipstation(args: GetSourceShipstationArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShipstationResult>;
/**
 * A collection of arguments for invoking getSourceShipstation.
 */
export interface GetSourceShipstationArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShipstation.
 */
export interface GetSourceShipstationResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceShipstationResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceShipstationOutput(args: GetSourceShipstationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShipstationResult>;
/**
 * A collection of arguments for invoking getSourceShipstation.
 */
export interface GetSourceShipstationOutputArgs {
    sourceId: pulumi.Input<string>;
}
