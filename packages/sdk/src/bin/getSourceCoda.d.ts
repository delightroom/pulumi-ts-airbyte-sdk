import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCoda(args: GetSourceCodaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCodaResult>;
/**
 * A collection of arguments for invoking getSourceCoda.
 */
export interface GetSourceCodaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCoda.
 */
export interface GetSourceCodaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCodaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCodaOutput(args: GetSourceCodaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCodaResult>;
/**
 * A collection of arguments for invoking getSourceCoda.
 */
export interface GetSourceCodaOutputArgs {
    sourceId: pulumi.Input<string>;
}
