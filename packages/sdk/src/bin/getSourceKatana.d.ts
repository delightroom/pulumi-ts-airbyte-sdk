import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKatana(args: GetSourceKatanaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKatanaResult>;
/**
 * A collection of arguments for invoking getSourceKatana.
 */
export interface GetSourceKatanaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKatana.
 */
export interface GetSourceKatanaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKatanaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKatanaOutput(args: GetSourceKatanaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKatanaResult>;
/**
 * A collection of arguments for invoking getSourceKatana.
 */
export interface GetSourceKatanaOutputArgs {
    sourceId: pulumi.Input<string>;
}
