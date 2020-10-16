# MERN Authenticator

A starter MERN Authentication app.

---

## Installing dependencies

### Project dependencies

> Path = authenticator-mern
>
> Packages installed = **concurrently nodemon**

```bash
npm i
```

### Server dependencies

> Path = authenticator-mern -> server
>
> Packages installed = **bcryptjs colors cors dotenv express express-validator gravatar jsonwebtoken mongoose**

```bash
npm i
```

### Client dependencies

> Path = authenticator-mern -> client
>
> Packages installed = Basic client dependencies + **axios node-sass react-router-dom**

```bash
npm i
```

---

## Setting up environment variables

### Global environment variables

> Path = mern-dev-connector

Create a new file **.env**

```bash
PORT=5000
MONGO_URI=<MongoDB connection URI>
JWT_SECRET=<A strong password>
```

### Client environment variables

> Path = mern-dev-connector -> client

Create a new file **.env**

```bash
REACT_APP_SERVER_URL=<Server URL (example = http://localhost:5000)>
```
