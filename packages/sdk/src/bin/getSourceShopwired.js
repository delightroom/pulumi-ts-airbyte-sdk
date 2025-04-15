"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceShopwired = getSourceShopwired;
exports.getSourceShopwiredOutput = getSourceShopwiredOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceShopwired(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceShopwired:getSourceShopwired", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceShopwiredOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceShopwired:getSourceShopwired", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceShopwired.js.map