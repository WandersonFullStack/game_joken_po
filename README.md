# 🎮 Joken-Pô

Um jogo clássico de **Pedra, Papel e Tesoura** implementado em JavaScript puro, com interface moderna e intuitiva.

## 📋 Sobre o Projeto

Joken-Pô é uma implementação web do famoso jogo de Pedra, Papel e Tesoura (conhecido como "Jokenpo" no Japão). O jogador compete contra a máquina em partidas rápidas e divertidas, com sistema de pontuação em tempo real.

## ✨ Funcionalidades

- 🎯 **Jogo contra a máquina**: Algoritmo de escolha aleatória para o computador
- 🎨 **Interface moderna**: Design responsivo com efeitos visuais
- 🖱️ **Interação intuitiva**: Botões com emojis para cada jogada
- ⚡ **Feedback instantâneo**: Resultado imediato de cada partida

## 🎮 Como Jogar

1. Escolha sua jogada clicando em um dos botões:
   - 👊 **Pedra** (vermelho)
   - ✋ **Papel** (verde)  
   - ✌️ **Tesoura** (azul)

2. A máquina fará sua escolha automaticamente

3. O resultado será exibido instantaneamente:
   - **Pedra** vence **Tesoura**
   - **Papel** vence **Pedra**
   - **Tesoura** vence **Papel**

4. Acompanhe sua pontuação e tente vencer a máquina!

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno
- Conexão com internet (para imagens de fundo)

### Instalação
1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd joken-po
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
# No Linux/Mac
open index.html

# No Windows
start index.html

# Ou simplesmente arraste o arquivo para o navegador
```

## 📁 Estrutura do Projeto

```
joken-po/
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Estilos e layout responsivo
├── script.js           # Lógica do jogo em JavaScript
└── README.md           # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e efeitos visuais
  - Flexbox para layout responsivo
  - Transições e animações CSS
  - Background dinâmico com Picsum
- **JavaScript (ES6+)**: Lógica do jogo
  - Manipulação do DOM
  - Eventos de clique
  - Geração de números aleatórios

## 🎨 Características Visuais

- **Background dinâmico**: Imagens aleatórias do Picsum Photos
- **Container semi-transparente**: Efeito glass morphism
- **Botões interativos**: Efeitos hover com transformações
- **Paleta de cores**: Cores vibrantes para cada opção
- **Tipografia**: Fonte Poppins para melhor legibilidade

## 🔧 Funcionalidades Técnicas

### Sistema de Pontuação
- Contador independente para jogador e máquina
- Atualização em tempo real via DOM manipulation

### Lógica do Jogo
- Algoritmo determinístico para definir vencedor
- Escolha aleatória da máquina usando `Math.random()`
- Tratamento de empates

### Responsividade
- Layout adaptável para diferentes tamanhos de tela
- Botões otimizados para touch em dispositivos móveis

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas, sugestões ou melhorias, sinta-se à vontade para abrir uma issue no repositório.

---

⭐ Se você gostou do projeto, não esqueça de dar uma estrela no repositório! 