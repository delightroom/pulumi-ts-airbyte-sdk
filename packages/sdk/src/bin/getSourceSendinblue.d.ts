import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSendinblue(args: GetSourceSendinblueArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendinblueResult>;
/**
 * A collection of arguments for invoking getSourceSendinblue.
 */
export interface GetSourceSendinblueArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSendinblue.
 */
export interface GetSourceSendinblueResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSendinblueResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSendinblueOutput(args: GetSourceSendinblueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSendinblueResult>;
/**
 * A collection of arguments for invoking getSourceSendinblue.
 */
export interface GetSourceSendinblueOutputArgs {
    sourceId: pulumi.Input<string>;
}
