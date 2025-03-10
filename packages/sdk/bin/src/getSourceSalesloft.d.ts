import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSalesloft(args: GetSourceSalesloftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSalesloftResult>;
/**
 * A collection of arguments for invoking getSourceSalesloft.
 */
export interface GetSourceSalesloftArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSalesloft.
 */
export interface GetSourceSalesloftResult {
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
export declare function getSourceSalesloftOutput(args: GetSourceSalesloftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSalesloftResult>;
/**
 * A collection of arguments for invoking getSourceSalesloft.
 */
export interface GetSourceSalesloftOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSalesloft.d.ts.map