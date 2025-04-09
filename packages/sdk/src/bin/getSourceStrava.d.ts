import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceStrava(args: GetSourceStravaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStravaResult>;
/**
 * A collection of arguments for invoking getSourceStrava.
 */
export interface GetSourceStravaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceStrava.
 */
export interface GetSourceStravaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceStravaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceStravaOutput(args: GetSourceStravaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStravaResult>;
/**
 * A collection of arguments for invoking getSourceStrava.
 */
export interface GetSourceStravaOutputArgs {
    sourceId: pulumi.Input<string>;
}
