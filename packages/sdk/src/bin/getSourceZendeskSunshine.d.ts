import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZendeskSunshine(args: GetSourceZendeskSunshineArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskSunshineResult>;
/**
 * A collection of arguments for invoking getSourceZendeskSunshine.
 */
export interface GetSourceZendeskSunshineArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZendeskSunshine.
 */
export interface GetSourceZendeskSunshineResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZendeskSunshineResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZendeskSunshineOutput(args: GetSourceZendeskSunshineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZendeskSunshineResult>;
/**
 * A collection of arguments for invoking getSourceZendeskSunshine.
 */
export interface GetSourceZendeskSunshineOutputArgs {
    sourceId: pulumi.Input<string>;
}
