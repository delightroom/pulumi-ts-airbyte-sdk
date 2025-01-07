import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePlanhat(args: GetSourcePlanhatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePlanhatResult>;
/**
 * A collection of arguments for invoking getSourcePlanhat.
 */
export interface GetSourcePlanhatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePlanhat.
 */
export interface GetSourcePlanhatResult {
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
export declare function getSourcePlanhatOutput(args: GetSourcePlanhatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePlanhatResult>;
/**
 * A collection of arguments for invoking getSourcePlanhat.
 */
export interface GetSourcePlanhatOutputArgs {
    sourceId: pulumi.Input<string>;
}
