import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAirbyte(args: GetSourceAirbyteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAirbyteResult>;
/**
 * A collection of arguments for invoking getSourceAirbyte.
 */
export interface GetSourceAirbyteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAirbyte.
 */
export interface GetSourceAirbyteResult {
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
export declare function getSourceAirbyteOutput(args: GetSourceAirbyteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAirbyteResult>;
/**
 * A collection of arguments for invoking getSourceAirbyte.
 */
export interface GetSourceAirbyteOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAirbyte.d.ts.map