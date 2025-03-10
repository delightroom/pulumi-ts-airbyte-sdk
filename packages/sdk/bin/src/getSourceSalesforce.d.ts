import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSalesforce(args: GetSourceSalesforceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSalesforceResult>;
/**
 * A collection of arguments for invoking getSourceSalesforce.
 */
export interface GetSourceSalesforceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSalesforce.
 */
export interface GetSourceSalesforceResult {
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
export declare function getSourceSalesforceOutput(args: GetSourceSalesforceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSalesforceResult>;
/**
 * A collection of arguments for invoking getSourceSalesforce.
 */
export interface GetSourceSalesforceOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSalesforce.d.ts.map