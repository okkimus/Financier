const getErrorMessage = (e: unknown, fallback = "Happened"): string => {
  if (e instanceof Error) {
    return e.message;
  } else if (typeof e === "string") {
    return e;
  } else if (typeof e === "number") {
    return e.toString();
  }

  // Just stringify any object as a fallback
  return fallback;
};

export { getErrorMessage };
