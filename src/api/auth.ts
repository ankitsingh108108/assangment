import apiconfig from "./apiConfig";
import { LoginFields } from "@/components/signForm";

export const login = async (payload: LoginFields) => {
  console.info(payload);
  console.info(apiconfig);

  return new Promise<Promise<Response | { token: string }> | unknown>(
    (res, rez) => {
      fetch(`${apiconfig.defaultUrl}${apiconfig.login}`, {
        headers: apiconfig.commonHeader,
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((e) => {
          console.info(e);

          if (e?.ok) {
            res(e?.json());
          } else {
            rez(e);
          }
        })
        .catch((e) => console.info(e));
    }
  );
};
