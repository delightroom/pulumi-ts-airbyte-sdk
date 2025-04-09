import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCountercyclical(args: GetSourceCountercyclicalArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCountercyclicalResult>;
/**
 * A collection of arguments for invoking getSourceCountercyclical.
 */
export interface GetSourceCountercyclicalArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCountercyclical.
 */
export interface GetSourceCountercyclicalResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCountercyclicalResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCountercyclicalOutput(args: GetSourceCountercyclicalOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCountercyclicalResult>;
/**
 * A collection of arguments for invoking getSourceCountercyclical.
 */
export interface GetSourceCountercyclicalOutputArgs {
    sourceId: pulumi.Input<string>;
}
