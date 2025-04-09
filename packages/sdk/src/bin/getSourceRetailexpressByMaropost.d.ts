import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRetailexpressByMaropost(args: GetSourceRetailexpressByMaropostArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRetailexpressByMaropostResult>;
/**
 * A collection of arguments for invoking getSourceRetailexpressByMaropost.
 */
export interface GetSourceRetailexpressByMaropostArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRetailexpressByMaropost.
 */
export interface GetSourceRetailexpressByMaropostResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRetailexpressByMaropostResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRetailexpressByMaropostOutput(args: GetSourceRetailexpressByMaropostOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRetailexpressByMaropostResult>;
/**
 * A collection of arguments for invoking getSourceRetailexpressByMaropost.
 */
export interface GetSourceRetailexpressByMaropostOutputArgs {
    sourceId: pulumi.Input<string>;
}
