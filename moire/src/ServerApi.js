import axios from 'axios';
import { BASE_API_URL } from './config';

export default class ServerApi {
  constructor() {}

  /**
   * Выполняет запрос к API
   * @param {string} apiPath API
   * @returns {object}
   */
  static async get(apiPath) {
    const response = await axios.get(BASE_API_URL + apiPath);
    console.log('get', response);
    return await response.data;
  }

  /**
   * Получить список цветов
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
  /**
   * Получить список сезонов
   * @typedef Season
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} code
   * @property {number} productsCount
   * @returns {Season[]}
   */
  static async getSeasons() {
    // /api/seasons
    const data = await ServerApi.get('/seasons');
    return data.items;
  }
  /**
   * Получить список способов доставки
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
  /**
   * Получить список материалов
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

  /**
   * Создать заказ
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
    // /api/orders
    const response = await axios.post('/orders', order);
    return response;
  }

  /**
   * Получить информацию о заказе
   * @param {string} orderId Идентификатор заказа
   * @param {string} accessKey Уникальный ключ пользователя
   */
  static async getOrderInfo(orderId, accessKey) {
    const data = await ServerApi.get(`/orders/${orderId}?userAccessKey=${accessKey}`);
    return data.items;
  }

  /**
   * Получить список способов оплаты по идентифиатору типа доставки
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

  /**
   * Получить список категорий
   * @typedef Category
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {string} slug
   * @returns {Category[]}
   */
  static async getProductCategories() {
    // /api/productCategories
    const data = await ServerApi.get(`/productCategories`);
    return data.items;
  }

  /**
   * Получить товар по идентификатору или `slug`
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
    const data = await ServerApi.get(`/products/${id}`);
    return data;
  }

  /**
   * Получить список товаров
   * @typedef ProductsQuery
   * @type {object}
   * @property {number} id Индентификатор категори или слаг
   * @property {Object<string, number>[]} [materials] Идентификаторы материала
   * @property {Object<string, number>[]} [seasons]
   * @property {Object<string, number>[]} [colors]
   * @property {number} [page]
   * @property {number} [limit]
   * @property {number} [minPrice]
   * @property {number} [maxPrice]
   * @param {ProductsQuery} params
   * @returns {Product[]}
   */
  static async getProducts(params = null) {
    let url = '/products';

    if (!params) console.log('has no params');
    let query = '?';
    if (params) {
      const entries = Object.entries(params).map((x) => `${x[0]}=${x[1]}`);

      entries.forEach((value) => {
        query += `${value}&`;
      });
      url += query.substring(0, query.length - 1);
    }
    console.log(url);
    const data = await ServerApi.get(url);
    return data;
  }
  /**
   * Получить ключ доступа для пользователя
   * @returns {string}
   */
  static async getUserAccessKey() {
    const data = await ServerApi.get(`/users/accessKey`);
    return data.items;
  }
}
