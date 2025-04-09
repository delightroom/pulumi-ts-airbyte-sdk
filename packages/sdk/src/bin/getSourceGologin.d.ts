import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGologin(args: GetSourceGologinArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGologinResult>;
/**
 * A collection of arguments for invoking getSourceGologin.
 */
export interface GetSourceGologinArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGologin.
 */
export interface GetSourceGologinResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGologinResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGologinOutput(args: GetSourceGologinOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGologinResult>;
/**
 * A collection of arguments for invoking getSourceGologin.
 */
export interface GetSourceGologinOutputArgs {
    sourceId: pulumi.Input<string>;
}
