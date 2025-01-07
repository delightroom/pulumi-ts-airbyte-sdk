import * as pulumi from "@pulumi/pulumi";
export declare function getSourceInstatus(args: GetSourceInstatusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInstatusResult>;
/**
 * A collection of arguments for invoking getSourceInstatus.
 */
export interface GetSourceInstatusArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInstatus.
 */
export interface GetSourceInstatusResult {
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
export declare function getSourceInstatusOutput(args: GetSourceInstatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInstatusResult>;
/**
 * A collection of arguments for invoking getSourceInstatus.
 */
export interface GetSourceInstatusOutputArgs {
    sourceId: pulumi.Input<string>;
}
