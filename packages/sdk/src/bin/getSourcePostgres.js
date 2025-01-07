"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePostgres = getSourcePostgres;
exports.getSourcePostgresOutput = getSourcePostgresOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePostgres(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePostgres:getSourcePostgres", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePostgresOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePostgres:getSourcePostgres", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePostgres.js.map