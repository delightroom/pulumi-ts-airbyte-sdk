"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFastbill = getSourceFastbill;
exports.getSourceFastbillOutput = getSourceFastbillOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFastbill(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFastbill:getSourceFastbill", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFastbillOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFastbill:getSourceFastbill", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFastbill.js.map