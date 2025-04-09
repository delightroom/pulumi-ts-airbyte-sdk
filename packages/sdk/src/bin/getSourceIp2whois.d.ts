import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceIp2whois(args: GetSourceIp2whoisArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIp2whoisResult>;
/**
 * A collection of arguments for invoking getSourceIp2whois.
 */
export interface GetSourceIp2whoisArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIp2whois.
 */
export interface GetSourceIp2whoisResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceIp2whoisResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceIp2whoisOutput(args: GetSourceIp2whoisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIp2whoisResult>;
/**
 * A collection of arguments for invoking getSourceIp2whois.
 */
export interface GetSourceIp2whoisOutputArgs {
    sourceId: pulumi.Input<string>;
}
