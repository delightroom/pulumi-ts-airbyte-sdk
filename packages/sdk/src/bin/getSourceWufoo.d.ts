import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWufoo(args: GetSourceWufooArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWufooResult>;
/**
 * A collection of arguments for invoking getSourceWufoo.
 */
export interface GetSourceWufooArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWufoo.
 */
export interface GetSourceWufooResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWufooResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWufooOutput(args: GetSourceWufooOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWufooResult>;
/**
 * A collection of arguments for invoking getSourceWufoo.
 */
export interface GetSourceWufooOutputArgs {
    sourceId: pulumi.Input<string>;
}
