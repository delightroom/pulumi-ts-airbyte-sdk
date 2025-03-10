import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationClickhouse(args: GetDestinationClickhouseArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationClickhouseResult>;
/**
 * A collection of arguments for invoking getDestinationClickhouse.
 */
export interface GetDestinationClickhouseArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationClickhouse.
 */
export interface GetDestinationClickhouseResult {
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
export declare function getDestinationClickhouseOutput(args: GetDestinationClickhouseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationClickhouseResult>;
/**
 * A collection of arguments for invoking getDestinationClickhouse.
 */
export interface GetDestinationClickhouseOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationClickhouse.d.ts.map