"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceMailtrap = getSourceMailtrap;
exports.getSourceMailtrapOutput = getSourceMailtrapOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceMailtrap(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMailtrap:getSourceMailtrap", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceMailtrapOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMailtrap:getSourceMailtrap", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceMailtrap.js.map