import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCopper(args: GetSourceCopperArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCopperResult>;
/**
 * A collection of arguments for invoking getSourceCopper.
 */
export interface GetSourceCopperArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCopper.
 */
export interface GetSourceCopperResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCopperResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCopperOutput(args: GetSourceCopperOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCopperResult>;
/**
 * A collection of arguments for invoking getSourceCopper.
 */
export interface GetSourceCopperOutputArgs {
    sourceId: pulumi.Input<string>;
}
