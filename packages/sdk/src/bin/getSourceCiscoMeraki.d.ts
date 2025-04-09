import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCiscoMeraki(args: GetSourceCiscoMerakiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCiscoMerakiResult>;
/**
 * A collection of arguments for invoking getSourceCiscoMeraki.
 */
export interface GetSourceCiscoMerakiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCiscoMeraki.
 */
export interface GetSourceCiscoMerakiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCiscoMerakiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCiscoMerakiOutput(args: GetSourceCiscoMerakiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCiscoMerakiResult>;
/**
 * A collection of arguments for invoking getSourceCiscoMeraki.
 */
export interface GetSourceCiscoMerakiOutputArgs {
    sourceId: pulumi.Input<string>;
}
