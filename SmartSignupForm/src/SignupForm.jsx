import { useCallback, useState } from "react";
import styles from "./SignupForm.module.css";
import FieldIcon from "./components/FieldIcon";
import Hint from "./components/Hint";
import StrengthMeter from "./components/StrengthMeter";
import {
    validateConfirm,
    validateEmail,
    validateName,
    validatePassword,
} from "./utils/validators";

export default function SignupForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback((key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  }, []);

  const nameV    = validateName(fields.name);
  const emailV   = validateEmail(fields.email);
  const pwV      = validatePassword(fields.password);
  const confirmV = validateConfirm(fields.confirm, fields.password);

  const isValid =
    nameV.status === "success" &&
    emailV.status === "success" &&
    pwV.status === "success" &&
    confirmV.status === "success";

  const inputClass = (status) =>
    `${styles.input}${status === "success" ? ` ${styles.valid}` : status === "error" ? ` ${styles.invalid}` : ""}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          New Account
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Create your<br /><em>account.</em>
        </h1>
        <p className={styles.subtitle}>All fields are validated in real-time.</p>

        {/* Name */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <div className={styles.inputWrap}>
            <input
              id="name"
              className={inputClass(nameV.status)}
              type="text"
              placeholder="Jane Doe"
              autoComplete="off"
              value={fields.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <FieldIcon status={nameV.status} />
          </div>
          <Hint status={nameV.status} message={nameV.message} />
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <div className={styles.inputWrap}>
            <input
              id="email"
              className={inputClass(emailV.status)}
              type="email"
              placeholder="jane@example.com"
              autoComplete="off"
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <FieldIcon status={emailV.status} />
          </div>
          <Hint status={emailV.status} message={emailV.message} />
        </div>

        {/* Password */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">Password</label>
          <div className={styles.inputWrap}>
            <input
              id="password"
              className={inputClass(pwV.status)}
              type={showPw ? "text" : "password"}
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              value={fields.password}
              onChange={(e) => update("password", e.target.value)}
            />
            <button
              type="button"
              className={styles.togglePw}
              onClick={() => setShowPw((v) => !v)}
              tabIndex={-1}
            >
              {showPw ? "hide" : "show"}
            </button>
          </div>
          {fields.password && (
            <StrengthMeter score={pwV.score} rules={pwV.rules} />
          )}
          <Hint status={pwV.status} message={pwV.message} />
        </div>

        {/* Confirm Password */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirm">Confirm Password</label>
          <div className={styles.inputWrap}>
            <input
              id="confirm"
              className={inputClass(confirmV.status)}
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
              value={fields.confirm}
              onChange={(e) => update("confirm", e.target.value)}
            />
            <FieldIcon status={confirmV.status} />
          </div>
          <Hint status={confirmV.status} message={confirmV.message} />
        </div>

        <hr className={styles.divider} />

        {/* Submit */}
        <button
          className={styles.submitBtn}
          disabled={!isValid}
          onClick={() => isValid && setSubmitted(true)}
        >
          Create Account →
        </button>

        <p className={styles.signinText}>
          Already have an account?{" "}
          <a href="#">Sign in</a>
        </p>

        {/* Success Overlay */}
        <div className={`${styles.successOverlay}${submitted ? ` ${styles.show}` : ""}`}>
          <div className={styles.successIcon}>✦</div>
          <h2>You're in.</h2>
          <p>Account created successfully.<br />Welcome aboard.</p>
        </div>
      </div>
    </div>
  );
}