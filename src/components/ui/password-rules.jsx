"use client";

import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const PasswordRules = ({ password = "" }) => {
  const rules = [
    {
      valid: password.length >= 8,
      text: "At least 8 characters",
    },
    {
      valid: /\d/.test(password),
      text: "At least 1 number",
    },
    {
      valid: /[a-z]/.test(password),
      text: "At least 1 lowercase letter",
    },
    {
      valid: /[A-Z]/.test(password),
      text: "At least 1 uppercase letter",
    },
  ];

  return (
    <div className="mt-5 rounded-xl border border-border bg-muted/40 p-4 transition-colors">
      <p className="mb-3 text-sm font-semibold text-foreground">
        Password Requirements
      </p>

      <div className="space-y-3">
        {rules.map((rule) => (
          <div
            key={rule.text}
            className={`flex items-center gap-3 text-sm transition-all duration-300 ${
              rule.valid
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-muted-foreground"
            }`}
          >
            {rule.valid ? (
              <FiCheckCircle className="h-4 w-4 shrink-0" />
            ) : (
              <FiXCircle className="h-4 w-4 shrink-0" />
            )}

            <span>{rule.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordRules;
