import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceConvertkit(args: GetSourceConvertkitArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConvertkitResult>;
/**
 * A collection of arguments for invoking getSourceConvertkit.
 */
export interface GetSourceConvertkitArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConvertkit.
 */
export interface GetSourceConvertkitResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConvertkitResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceConvertkitOutput(args: GetSourceConvertkitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConvertkitResult>;
/**
 * A collection of arguments for invoking getSourceConvertkit.
 */
export interface GetSourceConvertkitOutputArgs {
    sourceId: pulumi.Input<string>;
}
