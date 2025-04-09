import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCastorEdc(args: GetSourceCastorEdcArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCastorEdcResult>;
/**
 * A collection of arguments for invoking getSourceCastorEdc.
 */
export interface GetSourceCastorEdcArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCastorEdc.
 */
export interface GetSourceCastorEdcResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCastorEdcResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCastorEdcOutput(args: GetSourceCastorEdcOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCastorEdcResult>;
/**
 * A collection of arguments for invoking getSourceCastorEdc.
 */
export interface GetSourceCastorEdcOutputArgs {
    sourceId: pulumi.Input<string>;
}
