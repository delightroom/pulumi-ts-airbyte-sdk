import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEmploymentHero(args: GetSourceEmploymentHeroArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEmploymentHeroResult>;
/**
 * A collection of arguments for invoking getSourceEmploymentHero.
 */
export interface GetSourceEmploymentHeroArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEmploymentHero.
 */
export interface GetSourceEmploymentHeroResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEmploymentHeroResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEmploymentHeroOutput(args: GetSourceEmploymentHeroOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEmploymentHeroResult>;
/**
 * A collection of arguments for invoking getSourceEmploymentHero.
 */
export interface GetSourceEmploymentHeroOutputArgs {
    sourceId: pulumi.Input<string>;
}
