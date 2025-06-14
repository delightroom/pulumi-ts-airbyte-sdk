import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getConnections(args?: GetConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionsResult>;
/**
 * A collection of arguments for invoking getConnections.
 */
export interface GetConnectionsArgs {
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
    tagIds?: string[];
    workspaceIds?: string[];
}
/**
 * A collection of values returned by getConnections.
 */
export interface GetConnectionsResult {
    readonly datas: outputs.GetConnectionsData[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly includeDeleted?: boolean;
    readonly limit?: number;
    readonly next: string;
    readonly offset?: number;
    readonly previous: string;
    readonly tagIds?: string[];
    readonly workspaceIds?: string[];
}
export declare function getConnectionsOutput(args?: GetConnectionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionsResult>;
/**
 * A collection of arguments for invoking getConnections.
 */
export interface GetConnectionsOutputArgs {
    includeDeleted?: pulumi.Input<boolean>;
    limit?: pulumi.Input<number>;
    offset?: pulumi.Input<number>;
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    workspaceIds?: pulumi.Input<pulumi.Input<string>[]>;
}
