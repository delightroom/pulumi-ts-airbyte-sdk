import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceShippo(args: GetSourceShippoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShippoResult>;
/**
 * A collection of arguments for invoking getSourceShippo.
 */
export interface GetSourceShippoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShippo.
 */
export interface GetSourceShippoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceShippoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceShippoOutput(args: GetSourceShippoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShippoResult>;
/**
 * A collection of arguments for invoking getSourceShippo.
 */
export interface GetSourceShippoOutputArgs {
    sourceId: pulumi.Input<string>;
}
