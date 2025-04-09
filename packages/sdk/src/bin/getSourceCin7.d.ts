import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCin7(args: GetSourceCin7Args, opts?: pulumi.InvokeOptions): Promise<GetSourceCin7Result>;
/**
 * A collection of arguments for invoking getSourceCin7.
 */
export interface GetSourceCin7Args {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCin7.
 */
export interface GetSourceCin7Result {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCin7ResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCin7Output(args: GetSourceCin7OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCin7Result>;
/**
 * A collection of arguments for invoking getSourceCin7.
 */
export interface GetSourceCin7OutputArgs {
    sourceId: pulumi.Input<string>;
}
