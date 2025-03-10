import * as pulumi from "@pulumi/pulumi";
export declare function getSourceBigquery(args: GetSourceBigqueryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBigqueryResult>;
/**
 * A collection of arguments for invoking getSourceBigquery.
 */
export interface GetSourceBigqueryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBigquery.
 */
export interface GetSourceBigqueryResult {
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
export declare function getSourceBigqueryOutput(args: GetSourceBigqueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBigqueryResult>;
/**
 * A collection of arguments for invoking getSourceBigquery.
 */
export interface GetSourceBigqueryOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceBigquery.d.ts.map