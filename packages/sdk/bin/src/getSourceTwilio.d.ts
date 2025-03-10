import * as pulumi from "@pulumi/pulumi";
export declare function getSourceTwilio(args: GetSourceTwilioArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTwilioResult>;
/**
 * A collection of arguments for invoking getSourceTwilio.
 */
export interface GetSourceTwilioArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTwilio.
 */
export interface GetSourceTwilioResult {
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
export declare function getSourceTwilioOutput(args: GetSourceTwilioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTwilioResult>;
/**
 * A collection of arguments for invoking getSourceTwilio.
 */
export interface GetSourceTwilioOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceTwilio.d.ts.map