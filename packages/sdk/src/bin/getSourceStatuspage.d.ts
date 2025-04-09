import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceStatuspage(args: GetSourceStatuspageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStatuspageResult>;
/**
 * A collection of arguments for invoking getSourceStatuspage.
 */
export interface GetSourceStatuspageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceStatuspage.
 */
export interface GetSourceStatuspageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceStatuspageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceStatuspageOutput(args: GetSourceStatuspageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStatuspageResult>;
/**
 * A collection of arguments for invoking getSourceStatuspage.
 */
export interface GetSourceStatuspageOutputArgs {
    sourceId: pulumi.Input<string>;
}
