"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceRevolutMerchant = getSourceRevolutMerchant;
exports.getSourceRevolutMerchantOutput = getSourceRevolutMerchantOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceRevolutMerchant(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRevolutMerchant:getSourceRevolutMerchant", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceRevolutMerchantOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRevolutMerchant:getSourceRevolutMerchant", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceRevolutMerchant.js.map