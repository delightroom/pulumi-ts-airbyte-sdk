import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoCrm(args: GetSourceZohoCrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoCrmResult>;
/**
 * A collection of arguments for invoking getSourceZohoCrm.
 */
export interface GetSourceZohoCrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoCrm.
 */
export interface GetSourceZohoCrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoCrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoCrmOutput(args: GetSourceZohoCrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoCrmResult>;
/**
 * A collection of arguments for invoking getSourceZohoCrm.
 */
export interface GetSourceZohoCrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
