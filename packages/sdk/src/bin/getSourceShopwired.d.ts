import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceShopwired(args: GetSourceShopwiredArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShopwiredResult>;
/**
 * A collection of arguments for invoking getSourceShopwired.
 */
export interface GetSourceShopwiredArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShopwired.
 */
export interface GetSourceShopwiredResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceShopwiredResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceShopwiredOutput(args: GetSourceShopwiredOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShopwiredResult>;
/**
 * A collection of arguments for invoking getSourceShopwired.
 */
export interface GetSourceShopwiredOutputArgs {
    sourceId: pulumi.Input<string>;
}
