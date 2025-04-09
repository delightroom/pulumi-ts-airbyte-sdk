import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDelighted(args: GetSourceDelightedArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDelightedResult>;
/**
 * A collection of arguments for invoking getSourceDelighted.
 */
export interface GetSourceDelightedArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDelighted.
 */
export interface GetSourceDelightedResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDelightedResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDelightedOutput(args: GetSourceDelightedOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDelightedResult>;
/**
 * A collection of arguments for invoking getSourceDelighted.
 */
export interface GetSourceDelightedOutputArgs {
    sourceId: pulumi.Input<string>;
}
