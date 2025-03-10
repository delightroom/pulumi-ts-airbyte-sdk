import * as pulumi from "@pulumi/pulumi";
export declare function getSourceFirebolt(args: GetSourceFireboltArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFireboltResult>;
/**
 * A collection of arguments for invoking getSourceFirebolt.
 */
export interface GetSourceFireboltArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFirebolt.
 */
export interface GetSourceFireboltResult {
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
export declare function getSourceFireboltOutput(args: GetSourceFireboltOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFireboltResult>;
/**
 * A collection of arguments for invoking getSourceFirebolt.
 */
export interface GetSourceFireboltOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceFirebolt.d.ts.map