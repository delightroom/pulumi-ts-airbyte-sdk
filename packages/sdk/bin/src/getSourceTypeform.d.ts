import * as pulumi from "@pulumi/pulumi";
export declare function getSourceTypeform(args: GetSourceTypeformArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTypeformResult>;
/**
 * A collection of arguments for invoking getSourceTypeform.
 */
export interface GetSourceTypeformArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTypeform.
 */
export interface GetSourceTypeformResult {
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
export declare function getSourceTypeformOutput(args: GetSourceTypeformOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTypeformResult>;
/**
 * A collection of arguments for invoking getSourceTypeform.
 */
export interface GetSourceTypeformOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceTypeform.d.ts.map