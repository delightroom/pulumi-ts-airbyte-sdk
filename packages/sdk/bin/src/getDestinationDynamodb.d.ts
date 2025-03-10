import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationDynamodb(args: GetDestinationDynamodbArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDynamodbResult>;
/**
 * A collection of arguments for invoking getDestinationDynamodb.
 */
export interface GetDestinationDynamodbArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationDynamodb.
 */
export interface GetDestinationDynamodbResult {
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
export declare function getDestinationDynamodbOutput(args: GetDestinationDynamodbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDynamodbResult>;
/**
 * A collection of arguments for invoking getDestinationDynamodb.
 */
export interface GetDestinationDynamodbOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationDynamodb.d.ts.map