"use server"

import { createAccessToken } from "app/utils/auth/createAccessToken";

export async function authenticate(formData: AuthenticateValues) {
  try {
    await createAccessToken(formData.username, formData.password)
      .then(response => response)
  } catch (error) {
    console.log(error);
  }
}