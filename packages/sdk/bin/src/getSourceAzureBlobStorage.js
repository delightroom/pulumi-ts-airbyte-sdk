// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";
export function getSourceAzureBlobStorage(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAzureBlobStorage:getSourceAzureBlobStorage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
export function getSourceAzureBlobStorageOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAzureBlobStorage:getSourceAzureBlobStorage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAzureBlobStorage.js.map