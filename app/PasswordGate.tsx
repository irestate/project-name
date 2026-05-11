"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./password-gate.module.css";

const configuredHash = process.env.SITE_PASSWORD_HASH?.trim();
const storageKey = "ir-estate-preview-auth";

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isUnlocked, setIsUnlocked] = useState(!configuredHash);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!configuredHash) {
      return;
    }

    const savedHash = window.localStorage.getItem(storageKey);
    setIsUnlocked(savedHash === configuredHash);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!configuredHash) {
      setError("公開用パスワードが未設定です。");
      return;
    }

    setIsChecking(true);
    setError("");

    const inputHash = await hashPassword(password);
    if (inputHash === configuredHash) {
      window.localStorage.setItem(storageKey, inputHash);
      setIsUnlocked(true);
      setPassword("");
    } else {
      setError("パスワードが正しくありません。");
    }

    setIsChecking(false);
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <main className={styles.screen}>
      <section className={styles.panel} aria-label="パスワード認証">
        <p className={styles.brand}>IR estate</p>
        <h1>閲覧にはパスワードが必要です</h1>
        <p className={styles.lead}>
          関係者向け確認ページです。共有されたパスワードを入力してください。
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="site-password">パスワード</label>
          <input
            id="site-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error ? <p className={styles.error}>{error}</p> : null}
          <button type="submit" disabled={isChecking || !password}>
            {isChecking ? "確認中" : "サイトを見る"}
          </button>
        </form>
      </section>
    </main>
  );
}
