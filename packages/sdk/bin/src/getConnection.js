// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";
export function getConnection(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
    }, opts, utilities.getPackage());
}
export function getConnectionOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getConnection.js.map