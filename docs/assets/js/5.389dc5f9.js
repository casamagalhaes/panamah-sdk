(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(e,a,o){"use strict";o.r(a);var s=o(0),t=Object(s.a)({},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),o("p",[e._v("Eventos são disparados antes de salvar ou deletar modelos e quando erros no processamento assíncrono acontecem. Esses eventos servem para facilitar a validação e complemento de dados, bem como tratar situações inesperadas:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-delphi/wiki/Vis%C3%A3o-geral#Hooks-e-eventos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delphi"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-javascript/wiki/Vis%C3%A3o-geral#Hooks-e-eventos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-python/wiki/Vis%C3%A3o-geral#Hooks-e-eventos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),o("OutboundLink")],1)])]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),o("ol",[e._m(13),e._v(" "),o("li",[o("p",[e._v("Fazer a instalação da biblioteca específica da linguagem da sua aplicação")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-delphi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delphi"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-javascript",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),o("OutboundLink")],1)])])]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16)]),e._v(" "),e._m(17),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"./GUIDE.html"}},[e._v("Exemplos de uso")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"./#Plataformas"}},[e._v("Repositórios das bibliotecas")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-delphi/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wiki PanamahSDK Delphi"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-java/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wiki PanamahSDK Java"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-javascript/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wiki PanamahSDK Javascript"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/casamagalhaes/panamah-sdk-python/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wiki PanamahSDK Python"),o("OutboundLink")],1)])])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"introducao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducao","aria-hidden":"true"}},[this._v("#")]),this._v(" Introdução")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("p",[e._v("O PanamahSDK é dividido em três partes: "),o("code",[e._v("PanamahStream")]),e._v(", "),o("code",[e._v("PanamahAdmin")]),e._v(" e os modelos de dados prefixados com Panamah, e. g.: "),o("code",[e._v("PanamahLoja")]),e._v(" ou "),o("code",[e._v("PanamahProduto")]),e._v(".")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ul",[o("li",[o("p",[o("code",[e._v("PanamahStream")]),e._v(": API de manipulação dos dados. Permite o envio ou remoção de dados através dos métodos "),o("code",[e._v("save()")]),e._v(" e "),o("code",[e._v("delete()")]),e._v(", também disponibilizando a leitura de documentos fiscais através dos métodos "),o("code",[e._v("readNFe()")]),e._v(" e "),o("code",[e._v("readNFeDirectory()")]),e._v(". A leitura de documentos fiscais os transforma em modelos de dados, permitindo que o software apenas complemente propriedades que não são enviadas para SEFAZ, como por exemplo, o id da seção de um produto. Além disso, o Stream possui hooks que são úteis tanto na validação quanto na adição de informações.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("PanamahAdmin")]),e._v(": API de gerenciamento administrativo. Permite a criação e leitura de assinantes.")])]),e._v(" "),o("li",[o("p",[e._v("Modelos de dados: Os modelos de dados são utilizados pelas APIs para executar ações no servidor. Eles são a implementação da estrutura dos dados no Panamah, porém são validados localmente antes de serem salvos ou deletados, permitindo agilidade e evitando requisições desnecessárias.")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("img",{attrs:{src:"assets/img/panamah-sdk-simple-flow.png",alt:"sdk simple workflow"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("blockquote",[a("p",[a("strong",[this._v("Assinantes")]),this._v(" são os clientes que adquirem o software da empresa parceira.\n"),a("strong",[this._v("Empresas parceiras")]),this._v(" consomem os serviços do Panamah.")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"credenciais-e-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credenciais-e-tokens","aria-hidden":"true"}},[this._v("#")]),this._v(" Credenciais e tokens")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Todos os parceiros recebem um par de tokens de autenticação chamados "),a("code",[this._v("AuthorizationToken")]),this._v(" e "),a("code",[this._v("Secret")]),this._v(", que são usados para autorizar o uso das APIs do SDK. Esses tokens devem ser mantidos de forma segura, sob o risco de uso indevido por terceiros.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"execucao-continua-do-panamahstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execucao-continua-do-panamahstream","aria-hidden":"true"}},[this._v("#")]),this._v(" Execução contínua do PanamahStream")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("O fluxo de envio dos dados pelo "),a("code",[this._v("PanamahStream")]),this._v(" se dá de forma contínua após a sua inicialização pelo método "),a("code",[this._v("init()")]),this._v(" que recebe os tokens de autenticação e o id do assinante. Esse fluxo é executado assincronamente por thread ou agendamento de execução por intervalo no caso do javascript. Operações de salvamento ou deleção são escritas no disco em lotes que tem limite de tempo (5 minutos) e tamanho (5 KB). Quando atingido qualquer limite, uma requisição contendo as operações é disparada para o servidor. Devido a natureza assíncrona do fluxo de envios, é essencial que o método "),a("code",[this._v("flush()")]),this._v(" seja chamado no fim da execução da aplicação, evitando que dados que foram salvos no lote corrente e ainda não atingiram um limite, sejam enviados apenas na próxima execução da aplicação.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"hooks-e-eventos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-e-eventos","aria-hidden":"true"}},[this._v("#")]),this._v(" Hooks e eventos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"tratando-recursos-pendentes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tratando-recursos-pendentes","aria-hidden":"true"}},[this._v("#")]),this._v(" Tratando recursos pendentes")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("p",[e._v("O "),o("code",[e._v("PanamahStream")]),e._v(" dispõe do método de "),o("code",[e._v("getPendingResources()")]),e._v(" que retorna uma lista de modelos cujos dados completos não foram enviados para o Panamah, porém foram referenciados por modelos enviados anteriormente. Por exemplo: um produto Coca-Cola (id: 111) pertence a seção Bebidas (id: 999). Este produto foi salvo utilizando o modelo "),o("code",[e._v("PanamahProduto")]),e._v(" com a devida propriedade secaoId preenchida com 999, por motivo indeterminado, o serviço do parceiro não enviou a seção Bebidas (999) usando o modelo "),o("code",[e._v("PanamahSecao")]),e._v(". Executando o método "),o("code",[e._v("getPendingResources()")]),e._v(", uma lista contendo apenas um modelo "),o("code",[e._v("PanamahSecao")]),e._v(" seria retornada com somente a propriedade id preenchida com 999. Caberia ao software do parceiro percorrer a lista, preencher o restante dos dados e salvar os modelos com o "),o("code",[e._v("PanamahStream")]),e._v(".")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"passo-a-passo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passo-a-passo","aria-hidden":"true"}},[this._v("#")]),this._v(" Passo a passo")])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("p",[this._v("Obter os tokens de autenticação: AuthorizationToken e Secret.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("li",[o("p",[e._v("No bootstrap da aplicação, chamar a função "),o("code",[e._v("init()")]),e._v(" das APIs PanamahAdmin e PanamahStream\n")]),o("style",[e._v(".redblockquote blockquote { background: #ff000036; color: black; border-color: red; padding-top: 1px }")]),e._v(" "),o("div",{staticClass:"redblockquote"},[o("p"),e._v(" "),o("blockquote",[o("p",[o("sup",[o("strong",[e._v("Atenção:")]),e._v(" O id do assinante deve ser um valor único, sendo recomendável o uso do CNPJ do assinante, assim como um controle externo para que o envio de dados não seja realizado em ambiente de homologação, por exemplo através da checagem de diretivas de compilação ou chave de uso.")])])])]),o("p"),e._v(" "),o("blockquote",[o("p",[o("sup",[e._v("É possível criar um assinante usando o modelo PanamahAssinante com o método "),o("code",[e._v("createAssinante()")]),e._v(" da API PanamahAdmin.")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("p",[this._v("Utilizar as funções "),a("code",[this._v("save()")]),this._v(" e "),a("code",[this._v("delete()")]),this._v(" da API PanamahStream com os modelos de dados para enviar ou remover informações do Panamah.")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("p",[this._v("Na finalização da aplicação, chamar a função "),a("code",[this._v("flush()")]),this._v(" para garantir o envio de dados pendentes")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"mais-informacoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mais-informacoes","aria-hidden":"true"}},[this._v("#")]),this._v(" Mais informações")])}],!1,null,null,null);a.default=t.exports}}]);