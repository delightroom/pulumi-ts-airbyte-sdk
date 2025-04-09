import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTodoist(args: GetSourceTodoistArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTodoistResult>;
/**
 * A collection of arguments for invoking getSourceTodoist.
 */
export interface GetSourceTodoistArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTodoist.
 */
export interface GetSourceTodoistResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTodoistResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTodoistOutput(args: GetSourceTodoistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTodoistResult>;
/**
 * A collection of arguments for invoking getSourceTodoist.
 */
export interface GetSourceTodoistOutputArgs {
    sourceId: pulumi.Input<string>;
}
