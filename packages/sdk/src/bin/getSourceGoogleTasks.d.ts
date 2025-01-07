import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoogleTasks(args: GetSourceGoogleTasksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleTasksResult>;
/**
 * A collection of arguments for invoking getSourceGoogleTasks.
 */
export interface GetSourceGoogleTasksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleTasks.
 */
export interface GetSourceGoogleTasksResult {
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
export declare function getSourceGoogleTasksOutput(args: GetSourceGoogleTasksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleTasksResult>;
/**
 * A collection of arguments for invoking getSourceGoogleTasks.
 */
export interface GetSourceGoogleTasksOutputArgs {
    sourceId: pulumi.Input<string>;
}
