import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTinyemail(args: GetSourceTinyemailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTinyemailResult>;
/**
 * A collection of arguments for invoking getSourceTinyemail.
 */
export interface GetSourceTinyemailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTinyemail.
 */
export interface GetSourceTinyemailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTinyemailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTinyemailOutput(args: GetSourceTinyemailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTinyemailResult>;
/**
 * A collection of arguments for invoking getSourceTinyemail.
 */
export interface GetSourceTinyemailOutputArgs {
    sourceId: pulumi.Input<string>;
}
