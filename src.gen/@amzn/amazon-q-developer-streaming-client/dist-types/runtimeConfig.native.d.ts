import { QDeveloperStreamingClientConfig } from "./QDeveloperStreamingClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: QDeveloperStreamingClientConfig) => {
    runtime: string;
    sha256: import("@smithy/types").HashConstructor;
    requestHandler: import("@smithy/types").NodeHttpHandlerOptions | import("@smithy/types").FetchHttpHandlerOptions | Record<string, unknown> | import("@smithy/protocol-http").HttpHandler<any> | import("@smithy/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    cacheMiddleware?: boolean | undefined;
    urlParser: import("@smithy/types").UrlParser;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    streamCollector: import("@smithy/types").StreamCollector;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: string | Uint8Array) => string;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: string | Uint8Array) => string;
    disableHostPrefix: boolean;
    serviceId: string;
    useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    region: string | import("@smithy/types").Provider<any>;
    regionInfoProvider: import("@smithy/types").RegionInfoProvider;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    credentialDefaultProvider: (input: any) => import("@smithy/types").AwsCredentialIdentityProvider;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    retryMode: string | import("@smithy/types").Provider<string>;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    eventStreamSerdeProvider: import("@smithy/types").EventStreamSerdeProvider;
    defaultsMode: import("@smithy/smithy-client").DefaultsMode | import("@smithy/types").Provider<import("@smithy/smithy-client").DefaultsMode>;
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
