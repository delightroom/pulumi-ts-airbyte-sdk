import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGorgias(args: GetSourceGorgiasArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGorgiasResult>;
/**
 * A collection of arguments for invoking getSourceGorgias.
 */
export interface GetSourceGorgiasArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGorgias.
 */
export interface GetSourceGorgiasResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGorgiasResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGorgiasOutput(args: GetSourceGorgiasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGorgiasResult>;
/**
 * A collection of arguments for invoking getSourceGorgias.
 */
export interface GetSourceGorgiasOutputArgs {
    sourceId: pulumi.Input<string>;
}
