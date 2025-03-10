import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePostmarkapp(args: GetSourcePostmarkappArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePostmarkappResult>;
/**
 * A collection of arguments for invoking getSourcePostmarkapp.
 */
export interface GetSourcePostmarkappArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePostmarkapp.
 */
export interface GetSourcePostmarkappResult {
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
export declare function getSourcePostmarkappOutput(args: GetSourcePostmarkappOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePostmarkappResult>;
/**
 * A collection of arguments for invoking getSourcePostmarkapp.
 */
export interface GetSourcePostmarkappOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePostmarkapp.d.ts.map