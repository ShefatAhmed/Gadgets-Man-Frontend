"use server";

import { UserData } from "@/app/(withCommonLayout)/register/page";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`http://localhost:5000/api/v1/register`, {
    method: "POST",
    headers: {
      "Content/Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
