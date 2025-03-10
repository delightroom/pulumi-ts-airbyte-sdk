import * as pulumi from "@pulumi/pulumi";
export declare function getSourceCloseCom(args: GetSourceCloseComArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCloseComResult>;
/**
 * A collection of arguments for invoking getSourceCloseCom.
 */
export interface GetSourceCloseComArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCloseCom.
 */
export interface GetSourceCloseComResult {
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
export declare function getSourceCloseComOutput(args: GetSourceCloseComOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCloseComResult>;
/**
 * A collection of arguments for invoking getSourceCloseCom.
 */
export interface GetSourceCloseComOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceCloseCom.d.ts.map