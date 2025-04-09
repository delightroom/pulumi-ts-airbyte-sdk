import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceIncidentIo(args: GetSourceIncidentIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIncidentIoResult>;
/**
 * A collection of arguments for invoking getSourceIncidentIo.
 */
export interface GetSourceIncidentIoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIncidentIo.
 */
export interface GetSourceIncidentIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceIncidentIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceIncidentIoOutput(args: GetSourceIncidentIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIncidentIoResult>;
/**
 * A collection of arguments for invoking getSourceIncidentIo.
 */
export interface GetSourceIncidentIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
