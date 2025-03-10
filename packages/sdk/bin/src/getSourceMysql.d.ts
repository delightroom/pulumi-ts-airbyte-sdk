import * as pulumi from "@pulumi/pulumi";
export declare function getSourceMysql(args: GetSourceMysqlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMysqlResult>;
/**
 * A collection of arguments for invoking getSourceMysql.
 */
export interface GetSourceMysqlArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMysql.
 */
export interface GetSourceMysqlResult {
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
export declare function getSourceMysqlOutput(args: GetSourceMysqlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMysqlResult>;
/**
 * A collection of arguments for invoking getSourceMysql.
 */
export interface GetSourceMysqlOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceMysql.d.ts.map