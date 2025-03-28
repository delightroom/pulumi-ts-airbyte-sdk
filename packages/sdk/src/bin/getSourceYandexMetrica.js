"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceYandexMetrica = getSourceYandexMetrica;
exports.getSourceYandexMetricaOutput = getSourceYandexMetricaOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceYandexMetrica(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceYandexMetrica:getSourceYandexMetrica", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceYandexMetricaOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceYandexMetrica:getSourceYandexMetrica", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceYandexMetrica.js.map