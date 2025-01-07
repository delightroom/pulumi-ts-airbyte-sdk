"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceBuildkite = getSourceBuildkite;
exports.getSourceBuildkiteOutput = getSourceBuildkiteOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceBuildkite(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBuildkite:getSourceBuildkite", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceBuildkiteOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBuildkite:getSourceBuildkite", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceBuildkite.js.map