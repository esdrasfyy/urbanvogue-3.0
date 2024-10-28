export type ValidationRule = {
  regex: RegExp | null;
  message: string;
  optional?: boolean;
};

export const ValidateFields = <T extends Record<any, any>>(data: T, validators: { [key in keyof T]: ValidationRule }) => {
  for (const field in validators) {
    const value = data[field as keyof T];

    if (validators[field as keyof T].optional && (value === null || value === undefined)) {
      continue;
    }

    if (!value) {
      throw new Error(`the field ${field} is required!`);
    }

    if (validators[field as keyof T].regex && !validators[field as keyof T].regex.test(value)) {
      throw new Error(validators[field as keyof T].message);
    }
  }
};

export function RemoveNullValues(obj: any): any {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([key, value]) => (typeof value === "object" && !Array.isArray(value) ? [key, RemoveNullValues(value)] : [key, value]))
  );
}
