import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePersona(args: GetSourcePersonaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePersonaResult>;
/**
 * A collection of arguments for invoking getSourcePersona.
 */
export interface GetSourcePersonaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePersona.
 */
export interface GetSourcePersonaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePersonaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePersonaOutput(args: GetSourcePersonaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePersonaResult>;
/**
 * A collection of arguments for invoking getSourcePersona.
 */
export interface GetSourcePersonaOutputArgs {
    sourceId: pulumi.Input<string>;
}
