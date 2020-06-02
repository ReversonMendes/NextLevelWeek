### Backend

### Como executar ?
```bash
$~ yarn run dev
```

### Migrations



### Entidades
* ### Pontos de Coleta
  * Imagem
  * Nome
  * Email
  * Whatsapp
  * Endereço (GEO(lat, long))
    * Cidade, UF
* ### Itens de Coleta
  * Imagem
  * Título
* ### item_points(JOIN(Pontos de Coleta, Itens de Coleta))