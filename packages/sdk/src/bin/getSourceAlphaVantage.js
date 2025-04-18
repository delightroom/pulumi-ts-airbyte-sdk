"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceAlphaVantage = getSourceAlphaVantage;
exports.getSourceAlphaVantageOutput = getSourceAlphaVantageOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceAlphaVantage(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAlphaVantage:getSourceAlphaVantage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceAlphaVantageOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAlphaVantage:getSourceAlphaVantage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAlphaVantage.js.map