export async function getProductos() {
  try {
    const response = await fetch(`${BASE_URL}/api/Productos`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error al obtener productos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en getProductos:', error);
    throw error;
  }
}

export async function addProducto(producto) {
  try {
    const response = await fetch(`${BASE_URL}/api/Productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(producto)
    });

    if (!response.ok) {
      throw new Error(`Error al agregar producto: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en addProducto:', error);
    throw error;
  }
}

export async function updateProducto(id, producto) {
  try {
    const response = await fetch(`${BASE_URL}/api/Productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(producto)
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar producto: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en updateProducto:', error);
    throw error;
  }
}

export async function deleteProducto(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/Productos/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar producto: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en deleteProducto:', error);
    throw error;
  }
}
