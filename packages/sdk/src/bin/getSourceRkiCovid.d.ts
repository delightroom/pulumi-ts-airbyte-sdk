import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRkiCovid(args: GetSourceRkiCovidArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRkiCovidResult>;
/**
 * A collection of arguments for invoking getSourceRkiCovid.
 */
export interface GetSourceRkiCovidArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRkiCovid.
 */
export interface GetSourceRkiCovidResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRkiCovidResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRkiCovidOutput(args: GetSourceRkiCovidOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRkiCovidResult>;
/**
 * A collection of arguments for invoking getSourceRkiCovid.
 */
export interface GetSourceRkiCovidOutputArgs {
    sourceId: pulumi.Input<string>;
}
