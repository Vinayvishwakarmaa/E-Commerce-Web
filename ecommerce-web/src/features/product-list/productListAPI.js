export function fetchAllProducts(amount = 1) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
   const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    resolve({ data })
  }
  );
}
