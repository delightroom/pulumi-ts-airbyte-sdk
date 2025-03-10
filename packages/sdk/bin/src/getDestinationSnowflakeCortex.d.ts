import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationSnowflakeCortex(args: GetDestinationSnowflakeCortexArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationSnowflakeCortexResult>;
/**
 * A collection of arguments for invoking getDestinationSnowflakeCortex.
 */
export interface GetDestinationSnowflakeCortexArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationSnowflakeCortex.
 */
export interface GetDestinationSnowflakeCortexResult {
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
export declare function getDestinationSnowflakeCortexOutput(args: GetDestinationSnowflakeCortexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationSnowflakeCortexResult>;
/**
 * A collection of arguments for invoking getDestinationSnowflakeCortex.
 */
export interface GetDestinationSnowflakeCortexOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationSnowflakeCortex.d.ts.map