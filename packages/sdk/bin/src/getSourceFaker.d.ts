import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFaker(args: GetSourceFakerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFakerResult>;
/**
 * A collection of arguments for invoking getSourceFaker.
 */
export interface GetSourceFakerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFaker.
 */
export interface GetSourceFakerResult {
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
export declare function getSourceFakerOutput(args: GetSourceFakerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFakerResult>;
/**
 * A collection of arguments for invoking getSourceFaker.
 */
export interface GetSourceFakerOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceFaker.d.ts.map