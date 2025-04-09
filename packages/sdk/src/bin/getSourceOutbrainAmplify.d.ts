import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOutbrainAmplify(args: GetSourceOutbrainAmplifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOutbrainAmplifyResult>;
/**
 * A collection of arguments for invoking getSourceOutbrainAmplify.
 */
export interface GetSourceOutbrainAmplifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOutbrainAmplify.
 */
export interface GetSourceOutbrainAmplifyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOutbrainAmplifyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOutbrainAmplifyOutput(args: GetSourceOutbrainAmplifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOutbrainAmplifyResult>;
/**
 * A collection of arguments for invoking getSourceOutbrainAmplify.
 */
export interface GetSourceOutbrainAmplifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
