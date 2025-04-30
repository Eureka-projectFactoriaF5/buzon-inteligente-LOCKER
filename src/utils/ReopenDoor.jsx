export const ReopenDoor = async (setMessage, motivo = "Reabrir puerta") => {
  try {
    //falta en ENDPOINT!!
    const response = await fetch({/*"/api/abrir-puerta"*/}, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ motivo }),
    });

    if (!response.ok) {
      throw new Error("Error al abrir la puerta");
    }

    setMessage("🔓 Se ha vuelto a abrir la puerta");
  } catch (error) {
    console.error("❌ Error al abrir la puerta:", error);
    setMessage("❌ No se pudo abrir la puerta. Intenta de nuevo.");
  }
};

  