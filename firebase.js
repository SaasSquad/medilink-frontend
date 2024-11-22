import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { clientConfig } from "./config";

const app = !getApps().length ? initializeApp(clientConfig) : getApp();

const auth = getAuth(app)

export {app, auth}
