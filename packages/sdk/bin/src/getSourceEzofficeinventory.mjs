// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities.mjs";
export function getSourceEzofficeinventory(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEzofficeinventory:getSourceEzofficeinventory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
export function getSourceEzofficeinventoryOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEzofficeinventory:getSourceEzofficeinventory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceEzofficeinventory.js.map