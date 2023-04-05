import axios from 'axios';
import { BASE_API_URL } from '../config';

export default class ServerApi {
  constructor() {}

  /** GET запрос к API
   *
   * @param {string} apiPath API
   * @returns {object}
   */
  static async get(apiPath) {
    const response = await axios.get(BASE_API_URL + apiPath);
    console.log(response);
    if (response.status === 200) return await response.data;
    else {
      console.log(response.data);
      return null;
    }
  }
  /** POST запрос к API
   *
   * @param {string} apiPath API
   * @param {object} body
   * @returns {object}
   */
  static async post(apiPath, body) {
    let response;
    try {
      response = await axios.post(BASE_API_URL + apiPath, body);
      if (response?.status === 200) return response.data;
    } catch (error) {
      console.log('jj');
      if (error?.response?.status === 400) return error.response.data;
    }
  }

  /** PUT запрос к API
   *
   * @param {string} apiPath API
   * @param {object} body
   * @returns {object}
   */
  static async put(apiPath, body) {
    const response = await axios.put(BASE_API_URL + apiPath, body);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  }

  /** DELETE запрос к API
   *
   * @param {string} apiPath API
   * @param {object} body
   * @returns {object}
   */
  static async delete(apiPath, body) {
    const response = await axios.delete(BASE_API_URL + apiPath, { data: body });
    //const response = axios.request({ url: BASE_API_URL + apiPath, data: body, method: 'delete' });
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  }

  /** Получить список цветов
   *
   * @typedef Color
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} code
   * @returns {Color[]}
   */
  static getColors() {
    // /api/colors
  }

  /** Получить список сезонов
   *
   * @typedef Season
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} code
   * @property {number} productsCount
   * @returns {Season[]}
   */
  static async getSeasons() {
    const data = await ServerApi.get('/seasons');
    return data.items;
  }
  /** Получить список способов доставки
   *
   * @typedef DeliveryOption
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} price
   * @returns {DeliveryOption[]}
   */
  static async getDeliveries() {
    const data = await ServerApi.get('/deliveries');
    return data.items;
  }
  /** Получить список материалов
   *
   * @typedef Material
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} code
   * @property {number} productsCount
   * @returns {Material[]}
   */
  static async getMaterials() {
    const data = await ServerApi.get('/materials');
    return data.items;
  }

  /** Создать заказ
   *
   * @typedef Order
   * @type {object}
   * @property {string} name ФИО
   * @property {string} address Адрес
   * @property {string} phone Телефон
   * @property {string} email E-mail
   * @property {number} deliveryTypeId
   * @property {number} paymentTypeId
   * @property {string} comment Комментарий
   * @param {string} accessKey уникальный ключ пользователя
   * @param {Order} order Информация о заказе
   */
  static async makeOrder(accessKey, order) {
    return await ServerApi.post(`/orders?userAccessKey=${accessKey}`, order);
  }

  /** Получить информацию о заказе
   *
   * @param {string} orderId Идентификатор заказа
   * @param {string} accessKey Уникальный ключ пользователя
   */
  static async getOrderInfo(orderId, accessKey) {
    const data = await ServerApi.get(`/orders/${orderId}?userAccessKey=${accessKey}`);
    return data.items;
  }

  /** Получить список способов оплаты по идентифиатору типа доставки
   *
   * @typedef Payment
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @param {number} deliveryTypeId Идентификатор типа доставки
   * @returns {Payment[]}
   */
  static async getPayments(deliveryTypeId) {
    const data = await ServerApi.get(`/payments?deliveryTypeId=${deliveryTypeId}`);
    return data.items;
  }

  /** Получить список категорий
   *
   * @typedef Category
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} slug
   * @returns {Category[]}
   */
  static async getProductCategories() {
    const data = await ServerApi.get(`/productCategories`);
    return data.items;
  }

  /** Получить товар по идентификатору или `slug`
   *
   * @typedef File
   * @type {object}
   * @property {string} url
   * @property {string} name
   * @property {string} originalName
   * @property {string} extension
   * @property {string} Size
   *
   * @typedef Image
   * @type {object}
   * @property {File} file
   *
   * @typedef ProductColor
   * @type {object}
   * @property {number} id
   * @property {Color} color
   * @property {Image[]} gallery
   *
   * @typedef Product
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} slug
   * @property {number} price
   * @property {ProductColor[]} colors
   * @property {Season[]} seasons
   * @property {Material[]} materials
   * @property {Size[]} sizes
   * @property {Category} category
   * @property {string} content
   * @param {string} id Идентификатор или `slug` товара
   */
  static async getProductById(id) {
    return await ServerApi.get(`/products/${id}`);
  }

  /** Получить список товаров
   *
   * @typedef ProductsQuery
   * @type {object}
   * @property {number} id Индентификатор категори или слаг
   * @property {number} [page]
   * @property {number} [limit]
   * @param {ProductsQuery} params
   * @returns {Product[]}
   */
  static async getProducts(params, routeQuery = null) {
    let url = '/products';

    if (!params) console.log('has no params');
    let queryPrimary = '?';
    if (params) {
      const entries = Object.entries(params).map((x) => `${x[0]}=${x[1]}`);

      entries.forEach((value) => {
        queryPrimary += `${value}&`;
      });

      let querySecondary = '';
      if (routeQuery) {
        Object.keys(routeQuery).forEach((key) => {
          if (typeof routeQuery[key] === 'string') {
            querySecondary += `${key}=${routeQuery[key]}&`;
          } else {
            const values = Array.from(routeQuery[key]);
            values.forEach((val) => {
              querySecondary += `${key}=${val}&`;
            });
          }
        });
      }
      url += queryPrimary;
      url += routeQuery ? querySecondary : '';
    }

    return await ServerApi.get(url);
  }
  /** Получить ключ доступа для пользователя
   * @returns {string}
   */
  static async getUserAccessKey() {
    return await ServerApi.get(`/users/accessKey`);
  }

  /** Получить корзину
   *
   * @typedef User
   * @type {object}
   * @property {number} id
   * @property {string} accessKey
   *
   * @typedef Cart
   * @type {object}
   * @property {number} id
   * @property {object[]} items
   * @property {User} user
   *
   * @param {string} accessKey
   * @returns {Cart}
   */
  static async getBasket(userAccessKey = null) {
    return await ServerApi.get(`/baskets` + `?userAccessKey=${userAccessKey}` || '');
  }

  /** Добавить товар в корзину
   *
   * @typedef CartItem
   * @type {object}
   * @property {string} productId Идентификатор или slug товара
   * @property {string} colorId Идентификатор цвета
   * @property {string} sizeId Идентификатор размера
   * @property {string} quantity Количество
   *
   * @param {string} userAccessKey Уникальный ключ пользователя
   * @param {CartItem} cartItem Информация о продукте в корзине
   * @returns {string} userAccessKey
   */
  static async addProductToBasket(cartItem, userAccessKey = null) {
    console.log(userAccessKey ? `?userAccessKey=${userAccessKey}` : '');
    console.log(cartItem);
    return await ServerApi.post(
      '/baskets/products' + (userAccessKey ? `?userAccessKey=${userAccessKey}` : ''),
      cartItem
    );
  }

  /** Изменить количество товара в корзине
   *
   * @param {*} basketItemId Идентификатор товара в корзине
   * @param {*} quantity Количество
   * @param {*} userAccessKey Уникальный ключ пользователя
   * @returns {Cart}
   */
  static async changeBasketQuantity(basketItemId, quantity, userAccessKey = null) {
    return await ServerApi.put(
      '/baskets/products' + (userAccessKey ? `?userAccessKey=${userAccessKey}` : ''),
      { basketItemId, quantity }
    );
  }

  /** Удаляет товар из корзины
   * @param {string} basketItemId Идентификатор товара в корзне
   * @param {string} userAccessKey Уникальный ключ пользователя
   * @returns {object}
   */
  static async deleteBasketProduct(basketItemId, userAccessKey) {
    //const body = {};
    //body['basketItemId'] = basketItemId;
    return await ServerApi.delete(
      '/baskets/products' + (userAccessKey ? `?userAccessKey=${userAccessKey}` : ''),
      { basketItemId: basketItemId }
    );
  }
}
