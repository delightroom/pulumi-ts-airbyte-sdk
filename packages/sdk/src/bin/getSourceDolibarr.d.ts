import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDolibarr(args: GetSourceDolibarrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDolibarrResult>;
/**
 * A collection of arguments for invoking getSourceDolibarr.
 */
export interface GetSourceDolibarrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDolibarr.
 */
export interface GetSourceDolibarrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDolibarrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDolibarrOutput(args: GetSourceDolibarrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDolibarrResult>;
/**
 * A collection of arguments for invoking getSourceDolibarr.
 */
export interface GetSourceDolibarrOutputArgs {
    sourceId: pulumi.Input<string>;
}
