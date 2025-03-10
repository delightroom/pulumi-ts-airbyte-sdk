import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationPubsub(args: GetDestinationPubsubArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPubsubResult>;
/**
 * A collection of arguments for invoking getDestinationPubsub.
 */
export interface GetDestinationPubsubArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationPubsub.
 */
export interface GetDestinationPubsubResult {
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
export declare function getDestinationPubsubOutput(args: GetDestinationPubsubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationPubsubResult>;
/**
 * A collection of arguments for invoking getDestinationPubsub.
 */
export interface GetDestinationPubsubOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationPubsub.d.ts.map