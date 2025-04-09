import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVwo(args: GetSourceVwoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVwoResult>;
/**
 * A collection of arguments for invoking getSourceVwo.
 */
export interface GetSourceVwoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVwo.
 */
export interface GetSourceVwoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVwoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVwoOutput(args: GetSourceVwoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVwoResult>;
/**
 * A collection of arguments for invoking getSourceVwo.
 */
export interface GetSourceVwoOutputArgs {
    sourceId: pulumi.Input<string>;
}
