import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSquare(args: GetSourceSquareArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSquareResult>;
/**
 * A collection of arguments for invoking getSourceSquare.
 */
export interface GetSourceSquareArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSquare.
 */
export interface GetSourceSquareResult {
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
export declare function getSourceSquareOutput(args: GetSourceSquareOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSquareResult>;
/**
 * A collection of arguments for invoking getSourceSquare.
 */
export interface GetSourceSquareOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceSquare.d.ts.map