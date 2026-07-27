import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const PasswordRules = ({ password = "" }) => {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  const rules = [
    {
      valid: hasMinLength,
      text: "At least 8 characters",
    },
    {
      valid: hasNumber,
      text: "At least 1 number",
    },
    {
      valid: hasLowercase,
      text: "At least 1 lowercase letter",
    },
    {
      valid: hasUppercase,
      text: "At least 1 uppercase letter",
    },
  ];

  return (
    <div className="mt-4 space-y-2">
      {rules.map((rule) => (
        <div
          key={rule.text}
          className={`flex items-center gap-2 text-sm transition-colors ${
            rule.valid ? "text-green-600" : "text-slate-400"
          }`}
        >
          {rule.valid ? (
            <FiCheckCircle className="shrink-0" />
          ) : (
            <FiXCircle className="shrink-0" />
          )}

          <span>{rule.text}</span>
        </div>
      ))}
    </div>
  );
};

export default PasswordRules;
