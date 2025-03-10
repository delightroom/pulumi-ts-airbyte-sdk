import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceRkiCovid.d.ts.map