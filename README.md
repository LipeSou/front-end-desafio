# To Do Desafio Front-end Júnior

## Olá, seja bem vindo a pagina Cats 
Desafio feito para o processo seletivo do Grupo MGO: CEOS ENERGIA, B2R ENERGIA E BRA RENOVAVEIS

### Link surge:
https://felipetestemgo.surge.sh/

### Imagens:
![image](https://user-images.githubusercontent.com/68256101/132262684-bd792117-4465-40f1-92d7-5ce01c252d38.png)
![image](https://user-images.githubusercontent.com/68256101/132262717-c5f5de3e-67b5-4d7a-9a0b-cac56a65d73c.png)
![image](https://user-images.githubusercontent.com/68256101/132262787-79324a21-aac6-44d4-b562-00fb64b65259.png)
![image](https://user-images.githubusercontent.com/68256101/132263770-2da14b1d-9bea-43ec-bb10-12deb8f7073c.png)

## Dois menus "lista de gatos" e "formulário" 

### Lista de gatos: 

* Deve requisitar uma lista de tags no endereço: https://cataas.com/api/tags :heavy_check_mark:
* As tags deverão ser exibidas em forma de cards expansíveis. :heavy_check_mark:
* No título de cada card deve aparecer o nome da tag. :heavy_check_mark:
* Quando clicar no titulo do card, o corpo dele deve aparecer de forma a se expandir abaixo do título. :heavy_check_mark:
* Dentro do corpo do card deve aparecer uma lista dos ids obtidos como resposta do endereço https://cataas.com/api/cats, cujas a lista de tags contenha a tag do card selecionado.  :heavy_check_mark:

### Formulário:

- Exibe um formulário de cadastro em 3 etapas :heavy_check_mark:
- A primeira etapa deve solicitar: :heavy_check_mark:
	- Email (obrigatório)
	- Senha (obrigatório)
	- Confirmação de senha (obrigatório)
- A segunda etapa deve solicitar: :heavy_check_mark:
	- Nome (obrigatório)
	- Sobrenome (obrigatório)
	- Data de nacimento
- A terceira etapa deve solicitar: :heavy_check_mark:
	- Endereço completo (obrigatório)
- As etapas devem ser mostradas uma de cada vez, com abas para que o usuário alterne livremente entre elas :heavy_check_mark:
- Cada etapa precisa necessariamente ser escrita em um React Component separado :heavy_check_mark:
- Em cada etapa deve haver um botão de avançar para a próxima etapa :heavy_check_mark:
- Em todas as estapas o botão de enviar deve estar visível, mas ficará desabilitado até que todo o cadastro das 3 abas esteja concluído :heavy_check_mark:
- Caso haja algum erro de formulário em alguma etapa, a aba daquela etapa deve ter um indicador visual de erro :heavy_check_mark:
- Quando preencher uma etapa corretamente, a aba daquela etapa deve ter um indicador visual de concluída :heavy_check_mark:
- Quando todas as etapas forem preenchidas corretamentes e o usuário clicar em "enviar", deve aparecer uma modal de confirmação de sucesso na tela. :heavy_check_mark: