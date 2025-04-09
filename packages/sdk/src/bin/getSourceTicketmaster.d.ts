import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTicketmaster(args: GetSourceTicketmasterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTicketmasterResult>;
/**
 * A collection of arguments for invoking getSourceTicketmaster.
 */
export interface GetSourceTicketmasterArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTicketmaster.
 */
export interface GetSourceTicketmasterResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTicketmasterResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTicketmasterOutput(args: GetSourceTicketmasterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTicketmasterResult>;
/**
 * A collection of arguments for invoking getSourceTicketmaster.
 */
export interface GetSourceTicketmasterOutputArgs {
    sourceId: pulumi.Input<string>;
}
