"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSource100ms = getSource100ms;
exports.getSource100msOutput = getSource100msOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSource100ms(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSource100ms:getSource100ms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSource100msOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSource100ms:getSource100ms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSource100ms.js.map