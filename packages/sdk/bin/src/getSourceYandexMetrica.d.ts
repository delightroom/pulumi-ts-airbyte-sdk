import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceYandexMetrica.d.ts.map