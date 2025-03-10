import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSendgrid(args: GetSourceSendgridArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendgridResult>;
/**
 * A collection of arguments for invoking getSourceSendgrid.
 */
export interface GetSourceSendgridArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSendgrid.
 */
export interface GetSourceSendgridResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSendgridOutput(args: GetSourceSendgridOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSendgridResult>;
/**
 * A collection of arguments for invoking getSourceSendgrid.
 */
export interface GetSourceSendgridOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSendgrid.d.ts.map