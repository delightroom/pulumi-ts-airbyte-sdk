import * as pulumi from "@pulumi/pulumi";
export declare function getSourceRecreation(args: GetSourceRecreationArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRecreationResult>;
/**
 * A collection of arguments for invoking getSourceRecreation.
 */
export interface GetSourceRecreationArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRecreation.
 */
export interface GetSourceRecreationResult {
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
export declare function getSourceRecreationOutput(args: GetSourceRecreationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRecreationResult>;
/**
 * A collection of arguments for invoking getSourceRecreation.
 */
export interface GetSourceRecreationOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceRecreation.d.ts.map