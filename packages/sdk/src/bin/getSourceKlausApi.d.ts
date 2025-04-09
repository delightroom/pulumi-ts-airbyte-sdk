import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKlausApi(args: GetSourceKlausApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKlausApiResult>;
/**
 * A collection of arguments for invoking getSourceKlausApi.
 */
export interface GetSourceKlausApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKlausApi.
 */
export interface GetSourceKlausApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKlausApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKlausApiOutput(args: GetSourceKlausApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKlausApiResult>;
/**
 * A collection of arguments for invoking getSourceKlausApi.
 */
export interface GetSourceKlausApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
