<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puzzle Anti-Robô com Acessibilidade</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            transition: background 0.5s;
        }
        
        body.dark-mode {
            background: linear-gradient(135deg, #2c3e50, #1a1a2e);
            color: #f0f0f0;
        }
        
        .container {
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            width: 100%;
            text-align: center;
        }
        
        .dark-mode .container {
            background-color: rgba(40, 44, 52, 0.95);
            color: #f0f0f0;
        }
        
        h1 {
            margin-bottom: 20px;
            color: #333;
        }
        
        .dark-mode h1 {
            color: #f0f0f0;
        }
        
        .puzzle-container {
            margin: 20px 0;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
            border: 1px solid #dee2e6;
        }
        
        .dark-mode .puzzle-container {
            background-color: #2c3e50;
            border-color: #34495e;
        }
        
        .puzzle-question {
            font-size: 18px;
            margin: 15px 0;
            font-weight: 500;
            line-height: 1.6;
        }
        
        .puzzle-equation {
            font-family: 'Courier New', monospace;
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 20px;
            overflow-x: auto;
        }
        
        .dark-mode .puzzle-equation {
            background-color: #34495e;
        }
        
        .puzzle-options {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 25px 0;
        }
        
        .puzzle-option {
            padding: 15px;
            background-color: #e9ecef;
            border: 2px solid transparent;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
            text-align: left;
        }
        
        .puzzle-option:hover {
            background-color: #dee2e6;
            transform: translateY(-2px);
        }
        
        .dark-mode .puzzle-option {
            background-color: #34495e;
            color: #f0f0f0;
        }
        
        .dark-mode .puzzle-option:hover {
            background-color: #2c3e50;
        }
        
        .correct {
            background-color: #d4edda !important;
            color: #155724 !important;
            border-color: #c3e6cb !important;
        }
        
        .incorrect {
            background-color: #f8d7da !important;
            color: #721c24 !important;
            border-color: #f5c6cb !important;
        }
        
        .hidden {
            display: none;
        }
        
        .button {
            padding: 12px 25px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: all 0.3s;
        }
        
        .button:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
        }
        
        .dark-mode .button {
            background-color: #2980b9;
        }
        
        .dark-mode .button:hover {
            background-color: #1c6ea4;
        }
        
        .success-message {
            color: #28a745;
            font-weight: bold;
            margin: 15px 0;
            font-size: 18px;
        }
        
        .dark-mode .success-message {
            color: #2ecc71;
        }
        
        .theme-buttons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .accessibility-buttons {
            margin: 15px 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .high-contrast {
            background: #000 !important;
            color: #fff !important;
        }
        
        .high-contrast .container {
            background: #000 !important;
            color: #fff !important;
            border: 2px solid #fff;
        }
        
        .high-contrast .puzzle-container {
            background: #000 !important;
            color: #fff !important;
            border: 2px solid #fff;
        }
        
        .high-contrast .puzzle-option {
            background: #000 !important;
            color: #fff !important;
            border: 2px solid #fff;
        }
        
        .high-contrast .puzzle-equation {
            background: #222 !important;
            color: #ff0 !important;
            border: 1px solid #ff0;
        }
        
        .screen-reader-only {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Desafio Anti-Robô</h1>
        <p class="puzzle-question">Resolva este problema extremamente complexo para provar que você é humano:</p>
        
        <div class="puzzle-container" id="puzzle">
            <div class="puzzle-equation">
                ∫<sub>0</sub><sup>∞</sup> (x<sup>2</sup> / (e<sup>x</sup> - 1)) dx +<br>
                lim<sub>n→∞</sub> (1 + 1/n)<sup>n</sup> ×<br>
                ∑<sub>k=1</sub><sup>∞</sup> (1/k<sup>2</sup>) -<br>
                ∇²ψ(x,y,z) + (8π²m/h²)(E - V)ψ = 0
            </div>
            
            <p class="puzzle-question">Qual é a solução para esta equação?</p>
            
            <div class="puzzle-options">
                <button class="puzzle-option" onclick="checkAnswer(0)">42 - A resposta para a vida, o universo e tudo mais</button>
                <button class="puzzle-option" onclick="checkAnswer(1)">π²/6 + e + √2</button>
                <button class="puzzle-option" onclick="checkAnswer(2)">Não sou um robô, sou humano e não preciso resolver isso para provar</button>
                <button class="puzzle-option" onclick="checkAnswer(3)">A solução é trivial e deixada como exercício para o leitor</button>
            </div>
            
            <div class="accessibility-buttons">
                <button class="button" onclick="enableHighContrast()">Alto Contraste</button>
                <button class="button" onclick="disableHighContrast()">Cores Originais</button>
                <button class="button" onclick="readPuzzle()">Ler Puzzle</button>
            </div>
        </div>
        
        <div id="success-message" class="hidden">
            <p class="success-message">✅ Verificação concluída! Você provou com sucesso que é humano.</p>
            <p>Agora você pode imprimir o documento.</p>
            <button class="button" onclick="printDocument()">Imprimir Documento</button>
        </div>
        
        <div class="theme-buttons">
            <button class="button" id="modo-escuro">Modo Escuro</button>
            <button class="button" onclick="resetPuzzle()">Reiniciar Puzzle</button>
        </div>
    </div>

    <div id="screen-reader-text" class="screen-reader-only">
        Desafio Anti-Robô. Resolva este problema extremamente complexo para provar que você é humano.
        Integral de zero a infinito de x ao quadrado dividido por e elevado a x menos 1 dx, mais
        limite quando n tende a infinito de 1 mais 1 sobre n elevado a n, vezes
        somatório de k igual a 1 até infinito de 1 sobre k ao quadrado, menos
        Nabla ao quadrado de psi mais 8 pi ao quadrado m sobre h ao quadrado vezes E menos V vezes psi igual a zero.
        Qual é a solução para esta equação?
        Opção 1: 42 - A resposta para a vida, o universo e tudo mais.
        Opção 2: Pi ao quadrado sobre 6 mais e mais raiz quadrada de 2.
        Opção 3: Não sou um robô, sou humano e não preciso resolver isso para provar.
        Opção 4: A solução é trivial e deixada como exercício para o leitor.
    </div>

    <script>
        // Seleciona o botão com ID 'modo-escuro' e adiciona um listener de clique
        document.getElementById('modo-escuro').addEventListener('click', function() {
            // Alterna a classe 'dark-mode' no elemento body do documento
            document.body.classList.toggle('dark-mode');
        });
        
        // Função para verificar a resposta do puzzle
        function checkAnswer(optionIndex) {
            const options = document.querySelectorAll('.puzzle-option');
            const successMessage = document.getElementById('success-message');
            const puzzle = document.getElementById('puzzle');
            
            // A resposta correta é a opção 2 (não sou um robô)
            if (optionIndex === 2) {
                options[optionIndex].classList.add('correct');
                
                // Exibe mensagem de sucesso após um breve delay
                setTimeout(function() {
                    puzzle.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    speakText("Parabéns! Você provou que é humano. Agora pode imprimir o documento.");
                }, 1000);
            } else {
                // Resposta incorreta
                options[optionIndex].classList.add('incorrect');
                speakText("Resposta incorreta. Tente novamente.");
                
                // Remove a classe de incorreto após um breve período
                setTimeout(function() {
                    options[optionIndex].classList.remove('incorrect');
                }, 1000);
            }
        }
        
        // Função para imprimir o documento
        function printDocument() {
            window.print();
        }
        
        // Função para ativar alto contraste
        function enableHighContrast() {
            document.body.classList.add('high-contrast');
            speakText("Modo de alto contraste ativado.");
        }
        
        // Função para desativar alto contraste
        function disableHighContrast() {
            document.body.classList.remove('high-contrast');
            speakText("Modo de alto contraste desativado.");
        }
        
        // Função para ler o puzzle em voz alta
        function readPuzzle() {
            const text = document.getElementById('screen-reader-text').textContent;
            speakText(text);
        }
        
        // Função para usar a API de síntese de voz
        function speakText(text) {
            if ('speechSynthesis' in window) {
                const speech = new SpeechSynthesisUtterance(text);
                speech.lang = 'pt-BR';
                speech.rate = 1.0;
                speech.pitch = 1.0;
                speech.volume = 1.0;
                window.speechSynthesis.speak(speech);
            }
        }
        
        // Função para reiniciar o puzzle
        function resetPuzzle() {
            const puzzle = document.getElementById('puzzle');
            const successMessage = document.getElementById('success-message');
            const options = document.querySelectorAll('.puzzle-option');
            
            puzzle.classList.remove('hidden');
            successMessage.classList.add('hidden');
            
            options.forEach(option => {
                option.classList.remove('correct');
                option.classList.remove('incorrect');
            });
            
            speakText("Puzzle reiniciado. Tente novamente.");
        }
        
        // Adiciona instruções para o usuário
        setTimeout(function() {
            alert("Para imprimir, primeiro resolva o puzzle para provar que você não é um robô!");
            speakText("Para imprimir, primeiro resolva o puzzle para provar que você não é um robô!");
        }, 1000);
    </script>
</body>
</html>
