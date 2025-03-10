import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSlack(args: GetSourceSlackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSlackResult>;
/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSlack.
 */
export interface GetSourceSlackResult {
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
export declare function getSourceSlackOutput(args: GetSourceSlackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSlackResult>;
/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSlack.d.ts.map