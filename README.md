## Login form with Vue

Stack (frontend): [`Vue`](https://vuejs.org), [`Vue Router`](https://router.vuejs.org), [`Axios`](https://github.com/axios/axios), [`Bootstrap`](https://getbootstrap.com)

Stack (backend): [`Koa`](https://koajs.com)

Frontend: http://localhost:8080

Backend: http://localhost:9000

Hardcoded user credentials:
```text
login: user@test.com
password: qwerty123
```

### Deploy

- `git clone https://github.com/peterdee/vue-login-form`
- `cd ./vue-login-form`
- `nvm use 13.1` (please see the actual Node version in [package.json](package.json) file)
- `npm i`

### Launch

Launch only the frontend:

- `npm run client`

Launch only the backend:

- `npm run server`

Create production build for the frontend:

- `npm run build`

Create production build for the frontend and serve static files:

- `npm run all`
