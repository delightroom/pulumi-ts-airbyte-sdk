import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationFirestore(args: GetDestinationFirestoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationFirestoreResult>;
/**
 * A collection of arguments for invoking getDestinationFirestore.
 */
export interface GetDestinationFirestoreArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationFirestore.
 */
export interface GetDestinationFirestoreResult {
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
    readonly resourceAllocation: outputs.GetDestinationFirestoreResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationFirestoreOutput(args: GetDestinationFirestoreOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationFirestoreResult>;
/**
 * A collection of arguments for invoking getDestinationFirestore.
 */
export interface GetDestinationFirestoreOutputArgs {
    destinationId: pulumi.Input<string>;
}
