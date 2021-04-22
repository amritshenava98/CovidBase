import firebase from 'firebase';


const api_key = process.env['API_KEY'];
const auth_domain = process.env['AUTH_DOMAIN'];
const project_id = process.env['PROJECT_ID'];
const storage_bucket = process.env['STORAGE_BUCKET'];
const messaging_sender_id = process.env['MESSAGING_SENDER_ID'];
const app_id = process.env['APP_ID'];
const measurement_id = process.env['MEASUREMENT_ID']


const firebaseConfig = {
    apiKey: api_key,
    authDomain: auth_domain,
    projectId: project_id,
    storageBucket: storage_bucket,
    messagingSenderId: messaging_sender_id,
    appId: app_id,
    measurementId: measurement_id
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
