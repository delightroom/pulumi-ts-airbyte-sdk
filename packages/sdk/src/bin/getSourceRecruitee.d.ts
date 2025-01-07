import * as pulumi from "@pulumi/pulumi";
export declare function getSourceRecruitee(args: GetSourceRecruiteeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRecruiteeResult>;
/**
 * A collection of arguments for invoking getSourceRecruitee.
 */
export interface GetSourceRecruiteeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRecruitee.
 */
export interface GetSourceRecruiteeResult {
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
export declare function getSourceRecruiteeOutput(args: GetSourceRecruiteeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRecruiteeResult>;
/**
 * A collection of arguments for invoking getSourceRecruitee.
 */
export interface GetSourceRecruiteeOutputArgs {
    sourceId: pulumi.Input<string>;
}
