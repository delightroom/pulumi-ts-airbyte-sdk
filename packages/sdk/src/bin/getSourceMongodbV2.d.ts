import * as pulumi from "@pulumi/pulumi";
export declare function getSourceMongodbV2(args: GetSourceMongodbV2Args, opts?: pulumi.InvokeOptions): Promise<GetSourceMongodbV2Result>;
/**
 * A collection of arguments for invoking getSourceMongodbV2.
 */
export interface GetSourceMongodbV2Args {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMongodbV2.
 */
export interface GetSourceMongodbV2Result {
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
export declare function getSourceMongodbV2Output(args: GetSourceMongodbV2OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMongodbV2Result>;
/**
 * A collection of arguments for invoking getSourceMongodbV2.
 */
export interface GetSourceMongodbV2OutputArgs {
    sourceId: pulumi.Input<string>;
}
