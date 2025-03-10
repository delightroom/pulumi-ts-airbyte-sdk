import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGuru(args: GetSourceGuruArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGuruResult>;
/**
 * A collection of arguments for invoking getSourceGuru.
 */
export interface GetSourceGuruArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGuru.
 */
export interface GetSourceGuruResult {
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
export declare function getSourceGuruOutput(args: GetSourceGuruOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGuruResult>;
/**
 * A collection of arguments for invoking getSourceGuru.
 */
export interface GetSourceGuruOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGuru.d.ts.map