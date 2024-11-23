export const clientConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_ADOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
  };


// Making it more secure, not working, now going to try it later

// export const serverConfig = {
//     cookieName: process.env.AUTH_COOKIE_NAME,
//     cookieSignatureKeys: [process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT, process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS],
//     cookieSerializeOptions: {
//         path: "/",
//         httpOnly: true,
//         secure: process.env.USE_SECURE_COOKIES === "true",
//         sameSite: "lax",
//         maxAge: 12 * 60 * 60 * 24,
//     },
//     serviceAccount: {
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     }
// };