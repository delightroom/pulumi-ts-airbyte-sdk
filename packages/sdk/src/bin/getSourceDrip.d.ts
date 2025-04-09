import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDrip(args: GetSourceDripArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDripResult>;
/**
 * A collection of arguments for invoking getSourceDrip.
 */
export interface GetSourceDripArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDrip.
 */
export interface GetSourceDripResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDripResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDripOutput(args: GetSourceDripOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDripResult>;
/**
 * A collection of arguments for invoking getSourceDrip.
 */
export interface GetSourceDripOutputArgs {
    sourceId: pulumi.Input<string>;
}
