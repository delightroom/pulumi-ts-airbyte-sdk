import * as pulumi from "@pulumi/pulumi";
export declare function getSourceS3(args: GetSourceS3Args, opts?: pulumi.InvokeOptions): Promise<GetSourceS3Result>;
/**
 * A collection of arguments for invoking getSourceS3.
 */
export interface GetSourceS3Args {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceS3.
 */
export interface GetSourceS3Result {
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
export declare function getSourceS3Output(args: GetSourceS3OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceS3Result>;
/**
 * A collection of arguments for invoking getSourceS3.
 */
export interface GetSourceS3OutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceS3.d.ts.map