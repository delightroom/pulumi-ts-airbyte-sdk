import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAlpacaBrokerApi(args: GetSourceAlpacaBrokerApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAlpacaBrokerApiResult>;
/**
 * A collection of arguments for invoking getSourceAlpacaBrokerApi.
 */
export interface GetSourceAlpacaBrokerApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAlpacaBrokerApi.
 */
export interface GetSourceAlpacaBrokerApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAlpacaBrokerApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAlpacaBrokerApiOutput(args: GetSourceAlpacaBrokerApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAlpacaBrokerApiResult>;
/**
 * A collection of arguments for invoking getSourceAlpacaBrokerApi.
 */
export interface GetSourceAlpacaBrokerApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
