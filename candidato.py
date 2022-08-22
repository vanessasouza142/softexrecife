/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0
O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos 
*/

from codecs import BufferedIncrementalEncoder

def votacao(candidato):  # fução para votação com a variavel candidato como argumento
    global candidato_X, candidato_Y, candidato_Z, branco
 
    if candidato.isalpha():  # checa se candidato contem apenas letras
        if candidato == 'Fim' or candidato == 'fim' or candidato == 'FIM':
            print('FIM DA VOTAÇÃO')
            print_resultados()

    elif candidato.isnumeric():  # checa se candidato e um caracter numerico
        if candidato == '1' or candidato == '2' or candidato == '3' or candidato == '4':
            if candidato == '1':
                candidato_Y += 1
            elif candidato == '2':
                candidato_X += 1
            elif candidato == '3':
                candidato_Z += 1
            elif candidato == '4':
                branco += 1
        else:  # se o valor digitado nao e valido, há entrada de novo candidato e a funcao repete
            candidato= str(input('Digite um numero valido para o candidato: '))
            votacao(candidato)


def print_resultados():  # printa resultados e encerra programa
    global candidato_X, candidato_Y, candidato_Z, branco

    print('QUANTIDADE DE VOTOS:\n')
    print('CANDIDATO Y - TOTAL DE ' + str(candidato_Y))
    print('CANDIDATO X - TOTAL DE ' + str(candidato_X))
    print('CANDIDATO Z - TOTAL DE ' + str(candidato_Z))
    print('VOTOS NULOS - TOTAL DE ' + str(branco))

    exit()  # encerra prog


#main 
candidato_X = 0
candidato_Y = 0
candidato_Z = 0
branco = 0

while True:  # laço ocorre indefinidamente ate que ocorra o 'Fim'
    candidato = str(input('ELEIÇÃO ESPECIAL\nDigite o numero do seu candidato: '))
    votacao(candidato)
