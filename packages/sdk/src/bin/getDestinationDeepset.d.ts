import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationDeepset(args: GetDestinationDeepsetArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDeepsetResult>;
/**
 * A collection of arguments for invoking getDestinationDeepset.
 */
export interface GetDestinationDeepsetArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationDeepset.
 */
export interface GetDestinationDeepsetResult {
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
    readonly resourceAllocation: outputs.GetDestinationDeepsetResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationDeepsetOutput(args: GetDestinationDeepsetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDeepsetResult>;
/**
 * A collection of arguments for invoking getDestinationDeepset.
 */
export interface GetDestinationDeepsetOutputArgs {
    destinationId: pulumi.Input<string>;
}
