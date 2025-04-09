import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSignnow(args: GetSourceSignnowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSignnowResult>;
/**
 * A collection of arguments for invoking getSourceSignnow.
 */
export interface GetSourceSignnowArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSignnow.
 */
export interface GetSourceSignnowResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSignnowResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSignnowOutput(args: GetSourceSignnowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSignnowResult>;
/**
 * A collection of arguments for invoking getSourceSignnow.
 */
export interface GetSourceSignnowOutputArgs {
    sourceId: pulumi.Input<string>;
}
