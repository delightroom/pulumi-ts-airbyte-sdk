"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceTmdb = getSourceTmdb;
exports.getSourceTmdbOutput = getSourceTmdbOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceTmdb(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTmdb:getSourceTmdb", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTmdbOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTmdb:getSourceTmdb", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceTmdb.js.map