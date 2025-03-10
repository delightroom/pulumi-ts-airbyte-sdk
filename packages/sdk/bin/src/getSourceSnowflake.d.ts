import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSnowflake(args: GetSourceSnowflakeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSnowflakeResult>;
/**
 * A collection of arguments for invoking getSourceSnowflake.
 */
export interface GetSourceSnowflakeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSnowflake.
 */
export interface GetSourceSnowflakeResult {
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
export declare function getSourceSnowflakeOutput(args: GetSourceSnowflakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSnowflakeResult>;
/**
 * A collection of arguments for invoking getSourceSnowflake.
 */
export interface GetSourceSnowflakeOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSnowflake.d.ts.map