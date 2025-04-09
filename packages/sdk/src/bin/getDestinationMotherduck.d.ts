import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMotherduck(args: GetDestinationMotherduckArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMotherduckResult>;
/**
 * A collection of arguments for invoking getDestinationMotherduck.
 */
export interface GetDestinationMotherduckArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMotherduck.
 */
export interface GetDestinationMotherduckResult {
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
    readonly resourceAllocation: outputs.GetDestinationMotherduckResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMotherduckOutput(args: GetDestinationMotherduckOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMotherduckResult>;
/**
 * A collection of arguments for invoking getDestinationMotherduck.
 */
export interface GetDestinationMotherduckOutputArgs {
    destinationId: pulumi.Input<string>;
}
