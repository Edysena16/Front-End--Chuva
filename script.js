function exibir() {
  verMais = document.getElementById('resumo__id')
  verMais.style.minHeight = '400px'
  verMais.style.overflowY = 'visible'

  btnV = document.getElementById('btn-resExp')
  btnV.style.visibility = 'hidden'
}

function criarTopico() {
  bt_topic = document.getElementById('criar-topico')
  bt_topic.style.display = 'contents'

  painel = document.getElementById('discurssao-painel')
  painel.style.display = 'none'
}

function exibirResposta() {
  resp = document.getElementById('content-resp')
  resp.style.display = 'block'
}
