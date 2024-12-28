export default function handleUnknownError(error: unknown, defaultMessage: string): Error {
  if (error instanceof Error) {
    return new Error(error.message);
  }
  return new Error(defaultMessage);
}
