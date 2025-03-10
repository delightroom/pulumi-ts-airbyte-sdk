import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAppfigures(args: GetSourceAppfiguresArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppfiguresResult>;
/**
 * A collection of arguments for invoking getSourceAppfigures.
 */
export interface GetSourceAppfiguresArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppfigures.
 */
export interface GetSourceAppfiguresResult {
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
export declare function getSourceAppfiguresOutput(args: GetSourceAppfiguresOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppfiguresResult>;
/**
 * A collection of arguments for invoking getSourceAppfigures.
 */
export interface GetSourceAppfiguresOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAppfigures.d.ts.map