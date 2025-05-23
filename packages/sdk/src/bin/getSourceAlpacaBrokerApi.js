"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceAlpacaBrokerApi = getSourceAlpacaBrokerApi;
exports.getSourceAlpacaBrokerApiOutput = getSourceAlpacaBrokerApiOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceAlpacaBrokerApi(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAlpacaBrokerApi:getSourceAlpacaBrokerApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceAlpacaBrokerApiOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAlpacaBrokerApi:getSourceAlpacaBrokerApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAlpacaBrokerApi.js.map