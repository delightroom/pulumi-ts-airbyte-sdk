import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceCalendly.d.ts.map