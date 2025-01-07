"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGridly = getSourceGridly;
exports.getSourceGridlyOutput = getSourceGridlyOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGridly(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGridly:getSourceGridly", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGridlyOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGridly:getSourceGridly", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGridly.js.map