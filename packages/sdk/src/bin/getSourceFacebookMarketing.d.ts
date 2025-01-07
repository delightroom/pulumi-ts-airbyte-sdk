import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFacebookMarketing(args: GetSourceFacebookMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFacebookMarketingResult>;
/**
 * A collection of arguments for invoking getSourceFacebookMarketing.
 */
export interface GetSourceFacebookMarketingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFacebookMarketing.
 */
export interface GetSourceFacebookMarketingResult {
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
export declare function getSourceFacebookMarketingOutput(args: GetSourceFacebookMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFacebookMarketingResult>;
/**
 * A collection of arguments for invoking getSourceFacebookMarketing.
 */
export interface GetSourceFacebookMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
