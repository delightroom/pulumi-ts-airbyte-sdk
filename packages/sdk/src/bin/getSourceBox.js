"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceBox = getSourceBox;
exports.getSourceBoxOutput = getSourceBoxOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceBox(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBox:getSourceBox", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceBoxOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBox:getSourceBox", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceBox.js.map