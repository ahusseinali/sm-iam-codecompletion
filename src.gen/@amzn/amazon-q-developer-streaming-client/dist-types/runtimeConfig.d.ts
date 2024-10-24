import { NodeHttpHandler as RequestHandler } from "@smithy/node-http-handler";
import { QDeveloperStreamingClientConfig } from "./QDeveloperStreamingClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: QDeveloperStreamingClientConfig) => {
    runtime: string;
    defaultsMode: import("@smithy/types").Provider<import("@smithy/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    credentialDefaultProvider: (init?: import("@aws-sdk/credential-provider-node").DefaultProviderInit | undefined) => import("@smithy/types").MemoizedProvider<import("@smithy/types").AwsCredentialIdentity>;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    eventStreamSerdeProvider: import("@smithy/types").EventStreamSerdeProvider;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    region: string | import("@smithy/types").Provider<string>;
    requestHandler: RequestHandler | import("@smithy/protocol-http").HttpHandler<any>;
    retryMode: string | import("@smithy/types").Provider<string>;
    sha256: import("@smithy/types").HashConstructor;
    streamCollector: import("@smithy/types").StreamCollector;
    useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    apiVersion: string;
    cacheMiddleware?: boolean | undefined;
    urlParser: import("@smithy/types").UrlParser;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: string | Uint8Array) => string;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: string | Uint8Array) => string;
    disableHostPrefix: boolean;
    serviceId: string;
    regionInfoProvider: import("@smithy/types").RegionInfoProvider;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2 | undefined;
    endpoint?: string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | undefined;
    tls?: boolean | undefined;
    httpAuthSchemes: import("@smithy/types").HttpAuthScheme[];
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").QDeveloperStreamingHttpAuthSchemeProvider;
    credentials?: import("@smithy/types").AwsCredentialIdentity | import("@smithy/types").AwsCredentialIdentityProvider | undefined;
    signer?: import("@smithy/types").RequestSigner | ((authScheme?: import("@smithy/types").AuthScheme | undefined) => Promise<import("@smithy/types").RequestSigner>) | undefined;
    signingEscapePath?: boolean | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor?: (new (options: import("@smithy/signature-v4").SignatureV4Init & import("@smithy/signature-v4").SignatureV4CryptoInit) => import("@smithy/types").RequestSigner) | undefined;
};
