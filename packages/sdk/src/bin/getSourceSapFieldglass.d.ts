import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSapFieldglass(args: GetSourceSapFieldglassArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSapFieldglassResult>;
/**
 * A collection of arguments for invoking getSourceSapFieldglass.
 */
export interface GetSourceSapFieldglassArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSapFieldglass.
 */
export interface GetSourceSapFieldglassResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSapFieldglassResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSapFieldglassOutput(args: GetSourceSapFieldglassOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSapFieldglassResult>;
/**
 * A collection of arguments for invoking getSourceSapFieldglass.
 */
export interface GetSourceSapFieldglassOutputArgs {
    sourceId: pulumi.Input<string>;
}
