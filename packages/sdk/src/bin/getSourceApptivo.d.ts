import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceApptivo(args: GetSourceApptivoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceApptivoResult>;
/**
 * A collection of arguments for invoking getSourceApptivo.
 */
export interface GetSourceApptivoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceApptivo.
 */
export interface GetSourceApptivoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceApptivoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceApptivoOutput(args: GetSourceApptivoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceApptivoResult>;
/**
 * A collection of arguments for invoking getSourceApptivo.
 */
export interface GetSourceApptivoOutputArgs {
    sourceId: pulumi.Input<string>;
}
