"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceNetsuite = getSourceNetsuite;
exports.getSourceNetsuiteOutput = getSourceNetsuiteOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceNetsuite(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceNetsuite:getSourceNetsuite", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceNetsuiteOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceNetsuite:getSourceNetsuite", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceNetsuite.js.map