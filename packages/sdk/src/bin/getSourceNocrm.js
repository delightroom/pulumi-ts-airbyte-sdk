"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceNocrm = getSourceNocrm;
exports.getSourceNocrmOutput = getSourceNocrmOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceNocrm(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceNocrm:getSourceNocrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceNocrmOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceNocrm:getSourceNocrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceNocrm.js.map