"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceLeadfeeder = getSourceLeadfeeder;
exports.getSourceLeadfeederOutput = getSourceLeadfeederOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceLeadfeeder(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceLeadfeeder:getSourceLeadfeeder", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceLeadfeederOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceLeadfeeder:getSourceLeadfeeder", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceLeadfeeder.js.map