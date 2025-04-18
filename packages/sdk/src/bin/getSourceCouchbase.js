"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceCouchbase = getSourceCouchbase;
exports.getSourceCouchbaseOutput = getSourceCouchbaseOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceCouchbase(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCouchbase:getSourceCouchbase", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceCouchbaseOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCouchbase:getSourceCouchbase", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceCouchbase.js.map