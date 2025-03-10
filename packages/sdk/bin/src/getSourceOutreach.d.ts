import * as pulumi from "@pulumi/pulumi";
export declare function getSourceOutreach(args: GetSourceOutreachArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOutreachResult>;
/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOutreach.
 */
export interface GetSourceOutreachResult {
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
export declare function getSourceOutreachOutput(args: GetSourceOutreachOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOutreachResult>;
/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceOutreach.d.ts.map