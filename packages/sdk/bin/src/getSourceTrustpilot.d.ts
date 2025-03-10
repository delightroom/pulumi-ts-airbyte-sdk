import * as pulumi from "@pulumi/pulumi";
export declare function getSourceTrustpilot(args: GetSourceTrustpilotArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTrustpilotResult>;
/**
 * A collection of arguments for invoking getSourceTrustpilot.
 */
export interface GetSourceTrustpilotArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTrustpilot.
 */
export interface GetSourceTrustpilotResult {
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
export declare function getSourceTrustpilotOutput(args: GetSourceTrustpilotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTrustpilotResult>;
/**
 * A collection of arguments for invoking getSourceTrustpilot.
 */
export interface GetSourceTrustpilotOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceTrustpilot.d.ts.map