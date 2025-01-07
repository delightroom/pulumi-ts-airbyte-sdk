import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult>;
/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionArgs {
    connectionId: string;
}
/**
 * A collection of values returned by getConnection.
 */
export interface GetConnectionResult {
    readonly configurations: outputs.GetConnectionConfigurations;
    readonly connectionId: string;
    readonly dataResidency: string;
    readonly destinationId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly namespaceDefinition: string;
    readonly namespaceFormat: string;
    readonly nonBreakingSchemaUpdatesBehavior: string;
    readonly prefix: string;
    readonly schedule: outputs.GetConnectionSchedule;
    readonly sourceId: string;
    readonly status: string;
    readonly workspaceId: string;
}
export declare function getConnectionOutput(args: GetConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionResult>;
/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionOutputArgs {
    connectionId: pulumi.Input<string>;
}
