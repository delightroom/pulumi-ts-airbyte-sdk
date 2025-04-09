import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleClassroom(args: GetSourceGoogleClassroomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleClassroomResult>;
/**
 * A collection of arguments for invoking getSourceGoogleClassroom.
 */
export interface GetSourceGoogleClassroomArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleClassroom.
 */
export interface GetSourceGoogleClassroomResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleClassroomResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleClassroomOutput(args: GetSourceGoogleClassroomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleClassroomResult>;
/**
 * A collection of arguments for invoking getSourceGoogleClassroom.
 */
export interface GetSourceGoogleClassroomOutputArgs {
    sourceId: pulumi.Input<string>;
}
