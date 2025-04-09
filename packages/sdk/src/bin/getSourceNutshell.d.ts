import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNutshell(args: GetSourceNutshellArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNutshellResult>;
/**
 * A collection of arguments for invoking getSourceNutshell.
 */
export interface GetSourceNutshellArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNutshell.
 */
export interface GetSourceNutshellResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNutshellResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNutshellOutput(args: GetSourceNutshellOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNutshellResult>;
/**
 * A collection of arguments for invoking getSourceNutshell.
 */
export interface GetSourceNutshellOutputArgs {
    sourceId: pulumi.Input<string>;
}
