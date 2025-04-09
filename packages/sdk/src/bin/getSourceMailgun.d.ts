import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailgun(args: GetSourceMailgunArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailgunResult>;
/**
 * A collection of arguments for invoking getSourceMailgun.
 */
export interface GetSourceMailgunArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailgun.
 */
export interface GetSourceMailgunResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailgunResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailgunOutput(args: GetSourceMailgunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailgunResult>;
/**
 * A collection of arguments for invoking getSourceMailgun.
 */
export interface GetSourceMailgunOutputArgs {
    sourceId: pulumi.Input<string>;
}
