import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceElasticemail(args: GetSourceElasticemailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceElasticemailResult>;
/**
 * A collection of arguments for invoking getSourceElasticemail.
 */
export interface GetSourceElasticemailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceElasticemail.
 */
export interface GetSourceElasticemailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceElasticemailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceElasticemailOutput(args: GetSourceElasticemailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceElasticemailResult>;
/**
 * A collection of arguments for invoking getSourceElasticemail.
 */
export interface GetSourceElasticemailOutputArgs {
    sourceId: pulumi.Input<string>;
}
