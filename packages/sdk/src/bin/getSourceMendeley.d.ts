import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMendeley(args: GetSourceMendeleyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMendeleyResult>;
/**
 * A collection of arguments for invoking getSourceMendeley.
 */
export interface GetSourceMendeleyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMendeley.
 */
export interface GetSourceMendeleyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMendeleyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMendeleyOutput(args: GetSourceMendeleyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMendeleyResult>;
/**
 * A collection of arguments for invoking getSourceMendeley.
 */
export interface GetSourceMendeleyOutputArgs {
    sourceId: pulumi.Input<string>;
}
