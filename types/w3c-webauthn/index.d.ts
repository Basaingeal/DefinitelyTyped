// Type definitions for non-npm package W3C (WebAuthn) Web Authentication API, 2.0
// Project: https://github.com/w3c/webauthn
// Definitions by: Michael J. Currie <https://github.com/Basaingeal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.7

// Spec: https://w3c.github.io/webauthn/

interface Window {
    readonly Credential: typeof Credential;
    readonly PublicKeyCredential: typeof PublicKeyCredential;
    readonly CredentialsContainer: typeof CredentialsContainer;
    readonly AuthenticatorResponse: typeof AuthenticatorResponse;
    readonly AuthenticatorAttestationResponse: typeof AuthenticatorAttestationResponse;
    readonly AuthenticatorAssertionResponse: typeof AuthenticatorAssertionResponse;
    readonly PasswordCredential: typeof PasswordCredential;
    readonly FederatedCredential: typeof FederatedCredential;
  }
  
  interface Navigator {
    readonly credentials: CredentialsContainer;
  }
  
  // **** CredMan Spec ****
  
  declare class Credential {
    readonly id: string;
    readonly type: string;
  }
  
  interface CredentialUserData {
    readonly name: string;
    readonly iconURL: string;
  }
  
  declare class CredentialsContainer {
    get(options?: CredentialRequestOptions): Promise<Credential | null>;
    store(credential: Credential): Promise<Credential>;
    create(options?: CredentialCreationOptions): Promise<Credential | null>;
    preventSilentAccess(): Promise<void>;
  }
  
  interface CredentialData {
    id: string;
  }
  
  interface CredentialRequestOptions {
    mediation?: CredentialMediationRequirement;
    signal?: AbortSignal;
  }
  
  type CredentialMediationRequirement = 'silent' | 'optional' | 'required';
  
  interface CredentialCreationOptions {
    signal?: AbortSignal;
  }
  
  declare class PasswordCredential extends Credential implements CredentialUserData {
    readonly password: string;
    readonly name: string;
    readonly iconURL: string;
    constructor(data: PasswordCredentialData);
    constructor(form: HTMLFormElement);
  }
  
  interface CredentialRequestOptions {
    password?: boolean;
  }
  
  interface PasswordCredentialData extends CredentialData {
    name?: string;
    iconURL?: string;
    origin: string;
    password: string;
  }
  
  type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;
  
  interface CredentialCreationOptions {
    password?: PasswordCredentialInit;
  }
  
  declare class FederatedCredential extends Credential implements CredentialUserData {
    readonly provider: string;
    readonly protocol: string;
    readonly name: string;
    readonly iconURL: string;
    constructor(data: FederatedCredentialInit);
  }
  
  interface FederatedCredentialRequestOptions {
    providers?: string[];
    protocols?: string[];
  }
  
  interface CredentialRequestOptions {
    federated?: FederatedCredentialRequestOptions;
  }
  
  interface FederatedCredentialInit extends CredentialData {
    name?: string;
    iconURL?: string;
    origin: string;
    provider: string;
    protocol?: string;
  }
  
  interface CredentialCreationOptions {
    federated?: FederatedCredentialInit;
  }
  
  // **** WebAuth Spec ****
  
  declare class PublicKeyCredential extends Credential {
    readonly rawId: ArrayBuffer;
    readonly response: AuthenticatorResponse;
    getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
    static isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
  }
  
  interface CredentialCreationOptions {
    publicKey?: PublicKeyCredentialCreationOptions;
  }
  
  interface CredentialRequestOptions {
    publicKey?: PublicKeyCredentialRequestOptions;
  }
  
  declare class AuthenticatorResponse {
    readonly clientDataJSON: ArrayBuffer;
  }
  
  declare class AuthenticatorAttestationResponse extends AuthenticatorResponse {
    readonly attestationObject: ArrayBuffer;
    getTransports(): AuthenticatorTransport[];
  }
  
  declare class AuthenticatorAssertionResponse extends AuthenticatorResponse {
    readonly authenticatorData: ArrayBuffer;
    readonly signature: ArrayBuffer;
    readonly userHandle: ArrayBuffer | null;
  }
  
  interface PublicKeyCredentialParameters {
    type: PublicKeyCredentialType;
    alg: COSEAlgorithmIdentifier;
  }
  
  interface PublicKeyCredentialCreationOptions {
    rp: PublicKeyCredentialRpEntity;
    user: PublicKeyCredentialUserEntity;
  
    challenge: BufferSource;
    pubKeyCredParams: PublicKeyCredentialParameters[];
  
    timeout?: number;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    attestation?: AttestationConveyancePreference;
    extensions?: AuthenticationExtensionsClientInputs;
  }
  
  interface PublicKeyCredentialEntity {
    name: string;
    icon?: string;
  }
  
  interface PublicKeyCredentialRpEntity extends PublicKeyCredentialEntity {
    id?: string;
  }
  
  interface PublicKeyCredentialUserEntity extends PublicKeyCredentialEntity {
    id: BufferSource;
    displayName: string;
  }
  
  interface AuthenticatorSelectionCriteria {
    authenticatorAttachment?: AuthenticatorAttachment;
    requireResidentKey?: boolean;
    residentKey?: ResidentKeyRequirement;
    userVerification?: UserVerificationRequirement;
  }
  
  type AuthenticatorAttachment = 'platform' | 'cross-platform';
  
  type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required';
  
  type AttestationConveyancePreference = 'none' | 'indirect' | 'direct';
  
  interface PublicKeyCredentialRequestOptions {
    challenge: BufferSource;
    timeout?: number;
    rpId?: string;
    allowCredentials?: PublicKeyCredentialDescriptor[];
    userVerification?: UserVerificationRequirement;
    extensions?: AuthenticationExtensionsClientInputs;
  }
  
  type AuthenticationExtensionsAuthenticatorInputs = Record<string, string>;
  
  interface CollectedClientData {
    type: string;
    challenge: string;
    origin: string;
    tokenBinding?: TokenBinding;
  }
  
  interface TokenBinding {
    status: TokenBindingStatus;
    id?: string;
  }
  
  type TokenBindingStatus = 'present' | 'supported';
  
  type PublicKeyCredentialType = 'public-key';
  
  interface PublicKeyCredentialDescriptor {
    type: PublicKeyCredentialType;
    id: BufferSource;
    transports?: AuthenticatorTransport[];
  }
  
  type AuthenticatorTransport = 'usb' | 'nfc' | 'ble' | 'internal';
  
  type COSEAlgorithmIdentifier = number;
  
  type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged';
  
  interface AuthenticationExtensionsClientInputs {
    appid?: string;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    appid?: boolean;
  }
  
  interface AuthenticationExtensionsClientInputs {
    txAuthSimple?: string;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    txAuthSimple?: string;
  }
  
  interface txAuthGenericArg {
    contentType: string;
    content: ArrayBuffer;
  }
  
  interface AuthenticationExtensionsClientInputs {
    txAuthGeneric?: txAuthGenericArg;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    txAuthGeneric?: ArrayBuffer;
  }
  
  type AuthenticatorSelectionList = AAGUID[];
  
  interface AuthenticationExtensionsClientInputs {
    authnSel?: AuthenticatorSelectionList;
  }
  
  type AAGUID = BufferSource;
  
  interface AuthenticationExtensionsClientOutputs {
    authnSel?: boolean;
  }
  
  interface AuthenticationExtensionsClientInputs {
    exts?: boolean;
  }
  
  type AuthenticationExtensionsSupported = string[];
  
  interface AuthenticationExtensionsClientOutputs {
    exts?: AuthenticationExtensionsSupported;
  }
  
  interface AuthenticationExtensionsClientInputs {
    uvi?: boolean;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    uvi?: ArrayBuffer;
  }
  
  interface AuthenticationExtensionsClientInputs {
    loc?: boolean;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    loc?: Coordinates;
  }
  
  interface AuthenticationExtensionsClientInputs {
    uvm?: boolean;
  }
  
  type UvmEntry = number;
  
  type UvmEntries = UvmEntry[];
  
  interface AuthenticationExtensionsClientOutputs {
    uvm?: UvmEntries;
  }
  
  interface authenticatorBiometricPerfBounds {
    FAR?: number;
    FRR?: number;
  }
  
  interface AuthenticationExtensionsClientInputs {
    credProps?: boolean;
  }
  
  interface CredentialPropertiesOutput {
    rk?: boolean;
  }
  
  interface AuthenticationExtensionsClientOutputs {
    credProps?: CredentialPropertiesOutput;
  }
  