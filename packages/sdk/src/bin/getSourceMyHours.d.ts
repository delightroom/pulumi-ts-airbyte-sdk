import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMyHours(args: GetSourceMyHoursArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMyHoursResult>;
/**
 * A collection of arguments for invoking getSourceMyHours.
 */
export interface GetSourceMyHoursArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMyHours.
 */
export interface GetSourceMyHoursResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMyHoursResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMyHoursOutput(args: GetSourceMyHoursOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMyHoursResult>;
/**
 * A collection of arguments for invoking getSourceMyHours.
 */
export interface GetSourceMyHoursOutputArgs {
    sourceId: pulumi.Input<string>;
}
