import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDeputy(args: GetSourceDeputyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDeputyResult>;
/**
 * A collection of arguments for invoking getSourceDeputy.
 */
export interface GetSourceDeputyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDeputy.
 */
export interface GetSourceDeputyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDeputyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDeputyOutput(args: GetSourceDeputyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDeputyResult>;
/**
 * A collection of arguments for invoking getSourceDeputy.
 */
export interface GetSourceDeputyOutputArgs {
    sourceId: pulumi.Input<string>;
}
