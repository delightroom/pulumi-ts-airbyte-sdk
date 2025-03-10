import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLeverHiring(args: GetSourceLeverHiringArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLeverHiringResult>;
/**
 * A collection of arguments for invoking getSourceLeverHiring.
 */
export interface GetSourceLeverHiringArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLeverHiring.
 */
export interface GetSourceLeverHiringResult {
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
export declare function getSourceLeverHiringOutput(args: GetSourceLeverHiringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLeverHiringResult>;
/**
 * A collection of arguments for invoking getSourceLeverHiring.
 */
export interface GetSourceLeverHiringOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceLeverHiring.d.ts.map