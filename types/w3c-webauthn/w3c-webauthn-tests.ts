function example5() {
    window.PublicKeyCredential.
    const assertionPromise = navigator.credentials.get({
        publicKey: {
            challenge: new Uint8Array([4, 99, 22]),
            extensions: {
                appid: 'webauthnExample_foobar',
            },
        },
    });
}

function example6() {
    if (!window.PublicKeyCredential) {
        /* Client not capable. Handle error. */
    }

    const publicKey: PublicKeyCredentialCreationOptions = {
        // The challenge is produced by the server; see the Security Considerations
        challenge: new Uint8Array([21, 31, 105]),

        // Relying Party:
        rp: {
            name: 'ACME Corporation',
        },

        // User:
        user: {
            id: new Uint8Array([21, 31, 105]),
            name: 'alex.p.mueller@example.com',
            displayName: 'Alex P. Müller',
            icon: 'https://pics.example.com/00/p/aBjjjpqPb.png',
        },

        // This Relying Party will accept either an ES256 or RS256 credential, but
        // prefers an ES256 credential.
        pubKeyCredParams: [
            {
                type: 'public-key',
                alg: -7, // "ES256" as registered in the IANA COSE Algorithms registr
            },
            {
                type: 'public-key',
                alg: -257, // Value registered by this specification for "RS256"
            },
        ],

        timeout: 60000, // 1 minute
        excludeCredentials: [], // No exclude list of PKCredDescriptors
        extensions: { loc: true }, // Include location information in attestation
    };

    // Note: The following call will cause the authenticator to display UI.
    navigator.credentials
        .create({ publicKey })
        .then(newCredentialInfo => {
            // Send new credential info to server for verification and registration.
        })
        .catch(err => {
            // No acceptable authenticator or user refused consent. Handle appropriately.
        });
}
