"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceBuzzsprout = getSourceBuzzsprout;
exports.getSourceBuzzsproutOutput = getSourceBuzzsproutOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceBuzzsprout(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBuzzsprout:getSourceBuzzsprout", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceBuzzsproutOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBuzzsprout:getSourceBuzzsprout", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceBuzzsprout.js.map