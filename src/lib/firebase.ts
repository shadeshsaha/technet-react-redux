import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: 'AIzaSyD6Z9clvCIx0-2Sv-r70DM7ihZ89fzUgiA',
  authDomain: 'tech-net-react-redux-e3ee9.firebaseapp.com',
  projectId: 'tech-net-react-redux-e3ee9',
  storageBucket: 'tech-net-react-redux-e3ee9.appspot.com',
  messagingSenderId: '997182370913',
  appId: '1:997182370913:web:6934792836457aadd7e620',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
