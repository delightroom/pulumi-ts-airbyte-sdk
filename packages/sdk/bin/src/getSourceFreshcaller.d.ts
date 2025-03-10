import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFreshcaller(args: GetSourceFreshcallerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshcallerResult>;
/**
 * A collection of arguments for invoking getSourceFreshcaller.
 */
export interface GetSourceFreshcallerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshcaller.
 */
export interface GetSourceFreshcallerResult {
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
export declare function getSourceFreshcallerOutput(args: GetSourceFreshcallerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshcallerResult>;
/**
 * A collection of arguments for invoking getSourceFreshcaller.
 */
export interface GetSourceFreshcallerOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceFreshcaller.d.ts.map