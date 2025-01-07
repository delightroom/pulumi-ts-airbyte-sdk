import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGridly(args: GetSourceGridlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGridlyResult>;
/**
 * A collection of arguments for invoking getSourceGridly.
 */
export interface GetSourceGridlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGridly.
 */
export interface GetSourceGridlyResult {
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
export declare function getSourceGridlyOutput(args: GetSourceGridlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGridlyResult>;
/**
 * A collection of arguments for invoking getSourceGridly.
 */
export interface GetSourceGridlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
