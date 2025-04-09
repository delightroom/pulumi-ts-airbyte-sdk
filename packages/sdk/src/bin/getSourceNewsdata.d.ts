import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNewsdata(args: GetSourceNewsdataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNewsdataResult>;
/**
 * A collection of arguments for invoking getSourceNewsdata.
 */
export interface GetSourceNewsdataArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNewsdata.
 */
export interface GetSourceNewsdataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNewsdataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNewsdataOutput(args: GetSourceNewsdataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNewsdataResult>;
/**
 * A collection of arguments for invoking getSourceNewsdata.
 */
export interface GetSourceNewsdataOutputArgs {
    sourceId: pulumi.Input<string>;
}
