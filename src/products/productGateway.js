const baseUrl = `https://5ef0d9f51faf160016b4d064.mockapi.io/api/v1/basket`;

export const fetchProductsList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((tasksList) => tasksList);
};

export const createProduct = (ProductData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(ProductData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to create product");
    }
  });
};

export const deleteProduct = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
  });
};

export const updateProducts = (id, count) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(count),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to update product");
    }
  });
};
