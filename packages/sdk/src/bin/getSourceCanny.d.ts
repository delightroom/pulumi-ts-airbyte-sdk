import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCanny(args: GetSourceCannyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCannyResult>;
/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCanny.
 */
export interface GetSourceCannyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCannyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCannyOutput(args: GetSourceCannyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCannyResult>;
/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyOutputArgs {
    sourceId: pulumi.Input<string>;
}
