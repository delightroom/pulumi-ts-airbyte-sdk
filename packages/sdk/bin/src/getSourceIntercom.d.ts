import * as pulumi from "@pulumi/pulumi";
export declare function getSourceIntercom(args: GetSourceIntercomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIntercomResult>;
/**
 * A collection of arguments for invoking getSourceIntercom.
 */
export interface GetSourceIntercomArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIntercom.
 */
export interface GetSourceIntercomResult {
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
export declare function getSourceIntercomOutput(args: GetSourceIntercomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIntercomResult>;
/**
 * A collection of arguments for invoking getSourceIntercom.
 */
export interface GetSourceIntercomOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceIntercom.d.ts.map