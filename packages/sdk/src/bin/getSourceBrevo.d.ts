import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBrevo(args: GetSourceBrevoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBrevoResult>;
/**
 * A collection of arguments for invoking getSourceBrevo.
 */
export interface GetSourceBrevoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBrevo.
 */
export interface GetSourceBrevoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBrevoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBrevoOutput(args: GetSourceBrevoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBrevoResult>;
/**
 * A collection of arguments for invoking getSourceBrevo.
 */
export interface GetSourceBrevoOutputArgs {
    sourceId: pulumi.Input<string>;
}
