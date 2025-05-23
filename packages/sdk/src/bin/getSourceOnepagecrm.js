"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceOnepagecrm = getSourceOnepagecrm;
exports.getSourceOnepagecrmOutput = getSourceOnepagecrmOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceOnepagecrm(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOnepagecrm:getSourceOnepagecrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceOnepagecrmOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOnepagecrm:getSourceOnepagecrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceOnepagecrm.js.map