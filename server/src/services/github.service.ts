import axios from "axios";
export async function GetGithubOAuthTokens(code: string): Promise<string> {
  try {
    const res: Auth.GithubTokensResult = (await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_ID,
        client_secret: process.env.GITHUB_SECRET,
        code: code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )) as Auth.GithubTokensResult;

    if (res.data.error_description) {
      throw new Error(res.data.error_description);
    }
    return res.data.access_token;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function GetGithubUser(accessToken: string): Promise<Auth.GithubUserResult> {
  const url = "https://api.github.com/user";

  try {
    const res = await axios.get<Auth.GithubUserResult>(url, {
      headers: {
        Authorization: `token ${accessToken}`,
        "User-Agent": "node.js",
      },
    });

    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
