import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCart(args: GetSourceCartArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCartResult>;
/**
 * A collection of arguments for invoking getSourceCart.
 */
export interface GetSourceCartArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCart.
 */
export interface GetSourceCartResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCartResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCartOutput(args: GetSourceCartOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCartResult>;
/**
 * A collection of arguments for invoking getSourceCart.
 */
export interface GetSourceCartOutputArgs {
    sourceId: pulumi.Input<string>;
}
