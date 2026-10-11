# GeLetra

O **GeLetra** é uma ferramenta para criar vídeos com um efeito de escrita progressiva, exibindo um texto caractere por caractere em um console personalizável. Você pode organizar o conteúdo em trechos, controlar o tempo de escrita, adicionar pausas e personalizar as cores e a fonte antes de gerar o vídeo.

## Funcionalidades

* **Escrita animada:** exibe o texto gradualmente, caractere por caractere.
* **Múltiplos trechos:** divida o conteúdo em partes e configure cada uma individualmente.
* **Controle de tempo:** defina quanto tempo cada trecho levará para ser escrito.
* **Pausas personalizadas:** adicione intervalos entre os trechos.
* **Personalização visual:** altere a cor do fundo, a cor do texto, a fonte e o tamanho da letra.
* **Fontes personalizadas:** importe fontes por meio de arquivos ZIP compatíveis.
* **Pré-visualização:** execute a animação antes de gerar o vídeo.
* **Exportação de vídeo:** grave a animação e gere um arquivo chamado `GeLetra.mp4`.

## Como usar

### 1. Escreva seu texto

Na área de edição, digite o texto que deseja exibir no vídeo.

Você pode organizar o conteúdo em diferentes trechos:

* Clique em **+** para adicionar um novo trecho.
* Use o botão **x** do trecho para removê-lo.
* Use o botão **−** para remover todos os trechos.

Separar o texto em partes permite controlar individualmente o tempo e as pausas de cada segmento.

### 2. Configure cada trecho

Cada trecho possui quatro campos numéricos. Da esquerda para a direita, eles controlam:

1. **Memória do trecho:** quando o valor é maior que zero, a memória é limpa ao final do trecho.
2. **Tempo de escrita:** define, em segundos, quanto tempo será usado para escrever o texto daquele trecho. O tempo é distribuído entre os caracteres.
3. **Pausa:** define, em segundos, quanto tempo esperar após a escrita do trecho.
4. **Continuidade da memória:** quando o valor é maior que zero e o primeiro campo está zerado, o texto acumulado pode ser mantido para continuar a sequência nos próximos trechos.

Os campos aceitam valores numéricos, inclusive decimais. Se um campo ficar vazio, ele será tratado como zero.

**Dica:** para uma escrita mais lenta, aumente o tempo de escrita. Para criar um intervalo entre duas partes do texto, ajuste o campo de pausa do trecho anterior.

### 3. Personalize a aparência

Abra as opções de edição para personalizar o console.

Você pode ajustar:

* **Cor do fundo:** escolha a cor de fundo do console.
* **Cor do texto:** escolha a cor utilizada na escrita.
* **Fonte:** selecione uma das fontes disponíveis.
* **Tamanho da letra:** ajuste o tamanho do texto pelo controle deslizante.
* **Fonte personalizada:** importe um arquivo ZIP de até 500 KB contendo uma fonte compatível.

As fontes personalizadas podem estar nos formatos `.ttf`, `.otf`, `.woff` ou `.woff2`.

As preferências visuais são armazenadas no navegador, e as fontes importadas são guardadas localmente para uso posterior no mesmo navegador.

### 4. Visualize a animação

Clique em **Executar** para testar a escrita antes de gravar.

Observe o ritmo dos caracteres e as pausas entre os trechos. Se necessário, volte à edição e ajuste os valores até obter o resultado desejado.

A pré-visualização não é a mesma coisa que exportar o vídeo.

### 5. Gere o vídeo

Quando estiver satisfeito com o resultado:

1. Clique no botão de download para iniciar a gravação.
2. Aguarde a execução da animação e o processamento do vídeo.
3. Quando a exportação terminar, salve o arquivo gerado.

O arquivo final é identificado como `GeLetra.mp4`.

Durante a gravação, o botão muda para **Parar gravação**. Ao clicar nele, você cancela a gravação em andamento.

## Dicas para obter um bom resultado

* Use trechos menores quando quiser controlar melhor o ritmo.
* Evite definir um tempo de escrita muito curto para textos longos, pois os caracteres aparecerão rapidamente.
* Utilize pausas para separar visualmente partes importantes.
* Confira a combinação entre a cor do fundo e a cor do texto para manter uma boa legibilidade.
* Sempre execute uma pré-visualização antes de exportar o vídeo.

## Requisitos

Para utilizar o GeLetra, é necessário um navegador moderno compatível com os recursos de gravação de mídia utilizados pelo site.

A exportação também depende dos arquivos do FFmpeg WebAssembly presentes na pasta `ffmpeg`:

* `ffmpeg.js`
* `ffmpeg-core.js`
* `ffmpeg-core.wasm`

O projeto utiliza o JSZip para trabalhar com arquivos ZIP de fontes personalizadas.

Para evitar problemas com o carregamento dos arquivos locais, recomenda-se executar o site por meio de um servidor web ou hospedá-lo em um serviço compatível.

## Observações

* O GeLetra cria uma animação visual de escrita. O código atual não gera narração ou áudio automaticamente.
* As configurações visuais são salvas no navegador utilizado.
* A disponibilidade da exportação depende da compatibilidade do navegador e do carregamento correto dos arquivos necessários.
* A interface visual depende dos estilos CSS do projeto. Se esses estilos não estiverem presentes, a aparência e a disposição dos elementos poderão ser diferentes do esperado.

---

**GeLetra**
Transforme texto em uma animação de escrita personalizável.
