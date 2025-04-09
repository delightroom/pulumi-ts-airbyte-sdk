import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSerpstat(args: GetSourceSerpstatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSerpstatResult>;
/**
 * A collection of arguments for invoking getSourceSerpstat.
 */
export interface GetSourceSerpstatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSerpstat.
 */
export interface GetSourceSerpstatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSerpstatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSerpstatOutput(args: GetSourceSerpstatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSerpstatResult>;
/**
 * A collection of arguments for invoking getSourceSerpstat.
 */
export interface GetSourceSerpstatOutputArgs {
    sourceId: pulumi.Input<string>;
}
