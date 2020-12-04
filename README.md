# Circuit Breaker

O cenário fictício terá duas aplicações, sendo a primeira onde será implementado o circuit breaker, ela tem como serviço agendamentos de datas de entrega. Já a segunda aplicação é o serviço externo que a primeira utiliza para consultar os fériados, para caso o cliente solicite uma data de entrega que seja fériado, retorne para ele escolher outro dia. 

- primeira aplicação: **myapp**
- segunda aplicação: **external-service**

---

## Dependências

- [got](https://www.npmjs.com/package/got) - lib para lidar com requisições HTTP.

- [opossum](https://www.npmjs.com/package/opossum) - lib para implementar o circuit break.

## Instalação

Na raiz do projeto execute o comando abaixo:

```
$ npm i
``` 

## Executar

Abra dois terminais na raiz do projeto e execute os dois comandos um em cada terminal:

```
$ npm run myapp
```

```
$ npm run external-service
```

Agora pode brincar de fazer as requisições para o **myapp**. Como teste pare o serviço **external-service** e veja o que acontece:

```
$ curl --location --request POST 'http://localhost:3001/deliveries/schedule' \
--header 'Content-Type: application/json' \
--data-raw '{
    "schedule_date": "01/02/2021"
}'
```