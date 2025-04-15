import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationDefinition(args: GetDestinationDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDefinitionResult>;
/**
 * A collection of arguments for invoking getDestinationDefinition.
 */
export interface GetDestinationDefinitionArgs {
    workspaceId: string;
}
/**
 * A collection of values returned by getDestinationDefinition.
 */
export interface GetDestinationDefinitionResult {
    readonly dockerImageTag: string;
    readonly dockerRepository: string;
    readonly documentationUrl: string;
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export declare function getDestinationDefinitionOutput(args: GetDestinationDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDefinitionResult>;
/**
 * A collection of arguments for invoking getDestinationDefinition.
 */
export interface GetDestinationDefinitionOutputArgs {
    workspaceId: pulumi.Input<string>;
}
