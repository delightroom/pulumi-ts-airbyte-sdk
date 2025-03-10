import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGlassfrog(args: GetSourceGlassfrogArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGlassfrogResult>;
/**
 * A collection of arguments for invoking getSourceGlassfrog.
 */
export interface GetSourceGlassfrogArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGlassfrog.
 */
export interface GetSourceGlassfrogResult {
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
export declare function getSourceGlassfrogOutput(args: GetSourceGlassfrogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGlassfrogResult>;
/**
 * A collection of arguments for invoking getSourceGlassfrog.
 */
export interface GetSourceGlassfrogOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGlassfrog.d.ts.map