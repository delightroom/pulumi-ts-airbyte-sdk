import * as pulumi from "@pulumi/pulumi";
export declare function getSourceQualaroo(args: GetSourceQualarooArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceQualarooResult>;
/**
 * A collection of arguments for invoking getSourceQualaroo.
 */
export interface GetSourceQualarooArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceQualaroo.
 */
export interface GetSourceQualarooResult {
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
export declare function getSourceQualarooOutput(args: GetSourceQualarooOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceQualarooResult>;
/**
 * A collection of arguments for invoking getSourceQualaroo.
 */
export interface GetSourceQualarooOutputArgs {
    sourceId: pulumi.Input<string>;
}
