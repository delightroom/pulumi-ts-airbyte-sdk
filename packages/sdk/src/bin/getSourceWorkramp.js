"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceWorkramp = getSourceWorkramp;
exports.getSourceWorkrampOutput = getSourceWorkrampOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceWorkramp(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWorkramp:getSourceWorkramp", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceWorkrampOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWorkramp:getSourceWorkramp", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceWorkramp.js.map