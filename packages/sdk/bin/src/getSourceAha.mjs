// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities.mjs";
export function getSourceAha(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAha:getSourceAha", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
export function getSourceAhaOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAha:getSourceAha", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAha.js.map