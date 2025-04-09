import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleCalendar(args: GetSourceGoogleCalendarArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleCalendarResult>;
/**
 * A collection of arguments for invoking getSourceGoogleCalendar.
 */
export interface GetSourceGoogleCalendarArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleCalendar.
 */
export interface GetSourceGoogleCalendarResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleCalendarResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleCalendarOutput(args: GetSourceGoogleCalendarOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleCalendarResult>;
/**
 * A collection of arguments for invoking getSourceGoogleCalendar.
 */
export interface GetSourceGoogleCalendarOutputArgs {
    sourceId: pulumi.Input<string>;
}
