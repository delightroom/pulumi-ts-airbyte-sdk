import * as pulumi from "@pulumi/pulumi";
export declare function getDeclarativeSourceDefinition(args: GetDeclarativeSourceDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetDeclarativeSourceDefinitionResult>;
/**
 * A collection of arguments for invoking getDeclarativeSourceDefinition.
 */
export interface GetDeclarativeSourceDefinitionArgs {
    workspaceId: string;
}
/**
 * A collection of values returned by getDeclarativeSourceDefinition.
 */
export interface GetDeclarativeSourceDefinitionResult {
    readonly id: string;
    readonly manifest: string;
    readonly name: string;
    readonly version: number;
    readonly workspaceId: string;
}
export declare function getDeclarativeSourceDefinitionOutput(args: GetDeclarativeSourceDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeclarativeSourceDefinitionResult>;
/**
 * A collection of arguments for invoking getDeclarativeSourceDefinition.
 */
export interface GetDeclarativeSourceDefinitionOutputArgs {
    workspaceId: pulumi.Input<string>;
}
