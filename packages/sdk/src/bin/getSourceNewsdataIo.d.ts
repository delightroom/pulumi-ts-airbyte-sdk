import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNewsdataIo(args: GetSourceNewsdataIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNewsdataIoResult>;
/**
 * A collection of arguments for invoking getSourceNewsdataIo.
 */
export interface GetSourceNewsdataIoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNewsdataIo.
 */
export interface GetSourceNewsdataIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNewsdataIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNewsdataIoOutput(args: GetSourceNewsdataIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNewsdataIoResult>;
/**
 * A collection of arguments for invoking getSourceNewsdataIo.
 */
export interface GetSourceNewsdataIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
