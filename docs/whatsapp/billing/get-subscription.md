---
sidebar_label: "Ler assinatura"
sidebar_position: 1
---

# Ler assinatura

## Método

#### /getSubscription

`POST` <https://backend_ngrok_url_here/getSubscription>

---

## Atributos

### Obrigatórios

| Atributos | Tipo   | Descrição                                              |
| --------- | ------ | ------------------------------------------------------ |
| auth      | string | Autenticação Bitrix obtida via `window.BX24.getAuth()` |
| domain    | string | Domínio Bitrix. `"domain": "solinka.bitrix24.com"`     |

---

## Request Body

```json
{
  "auth": "5511999999999",
  "domain": "solinka.bitrix24.com"
}
```

---

## Response

### 200

| Atributos | Tipo   | Descrição                                              |
| --------- | ------ | ------------------------------------------------------ |
| auth      | string | Autenticação Bitrix obtida via `window.BX24.getAuth()` |
| domain    | string | Domínio Bitrix. `"domain": "solinka.bitrix24.com"`     |

Exemplo

```json
{
  "status": true,
  "dados": {
    "id": 891146,
    "status": "canceled",
    "currency": "USD",
    "billing_period": "year",
    "created_at": "2021-06-22 23:31:37.000000",
    "created_at_formated": "22/06/2021",
    "updated_at": "2022-06-21 13:42:17.000000",
    "updated_at_formated": "21/06/2022",
    "next_payment": "2022-06-22 23:31:37.000000",
    "next_payment_formated": "22/06/2022",
    "total": "0.00",
    "total_formated": "USD 0.00",
    "billing": {
      "first_name": "Yuri",
      "last_name": "da Silva",
      "company": "",
      "address_1": "Av. Dom Pedro II, 961",
      "address_2": "",
      "city": "Rancharia",
      "state": "SP",
      "postcode": "19600-000",
      "country": "BR",
      "email": "yurilucaspg@gmail.com",
      "phone": "(18) 99726-9664"
    },
    "items": [
      {
        "id": 23683,
        "product_id": 899327,
        "order_id": 891146,
        "name": "PowerZap Pro - Anual",
        "quantity": 1,
        "total": "450",
        "total_formated": "USD 450.00",
        "monthly_messages": 20000
      }
    ],
    "days_left": 0,
    "limited_numbers": true,
    "basic_numbers": 1,
    "pro_numbers": 5,
    "type": "trial"
  }
}
```
