const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export function getUsers() {
    return fetch(USERS_URL).then((res) => res.json());
}

export function deleteUser(id) {
    return fetch(USERS_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createUser(newUser) {
    return fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
