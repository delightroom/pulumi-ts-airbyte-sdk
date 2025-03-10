import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationRedis(args: GetDestinationRedisArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationRedisResult>;
/**
 * A collection of arguments for invoking getDestinationRedis.
 */
export interface GetDestinationRedisArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationRedis.
 */
export interface GetDestinationRedisResult {
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
export declare function getDestinationRedisOutput(args: GetDestinationRedisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationRedisResult>;
/**
 * A collection of arguments for invoking getDestinationRedis.
 */
export interface GetDestinationRedisOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationRedis.d.ts.map