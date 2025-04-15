import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFastly(args: GetSourceFastlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFastlyResult>;
/**
 * A collection of arguments for invoking getSourceFastly.
 */
export interface GetSourceFastlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFastly.
 */
export interface GetSourceFastlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFastlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFastlyOutput(args: GetSourceFastlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFastlyResult>;
/**
 * A collection of arguments for invoking getSourceFastly.
 */
export interface GetSourceFastlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
