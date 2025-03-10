import * as pulumi from "@pulumi/pulumi";
export declare function getSourceYotpo(args: GetSourceYotpoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYotpoResult>;
/**
 * A collection of arguments for invoking getSourceYotpo.
 */
export interface GetSourceYotpoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYotpo.
 */
export interface GetSourceYotpoResult {
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
export declare function getSourceYotpoOutput(args: GetSourceYotpoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYotpoResult>;
/**
 * A collection of arguments for invoking getSourceYotpo.
 */
export interface GetSourceYotpoOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceYotpo.d.ts.map