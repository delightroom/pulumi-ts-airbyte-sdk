import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFinnhub(args: GetSourceFinnhubArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFinnhubResult>;
/**
 * A collection of arguments for invoking getSourceFinnhub.
 */
export interface GetSourceFinnhubArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFinnhub.
 */
export interface GetSourceFinnhubResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFinnhubResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFinnhubOutput(args: GetSourceFinnhubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFinnhubResult>;
/**
 * A collection of arguments for invoking getSourceFinnhub.
 */
export interface GetSourceFinnhubOutputArgs {
    sourceId: pulumi.Input<string>;
}
