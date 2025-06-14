import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAppsflyer(args: GetSourceAppsflyerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppsflyerResult>;
/**
 * A collection of arguments for invoking getSourceAppsflyer.
 */
export interface GetSourceAppsflyerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppsflyer.
 */
export interface GetSourceAppsflyerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAppsflyerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAppsflyerOutput(args: GetSourceAppsflyerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppsflyerResult>;
/**
 * A collection of arguments for invoking getSourceAppsflyer.
 */
export interface GetSourceAppsflyerOutputArgs {
    sourceId: pulumi.Input<string>;
}
