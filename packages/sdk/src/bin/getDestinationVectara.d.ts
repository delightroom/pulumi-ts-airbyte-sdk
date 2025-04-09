import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationVectara(args: GetDestinationVectaraArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationVectaraResult>;
/**
 * A collection of arguments for invoking getDestinationVectara.
 */
export interface GetDestinationVectaraArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationVectara.
 */
export interface GetDestinationVectaraResult {
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
    readonly resourceAllocation: outputs.GetDestinationVectaraResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationVectaraOutput(args: GetDestinationVectaraOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationVectaraResult>;
/**
 * A collection of arguments for invoking getDestinationVectara.
 */
export interface GetDestinationVectaraOutputArgs {
    destinationId: pulumi.Input<string>;
}
