import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoDesk(args: GetSourceZohoDeskArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoDeskResult>;
/**
 * A collection of arguments for invoking getSourceZohoDesk.
 */
export interface GetSourceZohoDeskArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoDesk.
 */
export interface GetSourceZohoDeskResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoDeskResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoDeskOutput(args: GetSourceZohoDeskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoDeskResult>;
/**
 * A collection of arguments for invoking getSourceZohoDesk.
 */
export interface GetSourceZohoDeskOutputArgs {
    sourceId: pulumi.Input<string>;
}
