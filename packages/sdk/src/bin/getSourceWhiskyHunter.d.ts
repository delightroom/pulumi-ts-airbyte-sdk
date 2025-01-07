import * as pulumi from "@pulumi/pulumi";
export declare function getSourceWhiskyHunter(args: GetSourceWhiskyHunterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWhiskyHunterResult>;
/**
 * A collection of arguments for invoking getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterResult {
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
export declare function getSourceWhiskyHunterOutput(args: GetSourceWhiskyHunterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWhiskyHunterResult>;
/**
 * A collection of arguments for invoking getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterOutputArgs {
    sourceId: pulumi.Input<string>;
}
