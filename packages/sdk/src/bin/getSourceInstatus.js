"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceInstatus = getSourceInstatus;
exports.getSourceInstatusOutput = getSourceInstatusOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceInstatus(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceInstatus:getSourceInstatus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceInstatusOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceInstatus:getSourceInstatus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceInstatus.js.map