import * as pulumi from "@pulumi/pulumi";
export declare function getSourceInstagram(args: GetSourceInstagramArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInstagramResult>;
/**
 * A collection of arguments for invoking getSourceInstagram.
 */
export interface GetSourceInstagramArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInstagram.
 */
export interface GetSourceInstagramResult {
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
export declare function getSourceInstagramOutput(args: GetSourceInstagramOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInstagramResult>;
/**
 * A collection of arguments for invoking getSourceInstagram.
 */
export interface GetSourceInstagramOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceInstagram.d.ts.map