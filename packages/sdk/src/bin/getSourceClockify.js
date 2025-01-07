"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceClockify = getSourceClockify;
exports.getSourceClockifyOutput = getSourceClockifyOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceClockify(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceClockify:getSourceClockify", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceClockifyOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceClockify:getSourceClockify", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceClockify.js.map