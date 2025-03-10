import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoogleDrive(args: GetSourceGoogleDriveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleDriveResult>;
/**
 * A collection of arguments for invoking getSourceGoogleDrive.
 */
export interface GetSourceGoogleDriveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleDrive.
 */
export interface GetSourceGoogleDriveResult {
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
export declare function getSourceGoogleDriveOutput(args: GetSourceGoogleDriveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleDriveResult>;
/**
 * A collection of arguments for invoking getSourceGoogleDrive.
 */
export interface GetSourceGoogleDriveOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGoogleDrive.d.ts.map