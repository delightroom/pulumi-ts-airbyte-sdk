import * as pulumi from "@pulumi/pulumi";
export declare function getSourceNetsuite(args: GetSourceNetsuiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNetsuiteResult>;
/**
 * A collection of arguments for invoking getSourceNetsuite.
 */
export interface GetSourceNetsuiteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNetsuite.
 */
export interface GetSourceNetsuiteResult {
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
export declare function getSourceNetsuiteOutput(args: GetSourceNetsuiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNetsuiteResult>;
/**
 * A collection of arguments for invoking getSourceNetsuite.
 */
export interface GetSourceNetsuiteOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceNetsuite.d.ts.map