// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";
export function getSourceSapFieldglass(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSapFieldglass:getSourceSapFieldglass", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
export function getSourceSapFieldglassOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSapFieldglass:getSourceSapFieldglass", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSapFieldglass.js.map