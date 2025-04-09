import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCalendly(args: GetSourceCalendlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCalendlyResult>;
/**
 * A collection of arguments for invoking getSourceCalendly.
 */
export interface GetSourceCalendlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCalendly.
 */
export interface GetSourceCalendlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCalendlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCalendlyOutput(args: GetSourceCalendlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCalendlyResult>;
/**
 * A collection of arguments for invoking getSourceCalendly.
 */
export interface GetSourceCalendlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
