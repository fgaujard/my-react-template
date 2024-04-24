function isInvalidUsername(username) {
  // Verifie si la taille de username est OK
  if (username.length >= 5 && username.length <= 20) {
    return false;
  }
  return true;
}

function isInvalidEmail(email) {
  if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)) {
    return false;
  }
  return true;
}

function isInvalidPassword(password) {
  if (
    /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^A-Z]*[A-Z]){2})(?=(?:\D*\d){2})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    )
  ) {
    return false;
  }
  return true;
}

function isInvalidPassMatch(password, passconf) {
  if (password === passconf && passconf !== "") {
    return false;
  }
  return true;
}

export { isInvalidUsername, isInvalidEmail, isInvalidPassword, isInvalidPassMatch };
