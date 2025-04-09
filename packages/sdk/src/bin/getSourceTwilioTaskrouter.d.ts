import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTwilioTaskrouter(args: GetSourceTwilioTaskrouterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTwilioTaskrouterResult>;
/**
 * A collection of arguments for invoking getSourceTwilioTaskrouter.
 */
export interface GetSourceTwilioTaskrouterArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTwilioTaskrouter.
 */
export interface GetSourceTwilioTaskrouterResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTwilioTaskrouterResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTwilioTaskrouterOutput(args: GetSourceTwilioTaskrouterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTwilioTaskrouterResult>;
/**
 * A collection of arguments for invoking getSourceTwilioTaskrouter.
 */
export interface GetSourceTwilioTaskrouterOutputArgs {
    sourceId: pulumi.Input<string>;
}
