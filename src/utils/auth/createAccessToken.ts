'use server'

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function createAccessToken(username: string, password: string) {

  const cookie = cookies();

  const tokenData = {
    username,
    password
  }

  const token = jwt.sign(tokenData, process.env.SECRET_TOKEN!, {
    expiresIn: "1d"
  })

  const response = NextResponse.json({
    message: "Login Successful",
    success: true
  })

  cookie.set("accessToken", token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  })

  return response;
}