import * as pulumi from "@pulumi/pulumi";
export declare function getSourceJotform(args: GetSourceJotformArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJotformResult>;
/**
 * A collection of arguments for invoking getSourceJotform.
 */
export interface GetSourceJotformArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJotform.
 */
export interface GetSourceJotformResult {
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
export declare function getSourceJotformOutput(args: GetSourceJotformOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJotformResult>;
/**
 * A collection of arguments for invoking getSourceJotform.
 */
export interface GetSourceJotformOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceJotform.d.ts.map