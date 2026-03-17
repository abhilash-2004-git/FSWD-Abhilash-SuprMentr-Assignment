export function validateName(value) {
  if (!value) return { status: "idle", message: "" };
  if (value.length < 2) return { status: "error", message: "Name too short" };
  if (!/^[a-zA-Z\s\-'.]+$/.test(value))
    return { status: "error", message: "Letters only" };
  return { status: "success", message: "" };
}

export function validateEmail(value) {
  if (!value) return { status: "idle", message: "" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
    return { status: "error", message: "Enter a valid email address" };
  return { status: "success", message: "Looks good!" };
}

export function calcStrength(pw) {
  const rules = {
    len:     pw.length >= 8,
    upper:   /[A-Z]/.test(pw),
    num:     /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  const score = Object.values(rules).filter(Boolean).length;
  return { score, rules };
}

export function validatePassword(value) {
  if (!value) return { status: "idle", message: "", score: 0, rules: {} };
  const { score, rules } = calcStrength(value);
  if (score < 2)
    return { status: "error", message: "Password is too weak", score, rules };
  return { status: "success", message: "", score, rules };
}

export function validateConfirm(value, password) {
  if (!value) return { status: "idle", message: "" };
  if (value !== password)
    return { status: "error", message: "Passwords do not match" };
  return { status: "success", message: "Passwords match" };
}