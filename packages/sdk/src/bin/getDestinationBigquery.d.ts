import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationBigquery(args: GetDestinationBigqueryArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationBigqueryResult>;
/**
 * A collection of arguments for invoking getDestinationBigquery.
 */
export interface GetDestinationBigqueryArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationBigquery.
 */
export interface GetDestinationBigqueryResult {
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
    readonly resourceAllocation: outputs.GetDestinationBigqueryResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationBigqueryOutput(args: GetDestinationBigqueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationBigqueryResult>;
/**
 * A collection of arguments for invoking getDestinationBigquery.
 */
export interface GetDestinationBigqueryOutputArgs {
    destinationId: pulumi.Input<string>;
}
