"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceTimely = getSourceTimely;
exports.getSourceTimelyOutput = getSourceTimelyOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceTimely(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTimely:getSourceTimely", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTimelyOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTimely:getSourceTimely", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceTimely.js.map