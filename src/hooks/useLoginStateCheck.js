import { useLoginState } from "../hooks/store";
import { useHistory } from "react-router-dom";

export const useLoginStateCheck = () => {
	const history = useHistory();
	const loginState = useLoginState();

	if (!loginState) {
		history.push("/login");
	}
};
