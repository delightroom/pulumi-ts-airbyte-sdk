import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZapsign(args: GetSourceZapsignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZapsignResult>;
/**
 * A collection of arguments for invoking getSourceZapsign.
 */
export interface GetSourceZapsignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZapsign.
 */
export interface GetSourceZapsignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZapsignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZapsignOutput(args: GetSourceZapsignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZapsignResult>;
/**
 * A collection of arguments for invoking getSourceZapsign.
 */
export interface GetSourceZapsignOutputArgs {
    sourceId: pulumi.Input<string>;
}
