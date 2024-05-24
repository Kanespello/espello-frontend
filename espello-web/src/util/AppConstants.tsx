export const SERVICE_URL_PYTHON = process.env.REACT_APP_SERVICE_URL_PYTHON;
export const SERVICE_URL_JAVA = process.env.REACT_APP_SERVICE_URL_JAVA;

export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const USER_SESSION_KEY = process.env.REACT_APP_USER_SESSION_KEY || '';
export const SESSION_SECRET_KEY = process.env.REACT_APP_USER_SESSION_SECRET_KEY || '';

export const API_WAITLIST = `${SERVICE_URL_JAVA}/session/api/v1/joinWaitlist`;

export const SPEAKER_INITIAL_TEXT = 'Hi. Can you please introduce yourself? Maybe tell about your work experience.'