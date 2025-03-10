import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationSftpJson(args: GetDestinationSftpJsonArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationSftpJsonResult>;
/**
 * A collection of arguments for invoking getDestinationSftpJson.
 */
export interface GetDestinationSftpJsonArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationSftpJson.
 */
export interface GetDestinationSftpJsonResult {
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
export declare function getDestinationSftpJsonOutput(args: GetDestinationSftpJsonOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationSftpJsonResult>;
/**
 * A collection of arguments for invoking getDestinationSftpJson.
 */
export interface GetDestinationSftpJsonOutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationSftpJson.d.ts.map