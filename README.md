## Login form with Vue

Backend project: [`vue-login-form-backend`](https://github.com/peterdee/vue-login-form-backend)

Stack (frontend): [`Vue`](https://vuejs.org), [`Vue Router`](https://router.vuejs.org), [`Axios`](https://github.com/axios/axios), [`Bootstrap`](https://getbootstrap.com)

DEV: http://localhost:8080

STAGE: *in progress* 

Hardcoded user credentials:
```text
login: user@test.com
password: qwerty123
```

### Deploy

- `git clone https://github.com/peterdee/vue-login-form-frontend`
- `cd ./vue-login-form-frontend`
- `nvm use 13.1` (please see the actual Node version in [package.json](package.json) file)
- `npm i` (use `npm i --prod` for `stage` / `production`)

### Launch

Development:

- `npm run client`

Stage / production:

- `npm run build`

### Heroku

*in progress*
