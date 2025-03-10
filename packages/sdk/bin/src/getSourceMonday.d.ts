import * as pulumi from "@pulumi/pulumi";
export declare function getSourceMonday(args: GetSourceMondayArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMondayResult>;
/**
 * A collection of arguments for invoking getSourceMonday.
 */
export interface GetSourceMondayArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMonday.
 */
export interface GetSourceMondayResult {
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
export declare function getSourceMondayOutput(args: GetSourceMondayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMondayResult>;
/**
 * A collection of arguments for invoking getSourceMonday.
 */
export interface GetSourceMondayOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceMonday.d.ts.map