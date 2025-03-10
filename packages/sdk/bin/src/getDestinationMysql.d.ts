import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationMysql(args: GetDestinationMysqlArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMysqlResult>;
/**
 * A collection of arguments for invoking getDestinationMysql.
 */
export interface GetDestinationMysqlArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMysql.
 */
export interface GetDestinationMysqlResult {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export declare function getDestinationMysqlOutput(args: GetDestinationMysqlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMysqlResult>;
/**
 * A collection of arguments for invoking getDestinationMysql.
 */
export interface GetDestinationMysqlOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationMysql.d.ts.map