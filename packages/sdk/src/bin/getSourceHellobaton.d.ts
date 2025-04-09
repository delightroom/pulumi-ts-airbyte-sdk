import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHellobaton(args: GetSourceHellobatonArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHellobatonResult>;
/**
 * A collection of arguments for invoking getSourceHellobaton.
 */
export interface GetSourceHellobatonArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHellobaton.
 */
export interface GetSourceHellobatonResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHellobatonResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHellobatonOutput(args: GetSourceHellobatonOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHellobatonResult>;
/**
 * A collection of arguments for invoking getSourceHellobaton.
 */
export interface GetSourceHellobatonOutputArgs {
    sourceId: pulumi.Input<string>;
}
