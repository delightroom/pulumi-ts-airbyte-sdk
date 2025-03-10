import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLeadfeeder(args: GetSourceLeadfeederArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLeadfeederResult>;
/**
 * A collection of arguments for invoking getSourceLeadfeeder.
 */
export interface GetSourceLeadfeederArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLeadfeeder.
 */
export interface GetSourceLeadfeederResult {
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
export declare function getSourceLeadfeederOutput(args: GetSourceLeadfeederOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLeadfeederResult>;
/**
 * A collection of arguments for invoking getSourceLeadfeeder.
 */
export interface GetSourceLeadfeederOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceLeadfeeder.d.ts.map