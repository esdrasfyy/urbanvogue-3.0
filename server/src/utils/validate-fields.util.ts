export type ValidationRule = {
  regex: RegExp | null;
  message: string;
  optional?: boolean;
};

export const ValidateFields = <T extends Record<string, string>>(data: T, validators: { [key in keyof T]: ValidationRule }) => {
  for (const field in validators) {
    const value = data[field as keyof T];

    // Se o campo é opcional e não está presente, pule a validação
    if (validators[field as keyof T].optional && value === undefined) {
      continue;
    }

    // Se o campo é obrigatório e está ausente
    if (!value) {
      throw new Error(`the field ${field} is required!`);
    }

    // Verifica a regex
    if (validators[field as keyof T].regex && !validators[field as keyof T].regex.test(value)) {
      throw new Error(validators[field as keyof T].message);
    }
  }
};