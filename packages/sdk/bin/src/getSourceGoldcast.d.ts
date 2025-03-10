import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoldcast(args: GetSourceGoldcastArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoldcastResult>;
/**
 * A collection of arguments for invoking getSourceGoldcast.
 */
export interface GetSourceGoldcastArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoldcast.
 */
export interface GetSourceGoldcastResult {
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
export declare function getSourceGoldcastOutput(args: GetSourceGoldcastOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoldcastResult>;
/**
 * A collection of arguments for invoking getSourceGoldcast.
 */
export interface GetSourceGoldcastOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGoldcast.d.ts.map