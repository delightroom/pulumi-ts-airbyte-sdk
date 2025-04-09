import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceUppromote(args: GetSourceUppromoteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUppromoteResult>;
/**
 * A collection of arguments for invoking getSourceUppromote.
 */
export interface GetSourceUppromoteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceUppromote.
 */
export interface GetSourceUppromoteResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUppromoteResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceUppromoteOutput(args: GetSourceUppromoteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUppromoteResult>;
/**
 * A collection of arguments for invoking getSourceUppromote.
 */
export interface GetSourceUppromoteOutputArgs {
    sourceId: pulumi.Input<string>;
}
