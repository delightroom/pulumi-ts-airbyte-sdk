"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFile = getSourceFile;
exports.getSourceFileOutput = getSourceFileOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFile(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFile:getSourceFile", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFileOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFile:getSourceFile", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFile.js.map