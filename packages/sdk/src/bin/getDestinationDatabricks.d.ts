import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationDatabricks(args: GetDestinationDatabricksArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDatabricksResult>;
/**
 * A collection of arguments for invoking getDestinationDatabricks.
 */
export interface GetDestinationDatabricksArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationDatabricks.
 */
export interface GetDestinationDatabricksResult {
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
export declare function getDestinationDatabricksOutput(args: GetDestinationDatabricksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDatabricksResult>;
/**
 * A collection of arguments for invoking getDestinationDatabricks.
 */
export interface GetDestinationDatabricksOutputArgs {
    destinationId: pulumi.Input<string>;
}
