"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGoogleForms = getSourceGoogleForms;
exports.getSourceGoogleFormsOutput = getSourceGoogleFormsOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGoogleForms(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGoogleForms:getSourceGoogleForms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGoogleFormsOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGoogleForms:getSourceGoogleForms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGoogleForms.js.map