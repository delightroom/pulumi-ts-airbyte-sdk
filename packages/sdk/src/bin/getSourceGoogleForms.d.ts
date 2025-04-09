import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleForms(args: GetSourceGoogleFormsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleFormsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleForms.
 */
export interface GetSourceGoogleFormsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleForms.
 */
export interface GetSourceGoogleFormsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleFormsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleFormsOutput(args: GetSourceGoogleFormsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleFormsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleForms.
 */
export interface GetSourceGoogleFormsOutputArgs {
    sourceId: pulumi.Input<string>;
}
