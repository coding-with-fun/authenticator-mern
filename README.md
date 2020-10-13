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
> Packages installed = **bcryptjs colors dotenv express express-validator jsonwebtoken mongoose**

```bash
npm i
```

### Client dependencies

> Path = authenticator-mern -> client
>
> Packages installed = Basic client dependencies + **axios**

```bash
npm i
```

---

## Setting up environment variables

> Path = mern-dev-connector

Create a new file **.env**

```bash
PORT=5000
MONGO_URI=<MongoDB connection URI>
JWT_SECRET=<A strong password>
```
