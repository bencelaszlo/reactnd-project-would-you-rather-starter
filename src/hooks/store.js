import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrentUser, getLoginState, getQuestionFilter, getQuestions, getUsers } from "../store/selectors";
import * as actions from "../store/actions";

export const useActions = () => {
	const dispatch = useDispatch();
  
	return useMemo(() => {
		return Object.keys(actions).reduce(
			(acc, actionName) => ({
				...acc,
				[actionName]: bindActionCreators(actions[actionName], dispatch)
			}),
			{}
		);
	}, [dispatch]);
};

export const useUsers = () => useSelector(getUsers);
export const useCurrentUser = () => useSelector(getCurrentUser);
export const useLoginState = () => useSelector(getLoginState);
export const useQuestions = () => useSelector(getQuestions);
export const useQuestionFilter = () => useSelector(getQuestionFilter);
