## Visão geral


### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o site, dependendo do tamanho da tela do dispositivo.
- Ver estados de hover para todos os elementos interativos na página.
- Receber uma mensagem de erro quando o formulário é enviado se:
  - Qualquer `campo` de entrada estiver vazio. A mensagem de erro deve dizer *"[Nome do Campo] não pode estar vazio"*
  - O endereço de e-mail não estiver formatado corretamente (ou seja, um endereço de e-mail correto deve ter a seguinte estrutura: `nome@dominio.com`). A mensagem de erro para este caso deve dizer *"Parece que isso não é um e-mail*
  
### Captura de tela

![](./screenshot.jpg)


### Links

- URL do repositório : [Add solution URL here](https://your-solution-url.com)
- URL do site em produção: [Add live site URL here](https://your-live-site-url.com)

## Meu processo
1º Comecei com a estrutura em html, fazendo todo o esqueleto do projeto sendo o mais semântico possível//

2º Fui fazendo todo o estilo da pagina personalizando de acordo com o layout que me foi passado//

3º Adicionei a responsividade para varios tamanhos de tela. Exemplo: laptop 1024px, tablet 768px e para celular 375px//

4º Comecei a fazer a integração do JS no projeto, colocando ID no formulário e nos inputs para poder fazer aparecer um span quando o formulário não estivesse preenchido devidamente//

### Construído com

- HTML5 semântico
- Variáveis de CSS
- Flexbox
- CSS Grid
- Fluxo de trabalho "mobile-first"
- [Jquery](https://jquery.com) - Biblioteca JavaScript
- [Bootstrap](https://getbootstrap.com) - Para estilos


### O que eu aprendi

Aprendi a melhorar a integração do Js no HTML, manipulando o DOM ao favor do projeto. Aprendi a mexer muito com responsividade mesmo com certa dificuldade.

Se você deseja ajuda para adicionar trechos de código, veja abaixo:

```html
      <div id="formulario">
        <button type="submit" class="btn-free">
          Try it free 7 days then $20/mo. thereafter
        </button>
        <form id="form">
          <div class="form-group">
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              class="inputs required"
            />
            <span class="span-required"
              >First Name cannot be empty
              <img src="images/aviso.png" alt="alert" width="16" height="16"
            /></span>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              class="inputs required"
            />
            <span class="span-required"
              >Last Name cannot be empty
              <img src="images/aviso.png" alt="alert" width="16" height="16"
            /></span>
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="E-mail Address" class="inputs required" />
            <span class="span-required">
                E-mail cannot be empty 
                <img src="images/aviso.png" alt="alert" width="16" height="16">
            </span>
        </div>
        <div class="form-group">
            <input type="password" id="password" placeholder="Password" class="inputs required" />
            <span class="span-required">
                Password cannot be empty 
                <img src="images/aviso.png" alt="alert" width="16" height="16">
            </span>
        </div>
          <button type="submit" class="btn-submit">
            CLAIM YOUR FREE TRIAL
          </button>
          <p>
            By clicking the button, you are agreeing to our
            <a href="https://www.opovo.com.br/">Terms and Services</a>
          </p>
        </form>
      </div>
```
```css
.btn-free {
    padding: 14px;
    margin-bottom: 35px;
    width: 100%;
    max-width: 500px;
    height: 50px;
    font-weight: bolder;
    background: #5D54A3 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 0px #FE5756;
    border-radius: 5px;
    opacity: 1;
    color: white;
    border: none;
    cursor: pointer;
}

.btn-submit {
    font-weight: bolder;
    padding: 14px;
    background-color: #77E2B4;
    color: white;
    box-shadow: 0px 5px 0px #6ACCA1;
    border: none;
    border-radius: 5px;
    opacity: 1;
    cursor: pointer;
}
```
```js
campos.forEach((campo, index) => {
        if (!campo.value.trim()) {
            showError(index); // Exibe o span de erro se o campo estiver vazio
            isFormValid = false; // Formulário inválido
        } else {
            hideError(index); // Esconde o span de erro se o campo estiver preenchido
        }
    });
```
