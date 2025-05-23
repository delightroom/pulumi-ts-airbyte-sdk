import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePosthog(args: GetSourcePosthogArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePosthogResult>;
/**
 * A collection of arguments for invoking getSourcePosthog.
 */
export interface GetSourcePosthogArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePosthog.
 */
export interface GetSourcePosthogResult {
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
export declare function getSourcePosthogOutput(args: GetSourcePosthogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePosthogResult>;
/**
 * A collection of arguments for invoking getSourcePosthog.
 */
export interface GetSourcePosthogOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePosthog.d.ts.map