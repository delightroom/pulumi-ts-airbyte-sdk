"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSurvicate = getSourceSurvicate;
exports.getSourceSurvicateOutput = getSourceSurvicateOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSurvicate(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSurvicate:getSourceSurvicate", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSurvicateOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSurvicate:getSourceSurvicate", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSurvicate.js.map