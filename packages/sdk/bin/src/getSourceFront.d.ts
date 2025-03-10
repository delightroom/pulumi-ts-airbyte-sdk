import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFront(args: GetSourceFrontArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFrontResult>;
/**
 * A collection of arguments for invoking getSourceFront.
 */
export interface GetSourceFrontArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFront.
 */
export interface GetSourceFrontResult {
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
export declare function getSourceFrontOutput(args: GetSourceFrontOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFrontResult>;
/**
 * A collection of arguments for invoking getSourceFront.
 */
export interface GetSourceFrontOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceFront.d.ts.map