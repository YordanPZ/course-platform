"use server";

import { cookies } from "next/headers";

export const fetchApi = async (url: string): Promise<any> => {
  const baseURL = "http://localhost:1337/api";

  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      Authorization: `Bearer 42956d545ef0faf8b1a812787160c8871eaa349933f3a2d9d729b7c6eab6ad0a38b5197a7c2c63d1ca1f8f76d5f4ae1396e69dca71b7a650bfcb93c3cacb940989b5e753c7b02df1be11fe09711796529e78d4cfd63b2e3a98157863ac32a4ad676524c65d10810ef47a5e4049501306c22fbb0e6b7d01159c99b44fccf5615c`,
    },
  });
  const responseJson = await response.json();
  return responseJson.data;
};

export async function createAlumno(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const baseURL = process.env.BASE_URL;
  console.log(baseURL);

  const response = await fetch(`${baseURL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: lastName + " " + firstName,
      email,
      role: 3,
      password,
      blocked: true,
    }),
  });

  const responseJson = await response.json();
  console.log(responseJson);

  //Hacer un update del usuario

  const responseUpdate = await fetch(
    `${baseURL}/users/${responseJson.user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN_FULL_ACCES}`,
      },
      body: JSON.stringify({
        role: 3,
      }),
    }
  );

  const responseUpdateJson = await responseUpdate.json();

  if (!responseUpdateJson.jwt) {
    throw new Error(responseUpdateJson.error.message);
  }

  // console.log(responseUpdateJson);

  return responseJson;
}

export async function createProfesor(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const baseURL = process.env.BASE_URL;
  console.log(baseURL);

  const response = await fetch(`${baseURL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: lastName + " " + firstName,
      email,
      password,
      blocked: true,
    }),
  });

  const responseJson = await response.json();
  console.log(responseJson);

  //Hacer un update del usuario

  const responseUpdate = await fetch(
    `${baseURL}/users/${responseJson.user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN_FULL_ACCES}`,
      },
      body: JSON.stringify({
        role: 4,
      }),
    }
  );

  const responseUpdateJson = await responseUpdate.json();

  if (!responseJson.jwt) {
    throw new Error(responseJson.error?.message);
  }

  // console.log(responseUpdateJson);

  return responseJson;
}

export async function fetchLogin(email: string, password: string) {
  const response = await fetch(`${process.env.BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });

  const responseJson = await response.json();
  console.log(responseJson);
  const cookiesStore = await cookies();

  if (!responseJson.jwt) {
    throw new Error(responseJson.error?.message);
  }

  cookiesStore.set("token", responseJson.jwt, { httpOnly: true, secure: true });
}

export async function getUser() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  if (!token) {
    throw new Error("No se encontro token");
  }

  const response = await fetch(`${process.env.BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  const responseJson = await response.json();

  console.log(responseJson, "user");

  return responseJson;
}

export async function getMyCourses() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  if (!token) {
    throw new Error("No se encontro token");
  }

  const user = await getUser();

  const response = await fetch(
    `http://localhost:1337/api/suscripcions?populate=*&filters[users_permissions_user][id][$eq]=${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const responseJson = await response.json();

  return responseJson.data;
}
