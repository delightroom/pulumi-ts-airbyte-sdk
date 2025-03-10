import * as pulumi from "@pulumi/pulumi";
export declare function getSourceWebflow(args: GetSourceWebflowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWebflowResult>;
/**
 * A collection of arguments for invoking getSourceWebflow.
 */
export interface GetSourceWebflowArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWebflow.
 */
export interface GetSourceWebflowResult {
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
export declare function getSourceWebflowOutput(args: GetSourceWebflowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWebflowResult>;
/**
 * A collection of arguments for invoking getSourceWebflow.
 */
export interface GetSourceWebflowOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceWebflow.d.ts.map