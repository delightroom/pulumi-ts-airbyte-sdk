import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVitally(args: GetSourceVitallyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVitallyResult>;
/**
 * A collection of arguments for invoking getSourceVitally.
 */
export interface GetSourceVitallyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVitally.
 */
export interface GetSourceVitallyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVitallyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVitallyOutput(args: GetSourceVitallyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVitallyResult>;
/**
 * A collection of arguments for invoking getSourceVitally.
 */
export interface GetSourceVitallyOutputArgs {
    sourceId: pulumi.Input<string>;
}
