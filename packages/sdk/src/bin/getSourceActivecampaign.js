"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceActivecampaign = getSourceActivecampaign;
exports.getSourceActivecampaignOutput = getSourceActivecampaignOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceActivecampaign(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceActivecampaign:getSourceActivecampaign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceActivecampaignOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceActivecampaign:getSourceActivecampaign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceActivecampaign.js.map