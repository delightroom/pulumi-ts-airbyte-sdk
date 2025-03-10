import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAppcues(args: GetSourceAppcuesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppcuesResult>;
/**
 * A collection of arguments for invoking getSourceAppcues.
 */
export interface GetSourceAppcuesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppcues.
 */
export interface GetSourceAppcuesResult {
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
export declare function getSourceAppcuesOutput(args: GetSourceAppcuesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppcuesResult>;
/**
 * A collection of arguments for invoking getSourceAppcues.
 */
export interface GetSourceAppcuesOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAppcues.d.ts.map