import * as pulumi from "@pulumi/pulumi";
export declare function getSourceDefinition(args: GetSourceDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDefinitionResult>;
/**
 * A collection of arguments for invoking getSourceDefinition.
 */
export interface GetSourceDefinitionArgs {
    workspaceId: string;
}
/**
 * A collection of values returned by getSourceDefinition.
 */
export interface GetSourceDefinitionResult {
    readonly dockerImageTag: string;
    readonly dockerRepository: string;
    readonly documentationUrl: string;
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export declare function getSourceDefinitionOutput(args: GetSourceDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDefinitionResult>;
/**
 * A collection of arguments for invoking getSourceDefinition.
 */
export interface GetSourceDefinitionOutputArgs {
    workspaceId: pulumi.Input<string>;
}
