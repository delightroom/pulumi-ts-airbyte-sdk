import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAsana(args: GetSourceAsanaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAsanaResult>;
/**
 * A collection of arguments for invoking getSourceAsana.
 */
export interface GetSourceAsanaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAsana.
 */
export interface GetSourceAsanaResult {
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
export declare function getSourceAsanaOutput(args: GetSourceAsanaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAsanaResult>;
/**
 * A collection of arguments for invoking getSourceAsana.
 */
export interface GetSourceAsanaOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAsana.d.ts.map