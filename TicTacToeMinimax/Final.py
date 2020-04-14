from os import system
import time
from math import inf as infinity

#Maakt een array voor het bord
board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

#De "border" die verschijnt nadat de AI heeft gespeeld
def printBorder():
  print('____________________________________________________________________________________________________' + 
        '____________________________________________________________________________________________________' +
        '________________')

#Print het bord op basis van de board array
def printBoard(board):
  print(' ', board[6], '|', board[7], '|', board[8], ' ')
  print('-------------')
  print(' ', board[3], '|', board[4], '|', board[5], ' ')
  print('-------------')
  print(' ', board[0], '|', board[1], '|', board[2], ' ')

#Checkt voor de beschikbare plekken op het bord 
def availspots(board):
  result = []
  for i,j in enumerate(board):
    if j ==  ' ':
      result.append(i)
  
  return result

#Zorgt er voor dat de speler een 'X' kan plaatsen
def human_turn(board):

  #Checkt hoeveel plekker er leeg zijn op het bord. Als dit 0 is, stopt het spel
  depth = len(availspots(board))
  if depth == 0 or game_over(board):
    return

  move = -1

  while move < 1 or move > 9:
    
    while depth >= 9:
      print('')
      print('Human turn \n')
      break
    
    #Print het bord
    printBoard(board)
    #Voer nummer 1-9 in om je 'X' te plaatsen 
    move = int(input('Enter position 1-9: '))

    #Checkt of het een geldige zet is
    if move <= 9 and move >= 1:

      #Checkt of de plek vrij is
      if board[move-1] ==  ' ':
        move -= 1
        board[move] = 'X'
        printBoard(board)
        time.sleep(0.5)
        return
      else:
        print('This position is already taken')
        move = -1
        time.sleep(1)

    #Checkt of het ingevoerde nummer meer is dan 9 of minder dan 1
    else:
      print('Invalid move')
      move = -1
      time.sleep(1)

#Zorgt er voor dat de AI een zet kan doen
def AI_Move():
  #Checkt hoeveel plekker er leeg zijn op het bord. Als dit 0 is, stopt het spel
  depth = len(availspots(board))
  if depth == 0 or game_over(board):
    return
  
  #Start het minimax algoritme
  move = minimax(board, depth, 'O')
  
  #Print een "O" op de meest gunstige positie
  board[move[0]] = 'O'
  printBorder()


def minimax(board, depth, player):

  #Bepaalt de beste score voor de AI
  if player == 'O':
    best = [-1, -infinity]
  else:
    best = [-1, infinity]

  if depth == 0 or game_over(board):
    score = evaluate(board)
    return[-1, score]

  #Checkt alle mogelijke uitkomsten op basis van het huidige bord
  for cell in availspots(board):

    #Zet een 'X' of 'O' op de plek cell in het bord 
    board[cell] = player

    #Roept de minimax functie op zichzelf. Hierdoor krijg je het boomdiagram met alle mogelijke uitkomsten. Dit is kenmerkend voor het minimax algortime
    if player == 'O':
      score = minimax(board, depth - 1, 'X')
    else:
      score = minimax(board, depth - 1, 'O')
    
    #Maakt de plek weer leeg
    board[cell] =  ' '
    score[0] = cell

    if player == 'O':
      if best[1] < score[1]:
        best = score

    else:
      if best[1] > score[1]:
        best = score

  return best

#Checkt welke speler heeft gewonnen en geeft daar een score aan
def evaluate(state):
  if winner(state, 'O'):
    score = +1

  elif winner(state, 'X'):
    score = -1

  else:
    score = 0

  return score 

#Checkt of een speler drie op een rij heeft
def winner(state, player):

  #Maakt een array waat alle winnende posities in staan
  win_state = [

    #Horizontaal
    [state[0], state[1], state[2]],
    [state[3], state[4], state[5]],
    [state[6], state[7], state[8]],

    #Verticaal
    [state[0], state[3], state[6]],
    [state[1], state[4], state[7]],
    [state[2], state[5], state[8]],

    #Diagonaal
    [state[0], state[4], state[8]],
    [state[2], state[4], state[6]],
  ]

  #Checkt of de speler 3 op een rij heeft.
  if [player, player, player] in win_state:
    return True
  else:
    return False

#Bepaalt wie heeft gewonnen
def game_over(state):
  return winner(state, 'X') or winner(state, 'O')

#Zorgt voor de opzet van heet spel
def main(board):

  #Zorgt er voor dat de speler en de AI kunnen zetten zolang er nog plekken vrij zijn
  while len(availspots(board)) > 0 and not game_over(board):
    human_turn(board)
    AI_Move()
  
  #Laat een bericht zien afhangende van wie heeft gewonnen. Er staat nog in dat de speler kan winnen, maar dit is eigenlijk overbodig.
  if winner(board, 'X'):
    print('Congratulations! You won!')
    return 0
  
  elif winner(board, 'O'):
    print('AI won!')
    return 0

  #Print "Draw" als er gelijk is gespeeld
  else:
    print('Draw')
    return 0

#Checkt of de game nog gespeeld wordt
if __name__ == '__main__':
  while True:
    main(board)
    board = [ ' ',  ' ',  ' ',  ' ',  ' ',  ' ',  ' ',  ' ',  ' ']

    #Vraagt om een input van "y" of "n". Op basis hiervan kun wordt het spel opnieuw gestart of afgesloten
    again = input('Do you want to play again? (y/n): ')
    if again == 'n':
      break
