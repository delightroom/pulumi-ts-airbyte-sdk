import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleWebfonts(args: GetSourceGoogleWebfontsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleWebfontsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleWebfonts.
 */
export interface GetSourceGoogleWebfontsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleWebfonts.
 */
export interface GetSourceGoogleWebfontsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleWebfontsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleWebfontsOutput(args: GetSourceGoogleWebfontsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleWebfontsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleWebfonts.
 */
export interface GetSourceGoogleWebfontsOutputArgs {
    sourceId: pulumi.Input<string>;
}
