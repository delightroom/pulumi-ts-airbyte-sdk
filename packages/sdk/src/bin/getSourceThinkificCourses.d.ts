import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceThinkificCourses(args: GetSourceThinkificCoursesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceThinkificCoursesResult>;
/**
 * A collection of arguments for invoking getSourceThinkificCourses.
 */
export interface GetSourceThinkificCoursesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceThinkificCourses.
 */
export interface GetSourceThinkificCoursesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceThinkificCoursesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceThinkificCoursesOutput(args: GetSourceThinkificCoursesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceThinkificCoursesResult>;
/**
 * A collection of arguments for invoking getSourceThinkificCourses.
 */
export interface GetSourceThinkificCoursesOutputArgs {
    sourceId: pulumi.Input<string>;
}
