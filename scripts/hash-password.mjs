import { createHash } from "node:crypto";
import { argv, exit } from "node:process";

const password = argv[2];

if (!password) {
  console.error("Usage: node scripts/hash-password.mjs <password>");
  exit(1);
}

console.log(createHash("sha256").update(password, "utf8").digest("hex"));
