export function getGithubUrl() {
  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const rootUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

  return rootUrl;
}
