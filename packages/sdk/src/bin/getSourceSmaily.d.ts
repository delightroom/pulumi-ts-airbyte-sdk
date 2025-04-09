import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSmaily(args: GetSourceSmailyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmailyResult>;
/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmaily.
 */
export interface GetSourceSmailyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmailyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSmailyOutput(args: GetSourceSmailyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmailyResult>;
/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyOutputArgs {
    sourceId: pulumi.Input<string>;
}
