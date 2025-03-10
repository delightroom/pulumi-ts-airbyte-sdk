import * as pulumi from "@pulumi/pulumi";
export declare function getSourceEmailoctopus(args: GetSourceEmailoctopusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEmailoctopusResult>;
/**
 * A collection of arguments for invoking getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusResult {
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
export declare function getSourceEmailoctopusOutput(args: GetSourceEmailoctopusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEmailoctopusResult>;
/**
 * A collection of arguments for invoking getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceEmailoctopus.d.ts.map