import * as pulumi from "@pulumi/pulumi";
export declare function getSourceProductive(args: GetSourceProductiveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceProductiveResult>;
/**
 * A collection of arguments for invoking getSourceProductive.
 */
export interface GetSourceProductiveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceProductive.
 */
export interface GetSourceProductiveResult {
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
export declare function getSourceProductiveOutput(args: GetSourceProductiveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceProductiveResult>;
/**
 * A collection of arguments for invoking getSourceProductive.
 */
export interface GetSourceProductiveOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceProductive.d.ts.map