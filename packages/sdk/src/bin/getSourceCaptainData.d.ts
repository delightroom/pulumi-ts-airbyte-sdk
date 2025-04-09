import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCaptainData(args: GetSourceCaptainDataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCaptainDataResult>;
/**
 * A collection of arguments for invoking getSourceCaptainData.
 */
export interface GetSourceCaptainDataArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCaptainData.
 */
export interface GetSourceCaptainDataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCaptainDataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCaptainDataOutput(args: GetSourceCaptainDataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCaptainDataResult>;
/**
 * A collection of arguments for invoking getSourceCaptainData.
 */
export interface GetSourceCaptainDataOutputArgs {
    sourceId: pulumi.Input<string>;
}
