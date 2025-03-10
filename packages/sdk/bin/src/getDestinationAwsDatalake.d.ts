import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationAwsDatalake(args: GetDestinationAwsDatalakeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationAwsDatalakeResult>;
/**
 * A collection of arguments for invoking getDestinationAwsDatalake.
 */
export interface GetDestinationAwsDatalakeArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationAwsDatalake.
 */
export interface GetDestinationAwsDatalakeResult {
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
export declare function getDestinationAwsDatalakeOutput(args: GetDestinationAwsDatalakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationAwsDatalakeResult>;
/**
 * A collection of arguments for invoking getDestinationAwsDatalake.
 */
export interface GetDestinationAwsDatalakeOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationAwsDatalake.d.ts.map