import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePersistiq(args: GetSourcePersistiqArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePersistiqResult>;
/**
 * A collection of arguments for invoking getSourcePersistiq.
 */
export interface GetSourcePersistiqArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePersistiq.
 */
export interface GetSourcePersistiqResult {
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
export declare function getSourcePersistiqOutput(args: GetSourcePersistiqOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePersistiqResult>;
/**
 * A collection of arguments for invoking getSourcePersistiq.
 */
export interface GetSourcePersistiqOutputArgs {
    sourceId: pulumi.Input<string>;
}
