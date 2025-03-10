import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePostgres(args: GetSourcePostgresArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePostgresResult>;
/**
 * A collection of arguments for invoking getSourcePostgres.
 */
export interface GetSourcePostgresArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePostgres.
 */
export interface GetSourcePostgresResult {
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
export declare function getSourcePostgresOutput(args: GetSourcePostgresOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePostgresResult>;
/**
 * A collection of arguments for invoking getSourcePostgres.
 */
export interface GetSourcePostgresOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePostgres.d.ts.map