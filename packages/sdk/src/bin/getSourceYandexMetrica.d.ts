import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYandexMetrica(args: GetSourceYandexMetricaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYandexMetricaResult>;
/**
 * A collection of arguments for invoking getSourceYandexMetrica.
 */
export interface GetSourceYandexMetricaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYandexMetrica.
 */
export interface GetSourceYandexMetricaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYandexMetricaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYandexMetricaOutput(args: GetSourceYandexMetricaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYandexMetricaResult>;
/**
 * A collection of arguments for invoking getSourceYandexMetrica.
 */
export interface GetSourceYandexMetricaOutputArgs {
    sourceId: pulumi.Input<string>;
}
