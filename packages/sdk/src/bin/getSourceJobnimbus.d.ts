import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceJobnimbus(args: GetSourceJobnimbusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJobnimbusResult>;
/**
 * A collection of arguments for invoking getSourceJobnimbus.
 */
export interface GetSourceJobnimbusArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJobnimbus.
 */
export interface GetSourceJobnimbusResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJobnimbusResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceJobnimbusOutput(args: GetSourceJobnimbusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJobnimbusResult>;
/**
 * A collection of arguments for invoking getSourceJobnimbus.
 */
export interface GetSourceJobnimbusOutputArgs {
    sourceId: pulumi.Input<string>;
}
