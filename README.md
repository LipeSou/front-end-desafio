# To Do Desafio Front-end Júnior

## Seja bem vindo a pagina Cats
Desafio feito para o processo seletivo do Grupo MGO: CEOS ENERGIA, B2R ENERGIA E BRA RENOVAVEIS

### Imagens:

### Link surge:
https://felipetestemgo.surge.sh/

## Dois menus "lista de gatos" e "formulário" 

### Lista de gatos: 

* Deve requisitar uma lista de tags no endereço: https://cataas.com/api/tags
* As tags deverão ser exibidas em forma de cards expansíveis.
* No título de cada card deve aparecer o nome da tag.
* Quando clicar no titulo do card, o corpo dele deve aparecer de forma a se expandir abaixo do título.
* Dentro do corpo do card deve aparecer uma lista dos ids obtidos como resposta do endereço https://cataas.com/api/cats, cujas a lista de tags contenha a tag do card selecionado. 

### Formulário:

- Exibe um formulário de cadastro em 3 etapas
- A primeira etapa deve solicitar:
	- Email (obrigatório)
	- Senha (obrigatório)
	- Confirmação de senha (obrigatório)
- A segunda etapa deve solicitar:
	- Nome (obrigatório)
	- Sobrenome (obrigatório)
	- Data de nacimento
- A terceira etapa deve solicitar:
	- Endereço completo (obrigatório)
- As etapas devem ser mostradas uma de cada vez, com abas para que o usuário alterne livremente entre elas
- Cada etapa precisa necessariamente ser escrita em um React Component separado
- Em cada etapa deve haver um botão de avançar para a próxima etapa
- Em todas as estapas o botão de enviar deve estar visível, mas ficará desabilitado até que todo o cadastro das 3 abas esteja concluído
- Caso haja algum erro de formulário em alguma etapa, a aba daquela etapa deve ter um indicador visual de erro
- Quando preencher uma etapa corretamente, a aba daquela etapa deve ter um indicador visual de concluída
- Quando todas as etapas forem preenchidas corretamentes e o usuário clicar em "enviar", deve aparecer uma modal de confirmação de sucesso na tela.
