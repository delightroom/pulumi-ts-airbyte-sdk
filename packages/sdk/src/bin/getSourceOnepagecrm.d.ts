import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOnepagecrm(args: GetSourceOnepagecrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOnepagecrmResult>;
/**
 * A collection of arguments for invoking getSourceOnepagecrm.
 */
export interface GetSourceOnepagecrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOnepagecrm.
 */
export interface GetSourceOnepagecrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOnepagecrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOnepagecrmOutput(args: GetSourceOnepagecrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOnepagecrmResult>;
/**
 * A collection of arguments for invoking getSourceOnepagecrm.
 */
export interface GetSourceOnepagecrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
