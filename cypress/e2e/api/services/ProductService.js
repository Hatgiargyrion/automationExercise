class ProductService {
  getProductList() {
    return cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList',
      failOnStatusCode: false
    }).then((response) => {
      if (typeof response.body === 'string') {
        response.body = JSON.parse(response.body);
      }
      return response;
    });
  }

}

export default new ProductService();
