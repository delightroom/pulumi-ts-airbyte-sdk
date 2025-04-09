import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWrike(args: GetSourceWrikeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWrikeResult>;
/**
 * A collection of arguments for invoking getSourceWrike.
 */
export interface GetSourceWrikeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWrike.
 */
export interface GetSourceWrikeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWrikeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWrikeOutput(args: GetSourceWrikeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWrikeResult>;
/**
 * A collection of arguments for invoking getSourceWrike.
 */
export interface GetSourceWrikeOutputArgs {
    sourceId: pulumi.Input<string>;
}
