import * as pulumi from "@pulumi/pulumi";
export declare function getSourceMailjetSms(args: GetSourceMailjetSmsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailjetSmsResult>;
/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsResult {
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
export declare function getSourceMailjetSmsOutput(args: GetSourceMailjetSmsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailjetSmsResult>;
/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceMailjetSms.d.ts.map