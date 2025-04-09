import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationCobra(args: GetDestinationCobraArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationCobraResult>;
/**
 * A collection of arguments for invoking getDestinationCobra.
 */
export interface GetDestinationCobraArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationCobra.
 */
export interface GetDestinationCobraResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationCobraResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationCobraOutput(args: GetDestinationCobraOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationCobraResult>;
/**
 * A collection of arguments for invoking getDestinationCobra.
 */
export interface GetDestinationCobraOutputArgs {
    destinationId: pulumi.Input<string>;
}
