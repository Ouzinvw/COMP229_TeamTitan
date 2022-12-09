export function UserDisplayName(req) {
  if (req.user) {
    return req.user.displayName;
  }
  return "";
}

export function AuthGuard(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

export async function PostSurvey(data) {
  try {
    const response = await axios.post("/survey-add", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
