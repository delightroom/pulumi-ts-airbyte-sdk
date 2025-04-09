import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFinage(args: GetSourceFinageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFinageResult>;
/**
 * A collection of arguments for invoking getSourceFinage.
 */
export interface GetSourceFinageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFinage.
 */
export interface GetSourceFinageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFinageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFinageOutput(args: GetSourceFinageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFinageResult>;
/**
 * A collection of arguments for invoking getSourceFinage.
 */
export interface GetSourceFinageOutputArgs {
    sourceId: pulumi.Input<string>;
}
