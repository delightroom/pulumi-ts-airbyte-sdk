import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationFirebolt(args: GetDestinationFireboltArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationFireboltResult>;
/**
 * A collection of arguments for invoking getDestinationFirebolt.
 */
export interface GetDestinationFireboltArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationFirebolt.
 */
export interface GetDestinationFireboltResult {
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
export declare function getDestinationFireboltOutput(args: GetDestinationFireboltOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationFireboltResult>;
/**
 * A collection of arguments for invoking getDestinationFirebolt.
 */
export interface GetDestinationFireboltOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationFirebolt.d.ts.map