function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  return (inputPassword) => {
    if (isLocked) {
      return 'Account locked due to too many failed login attempts';
    }

    if (inputPassword === userInfo.password) {
      return 'Login successful';
    }

    attemptCount++;

    // Return failed attempt message first
    const failMessage = `Attempt ${attemptCount}: Login failed`;

    // Lock the account only *after* 3rd attempt
    if (attemptCount >= 3) {
      isLocked = true;
    }

    return failMessage;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
