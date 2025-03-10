import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePaystack(args: GetSourcePaystackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaystackResult>;
/**
 * A collection of arguments for invoking getSourcePaystack.
 */
export interface GetSourcePaystackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePaystack.
 */
export interface GetSourcePaystackResult {
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
export declare function getSourcePaystackOutput(args: GetSourcePaystackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePaystackResult>;
/**
 * A collection of arguments for invoking getSourcePaystack.
 */
export interface GetSourcePaystackOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePaystack.d.ts.map