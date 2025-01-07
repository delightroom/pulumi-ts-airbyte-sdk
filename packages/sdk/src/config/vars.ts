// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("airbyte");

export declare const bearerAuth: string | undefined;
Object.defineProperty(exports, "bearerAuth", {
    get() {
        return __config.get("bearerAuth");
    },
    enumerable: true,
});

export declare const clientId: string | undefined;
Object.defineProperty(exports, "clientId", {
    get() {
        return __config.get("clientId");
    },
    enumerable: true,
});

export declare const clientSecret: string | undefined;
Object.defineProperty(exports, "clientSecret", {
    get() {
        return __config.get("clientSecret");
    },
    enumerable: true,
});

export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Server URL (defaults to https://api.airbyte.com/v1)
 */
export declare const serverUrl: string | undefined;
Object.defineProperty(exports, "serverUrl", {
    get() {
        return __config.get("serverUrl");
    },
    enumerable: true,
});

export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

