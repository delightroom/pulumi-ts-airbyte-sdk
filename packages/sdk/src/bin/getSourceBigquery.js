"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceBigquery = getSourceBigquery;
exports.getSourceBigqueryOutput = getSourceBigqueryOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceBigquery(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBigquery:getSourceBigquery", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceBigqueryOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBigquery:getSourceBigquery", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceBigquery.js.map