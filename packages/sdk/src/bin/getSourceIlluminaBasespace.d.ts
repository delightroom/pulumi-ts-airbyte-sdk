import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceIlluminaBasespace(args: GetSourceIlluminaBasespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIlluminaBasespaceResult>;
/**
 * A collection of arguments for invoking getSourceIlluminaBasespace.
 */
export interface GetSourceIlluminaBasespaceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIlluminaBasespace.
 */
export interface GetSourceIlluminaBasespaceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceIlluminaBasespaceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceIlluminaBasespaceOutput(args: GetSourceIlluminaBasespaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIlluminaBasespaceResult>;
/**
 * A collection of arguments for invoking getSourceIlluminaBasespace.
 */
export interface GetSourceIlluminaBasespaceOutputArgs {
    sourceId: pulumi.Input<string>;
}
