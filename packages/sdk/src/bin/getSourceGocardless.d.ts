import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGocardless(args: GetSourceGocardlessArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGocardlessResult>;
/**
 * A collection of arguments for invoking getSourceGocardless.
 */
export interface GetSourceGocardlessArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGocardless.
 */
export interface GetSourceGocardlessResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGocardlessResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGocardlessOutput(args: GetSourceGocardlessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGocardlessResult>;
/**
 * A collection of arguments for invoking getSourceGocardless.
 */
export interface GetSourceGocardlessOutputArgs {
    sourceId: pulumi.Input<string>;
}
