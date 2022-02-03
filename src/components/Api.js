class Api{
  constructor({address, token}) {
    this._address = address;
    this._token = token;
  }

  getCard() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        // res.ok
        //   ? res.json()
        //   : Promise.reject(`Ошибка ${res.status}`)
        if(res.ok) {
          console.log(res.json())
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
  }
}

export default Api;