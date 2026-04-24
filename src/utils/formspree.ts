export type FormspreePayload = Record<string, string>;

export async function submitFormspree(endpoint: string | undefined, data: FormspreePayload) {
  if (!endpoint) {
    throw new Error("Falta configurar el endpoint de Formspree");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message = errorBody?.errors?.[0]?.message || "Error al enviar el formulario";
    throw new Error(message);
  }

  return true;
}
