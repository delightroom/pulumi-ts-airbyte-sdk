import * as pulumi from "@pulumi/pulumi";
export declare function getSourceZenloop(args: GetSourceZenloopArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZenloopResult>;
/**
 * A collection of arguments for invoking getSourceZenloop.
 */
export interface GetSourceZenloopArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZenloop.
 */
export interface GetSourceZenloopResult {
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
export declare function getSourceZenloopOutput(args: GetSourceZenloopOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZenloopResult>;
/**
 * A collection of arguments for invoking getSourceZenloop.
 */
export interface GetSourceZenloopOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceZenloop.d.ts.map