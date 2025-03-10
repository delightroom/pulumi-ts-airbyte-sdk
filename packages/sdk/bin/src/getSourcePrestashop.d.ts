import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePrestashop(args: GetSourcePrestashopArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePrestashopResult>;
/**
 * A collection of arguments for invoking getSourcePrestashop.
 */
export interface GetSourcePrestashopArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePrestashop.
 */
export interface GetSourcePrestashopResult {
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
export declare function getSourcePrestashopOutput(args: GetSourcePrestashopOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePrestashopResult>;
/**
 * A collection of arguments for invoking getSourcePrestashop.
 */
export interface GetSourcePrestashopOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePrestashop.d.ts.map