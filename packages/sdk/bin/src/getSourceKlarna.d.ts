import * as pulumi from "@pulumi/pulumi";
export declare function getSourceKlarna(args: GetSourceKlarnaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKlarnaResult>;
/**
 * A collection of arguments for invoking getSourceKlarna.
 */
export interface GetSourceKlarnaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKlarna.
 */
export interface GetSourceKlarnaResult {
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
export declare function getSourceKlarnaOutput(args: GetSourceKlarnaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKlarnaResult>;
/**
 * A collection of arguments for invoking getSourceKlarna.
 */
export interface GetSourceKlarnaOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceKlarna.d.ts.map