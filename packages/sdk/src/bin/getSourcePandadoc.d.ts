import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePandadoc(args: GetSourcePandadocArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePandadocResult>;
/**
 * A collection of arguments for invoking getSourcePandadoc.
 */
export interface GetSourcePandadocArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePandadoc.
 */
export interface GetSourcePandadocResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePandadocResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePandadocOutput(args: GetSourcePandadocOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePandadocResult>;
/**
 * A collection of arguments for invoking getSourcePandadoc.
 */
export interface GetSourcePandadocOutputArgs {
    sourceId: pulumi.Input<string>;
}
