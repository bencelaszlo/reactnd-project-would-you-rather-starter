export const getCurrentUser = state => state.currentUser;
export const getLoginState = state => (state.currentUser !== null && state.currentUser !== undefined);
export const getQuestions = state => state.questions;
export const getUsers = state => state.users;
export const getQuestionFilter = state => state.questionFilter;
