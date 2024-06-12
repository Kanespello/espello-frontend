// Define path constants for better maintainability
export const PATH_HOME = '/';
export const PATH_LOGIN = '/login';
export const PATH_CURRENT_SESSION_WITHOUT_SESSION_ID = '/session/current-session';
export const PATH_CURRENT_SESSION_WITH_SESSION_ID = `${PATH_CURRENT_SESSION_WITHOUT_SESSION_ID}/:sessionId`;
export const PATH_CREATE_SESSION = '/session/create-session';
export const PATH_USER_WAITLIST = '/user-waitlist';
export const PATH_BLOGS = 'https://espello.notion.site/Short-Reads-to-Learn-More-About-Us-c2c22d4053f043a7b3857441dd6bedd6?pvs=4'
export const PATH_DEFAULT = '/*';