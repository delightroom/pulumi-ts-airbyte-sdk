import * as pulumi from "@pulumi/pulumi";
export declare function getEnv(...vars: string[]): string | undefined;
export declare function getEnvBoolean(...vars: string[]): boolean | undefined;
export declare function getEnvNumber(...vars: string[]): number | undefined;
export declare function getVersion(): string;
/** @internal */
export declare function resourceOptsDefaults(): any;
/** @internal */
export declare function lazyLoad(exports: any, props: string[], loadModule: any): void;
export declare function callAsync<T>(tok: string, props: pulumi.Inputs, res?: pulumi.Resource, opts?: {
    property?: string;
}): Promise<T>;
export declare function getPackage(): Promise<string | undefined>;
//# sourceMappingURL=utilities.d.ts.map