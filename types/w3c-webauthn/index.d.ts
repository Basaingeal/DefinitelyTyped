// Type definitions for non-npm package W3C (WebAuthn) Web Authentication API, 2.0
// Project: https://github.com/w3c/webauthn
// Definitions by: Michael J. Currie <https://github.com/Basaingeal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
<<<<<<< HEAD

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
=======
// TypeScript Version: 3.1

// Spec: https://w3c.github.io/webauthn/


interface Window {
    readonly Credential: typeof Credential
    readonly PublicKeyCredential: typeof PublicKeyCredential
    readonly CredentialsContainer: typeof CredentialsContainer
    readonly AuthenticatorResponse: typeof AuthenticatorResponse
    readonly AuthenticatorAttestationResponse: typeof AuthenticatorAttestationResponse
    readonly AuthenticatorAssertionResponse: typeof AuthenticatorAssertionResponse
    readonly PasswordCredential: typeof PasswordCredential
    readonly FederatedCredential: typeof FederatedCredential
}


interface Navigator {
    readonly credentials: CredentialsContainer;
}

// **** CredMan Spec ****

/**
 *  @see {@link https://w3c.github.io/webappsec-credential-management/#credential}
 */
declare class Credential {
    /**
     * The credential’s identifier.
     * The requirements for the identifier are distinct for each type of credential.
     * It might represent a username for username/password tuples, for example.
     */
    readonly id: string;

    /**
     * Specifies the credential type represented by this object.
     */
    readonly type: string;
}

interface CredentialUserData {
    /**
     * A name associated with the credential,
     * intended as a human-understandable public name for display in a credential chooser.
     */
    readonly name: string;

    /**
     * A URL pointing to an image for the credential,
     * intended for display in a credential chooser.
     * This URL MUST be an a priori authenticated URL.
     */
    readonly iconURL: string;
}

declare class CredentialsContainer {
>>>>>>> w3c-webauthn
    get(options?: CredentialRequestOptions): Promise<Credential | null>;
    store(credential: Credential): Promise<Credential>;
    create(options?: CredentialCreationOptions): Promise<Credential | null>;
    preventSilentAccess(): Promise<void>;
<<<<<<< HEAD
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
=======
}

interface CredentialData {
    id: string;
}

interface CredentialRequestOptions {
    mediation?: CredentialMediationRequirementDTS;
    signal?: AbortSignal;
}

type CredentialMediationRequirementDTS = 'silent' | 'optional' | 'required';

interface CredentialCreationOptions {
    signal?: AbortSignal;
}

declare class PasswordCredential extends Credential implements CredentialUserData {
    readonly password: string;
    readonly name: string;
    readonly iconURL: string;
    constructor (data: PasswordCredentialData);
    constructor (form: HTMLFormElement)
}

interface CredentialRequestOptions {
    password?: boolean;
}

interface PasswordCredentialData extends CredentialData {
>>>>>>> w3c-webauthn
    name?: string;
    iconURL?: string;
    origin: string;
    password: string;
<<<<<<< HEAD
  }
  
  type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;
  
  interface CredentialCreationOptions {
    password?: PasswordCredentialInit;
  }
  
  declare class FederatedCredential extends Credential implements CredentialUserData {
=======
}

type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;

interface CredentialCreationOptions {
    password?: PasswordCredentialInit;
}

declare class FederatedCredential extends Credential implements CredentialUserData {
>>>>>>> w3c-webauthn
    readonly provider: string;
    readonly protocol: string;
    readonly name: string;
    readonly iconURL: string;
<<<<<<< HEAD
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
=======
    constructor (data: FederatedCredentialInit);
}

interface FederatedCredentialRequestOptions {
    providers?: string[];
    protocols?: string[];
}

interface CredentialRequestOptions {
    federated?: FederatedCredentialRequestOptions;
}

interface FederatedCredentialInit extends CredentialData {
>>>>>>> w3c-webauthn
    name?: string;
    iconURL?: string;
    origin: string;
    provider: string;
    protocol?: string;
<<<<<<< HEAD
  }
  
  interface CredentialCreationOptions {
    federated?: FederatedCredentialInit;
  }
  
  // **** WebAuth Spec ****
  
  declare class PublicKeyCredential extends Credential {
=======
}

interface CredentialCreationOptions {
    federated?: FederatedCredentialInit;
}

// **** WebAuth Spec ****

declare class PublicKeyCredential extends Credential {
>>>>>>> w3c-webauthn
    readonly rawId: ArrayBuffer;
    readonly response: AuthenticatorResponse;
    getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
    static isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
<<<<<<< HEAD
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
  
=======
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

>>>>>>> w3c-webauthn
    timeout?: number;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    attestation?: AttestationConveyancePreference;
    extensions?: AuthenticationExtensionsClientInputs;
<<<<<<< HEAD
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
=======
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
>>>>>>> w3c-webauthn
    authenticatorAttachment?: AuthenticatorAttachment;
    requireResidentKey?: boolean;
    residentKey?: ResidentKeyRequirement;
    userVerification?: UserVerificationRequirement;
<<<<<<< HEAD
  }
  
  type AuthenticatorAttachment = 'platform' | 'cross-platform';
  
  type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required';
  
  type AttestationConveyancePreference = 'none' | 'indirect' | 'direct';
  
  interface PublicKeyCredentialRequestOptions {
=======
}

type AuthenticatorAttachment = 'platform' | 'cross-platform';

type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required';

type AttestationConveyancePreference = 'none' | 'indirect' | 'direct';

interface PublicKeyCredentialRequestOptions {
>>>>>>> w3c-webauthn
    challenge: BufferSource;
    timeout?: number;
    rpId?: string;
    allowCredentials?: PublicKeyCredentialDescriptor[];
    userVerification?: UserVerificationRequirement;
    extensions?: AuthenticationExtensionsClientInputs;
<<<<<<< HEAD
  }
  
  type AuthenticationExtensionsAuthenticatorInputs = Record<string, string>;
  
  interface CollectedClientData {
=======
}

type AuthenticationExtensionsAuthenticatorInputs = Record<string, string>;

interface CollectedClientData {
>>>>>>> w3c-webauthn
    type: string;
    challenge: string;
    origin: string;
    tokenBinding?: TokenBinding;
<<<<<<< HEAD
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
  
=======
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
>>>>>>> w3c-webauthn
