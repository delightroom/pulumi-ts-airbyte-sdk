import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLightspeedRetail(args: GetSourceLightspeedRetailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLightspeedRetailResult>;
/**
 * A collection of arguments for invoking getSourceLightspeedRetail.
 */
export interface GetSourceLightspeedRetailArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLightspeedRetail.
 */
export interface GetSourceLightspeedRetailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLightspeedRetailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLightspeedRetailOutput(args: GetSourceLightspeedRetailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLightspeedRetailResult>;
/**
 * A collection of arguments for invoking getSourceLightspeedRetail.
 */
export interface GetSourceLightspeedRetailOutputArgs {
    sourceId: pulumi.Input<string>;
}
