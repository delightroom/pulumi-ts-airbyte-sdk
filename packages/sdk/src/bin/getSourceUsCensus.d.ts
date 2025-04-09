import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceUsCensus(args: GetSourceUsCensusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUsCensusResult>;
/**
 * A collection of arguments for invoking getSourceUsCensus.
 */
export interface GetSourceUsCensusArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceUsCensus.
 */
export interface GetSourceUsCensusResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUsCensusResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceUsCensusOutput(args: GetSourceUsCensusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUsCensusResult>;
/**
 * A collection of arguments for invoking getSourceUsCensus.
 */
export interface GetSourceUsCensusOutputArgs {
    sourceId: pulumi.Input<string>;
}
