"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGuru = getSourceGuru;
exports.getSourceGuruOutput = getSourceGuruOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGuru(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGuru:getSourceGuru", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGuruOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGuru:getSourceGuru", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGuru.js.map