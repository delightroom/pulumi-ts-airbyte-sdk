import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePypi(args: GetSourcePypiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePypiResult>;
/**
 * A collection of arguments for invoking getSourcePypi.
 */
export interface GetSourcePypiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePypi.
 */
export interface GetSourcePypiResult {
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
export declare function getSourcePypiOutput(args: GetSourcePypiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePypiResult>;
/**
 * A collection of arguments for invoking getSourcePypi.
 */
export interface GetSourcePypiOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePypi.d.ts.map