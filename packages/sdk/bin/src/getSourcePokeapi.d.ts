import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePokeapi(args: GetSourcePokeapiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePokeapiResult>;
/**
 * A collection of arguments for invoking getSourcePokeapi.
 */
export interface GetSourcePokeapiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePokeapi.
 */
export interface GetSourcePokeapiResult {
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
export declare function getSourcePokeapiOutput(args: GetSourcePokeapiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePokeapiResult>;
/**
 * A collection of arguments for invoking getSourcePokeapi.
 */
export interface GetSourcePokeapiOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourcePokeapi.d.ts.map