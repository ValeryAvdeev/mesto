class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token;
  }

  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
  }

  getUser() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  editProfile({name, info}) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about: info
      })
    })
      .then(this._handleResponse)
  }

  addCard({name, link}) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._address}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  //нужно подставить свойство _id соответствующей карточки
  addLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  deleteLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  editAvatar(avatar) {
    // console.log(avatar)
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
      .then(this._handleResponse)
  }

}

export default Api;