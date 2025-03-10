import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSurveySparrow(args: GetSourceSurveySparrowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSurveySparrowResult>;
/**
 * A collection of arguments for invoking getSourceSurveySparrow.
 */
export interface GetSourceSurveySparrowArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSurveySparrow.
 */
export interface GetSourceSurveySparrowResult {
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
export declare function getSourceSurveySparrowOutput(args: GetSourceSurveySparrowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSurveySparrowResult>;
/**
 * A collection of arguments for invoking getSourceSurveySparrow.
 */
export interface GetSourceSurveySparrowOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSurveySparrow.d.ts.map