// Conventional Commits, mas com assunto em português — a regra padrão de case
// (subject-case) assume inglês e recusaria "adiciona X", "corrige Y" etc.
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0],
  },
};
