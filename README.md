## Proposta de Projeto — JavaScript Básico  
MVP: Controle de Estoque e Vendas

## Grupo
- Andreza Silva  
- Jamilly Sterphane  
- Joeslyany Luanda  

## Tema
Controle de Estoque
Nome: Sales (Compras)
## Descrição do Projeto
O Sales (Compras) é um site desenvolvido para permitir o registro de vendas, o gerenciamento de produtos e a visualização de tabelas e relatórios de forma simples e intuitiva.

O sistema possibilita que o usuário cadastre e gerencie produtos, informando nome, categoria, quantidade em estoque e valor unitário. A partir desses produtos cadastrados, é possível registrar vendas, realizando automaticamente a baixa no estoque conforme cada venda efetuada.

Todas as vendas são armazenadas como objetos dentro de arrays e exibidas dinamicamente em tabelas, utilizando a manipulação básica do DOM. O usuário pode visualizar uma tabela de vendas contendo informações como produto vendido, quantidade, valor unitário e subtotal.

Além disso, o site apresenta um relatório resumido com:
- Total de vendas realizadas
- Valor total faturado
- Métrica extra simples, como o total vendido por categoria

O sistema conta com validação de dados, garantindo que os campos sejam preenchidos corretamente e que os valores numéricos sejam maiores que zero. Também é possível remover vendas, fazendo com que o estoque e os totais sejam atualizados automaticamente.

Para evitar a perda de informações ao recarregar a página, o site utiliza o localStorage, salvando e recuperando os dados no formato JSON.

O projeto é desenvolvido como um MVP (Produto Mínimo Viável), com foco na aplicação dos fundamentos do JavaScript básico, sendo adequado ao nível iniciante e aplicável ao contexto de pequenos negócios.

## Conteúdos de JavaScript Utilizados
- Variáveis e tipos de dados
- Estruturas condicionais
- Laços de repetição para cálculos
- Funções com parâmetros e retorno
- Arrays e objetos
- Manipulação básica do DOM
- Uso de JSON e localStorage

## Paleta de Cores
A paleta de cores do site de Controle de Estoque é baseada em tons de azul, por transmitir confiança, organização e profissionalismo.

O azul escuro é utilizado nas áreas estruturais do site, como menus, topo e rodapé. O azul médio é aplicado em botões, links e ações principais. O azul claro é usado para destaques sutis, como efeitos de hover, cards e gráficos.

Cores neutras, como branco e tons de cinza, são utilizadas para manter a legibilidade e o equilíbrio visual. As cores de status (verde, amarelo e vermelho) indicam a situação do estoque, como produto disponível, estoque baixo ou sem estoque, mantendo harmonia com a paleta azul.

## Objetivo Final
Entregar um sistema simples, funcional e organizado de controle de vendas e estoque, aplicando conceitos fundamentais do JavaScript e reforçando a prática de desenvolvimento front-end para iniciantes.
