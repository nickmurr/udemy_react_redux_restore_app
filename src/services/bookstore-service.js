/* eslint-disable class-methods-use-this */
export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler'
      },
      {
        id: 1,
        title: 'Release It!',
        author: 'Michael T. Nygard'
      }
    ];
  }
}
