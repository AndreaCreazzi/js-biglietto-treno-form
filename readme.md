# Traccia
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
<br>
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
<br>
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.
<br>
<br>
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.   La risposta finale (o output) sarà anch’essa da scrivere in console.
<br>
<br>
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag form) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


## Passaggi
1. Prendo l'elemento dal DOM
2. Chiedo all'utente quanti chilometri vuole percorrere
3. Chiedo all'utente l'età
4. inserisco il prezzo del bigletto
5. Calcolo il prezzo del bigletto in base ai chilometri
6. Calcolo lo sconto del 20% per i minori di 18 anni
7. Calcolo lo sconto del 40% per i minori di 65 anni
8. Applico gli sconti
9. inserire l'elemento nel DOM