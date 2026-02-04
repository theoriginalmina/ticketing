# Ticketing app built with microservice architecture

### Technologies used

- Node.js
  ├── express
  ├── express validator
  ├── mongoose
  ├── mongoose
- MongoDB
- NextJS

- Docker
- Kubernetes
- Ingress-nginx
- Skaffold

### Packages

```
react-app
├── config
│   └── webpack.config.js
├── components
│   ├── Modal
│   ├── Form
│   └── Table
├── pages
│   ├── home
│   ├── app
│   └── help
├── package.json
└── package-lock.json
```

# Create a secret in kubectl for jwt

1. jwt-secret
   `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=thekey`
2. stripe-secret
   `kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=thekey`

## kubectl create secret generic jwt-secret --from-literal=JWT_KEY=thekey

"
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=thekey
"

## Secrets

1. Create a secret in kubectl for jwt
   `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=thekey`
