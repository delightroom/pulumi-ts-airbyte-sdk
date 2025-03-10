import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationYellowbrick(args: GetDestinationYellowbrickArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationYellowbrickResult>;
/**
 * A collection of arguments for invoking getDestinationYellowbrick.
 */
export interface GetDestinationYellowbrickArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationYellowbrick.
 */
export interface GetDestinationYellowbrickResult {
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
export declare function getDestinationYellowbrickOutput(args: GetDestinationYellowbrickOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationYellowbrickResult>;
/**
 * A collection of arguments for invoking getDestinationYellowbrick.
 */
export interface GetDestinationYellowbrickOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationYellowbrick.d.ts.map