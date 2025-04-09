import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNinjaoneRmm(args: GetSourceNinjaoneRmmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNinjaoneRmmResult>;
/**
 * A collection of arguments for invoking getSourceNinjaoneRmm.
 */
export interface GetSourceNinjaoneRmmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNinjaoneRmm.
 */
export interface GetSourceNinjaoneRmmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNinjaoneRmmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNinjaoneRmmOutput(args: GetSourceNinjaoneRmmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNinjaoneRmmResult>;
/**
 * A collection of arguments for invoking getSourceNinjaoneRmm.
 */
export interface GetSourceNinjaoneRmmOutputArgs {
    sourceId: pulumi.Input<string>;
}
