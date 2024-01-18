import apiconfig from "./apiConfig";
import { LoginFields } from "@/components/signForm";

export const login = async (payload: LoginFields) => {
	console.info(payload);
	console.info(apiconfig);

	const response = await fetch(`${apiconfig.defaultUrl}${apiconfig.login}`, {
		headers: apiconfig.commonHeader,
		method: "POST",
		body: JSON.stringify(payload),
	});
	const result = await response.json();
	return result;
};
