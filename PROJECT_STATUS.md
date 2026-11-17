# OMNI — Project Status

**Data:** 16 novembre 2026  
**Stato:** Fase 1 — Prima versione della linguetta desktop implementata localmente; installazione e verifica runtime ancora da eseguire nel terminale autorizzato.

## Riepilogo del lavoro svolto

- Definita la visione generale di OMNI come assistente AI desktop per Windows, con presenza integrata nel bordo dello schermo.
- Stabilito che il progetto sarà sviluppato progressivamente per fasi, senza costruire tutte le funzionalità contemporaneamente.
- Verificato che il repository locale era inizialmente vuoto e senza commit.
- Creato il collegamento di verifica con il repository remoto:
  `https://github.com/Buppino/OMNI.git`
- Verificato che il repository remoto non restituisce ancora branch o commit.
- Creata la struttura locale delle sette fasi di sviluppo.
- Mantenuta la separazione tra file del prodotto OMNI e strumenti/configurazioni dell’assistente.
- Nessun codice applicativo, mockup o funzionalità è stato ancora implementato.

## Decisioni prese

### Regole di sviluppo

1. Non si passa alla fase successiva finché quella attuale non è soddisfacente e approvata.
2. Non si presentano funzionalità simulate, mock o placeholder come funzionanti.
3. Ogni funzionalità deve essere progettata per poter essere ampliata.
4. I costi AI devono rimanere sotto controllo e OMNI non deve dipendere irreversibilmente da un solo provider.
5. Interfaccia, prestazioni leggere e stabilità sono priorità permanenti.

### Direzione del prodotto

- Pubblico iniziale: utenti quotidiani, non necessariamente tecnici.
- Le funzionalità iniziali non sono ancora state ristrette a un singolo caso d’uso.
- Il comportamento dettagliato della presenza desktop sarà definito successivamente.
- Non sono ancora stati fissati vincoli tecnici, di privacy o di distribuzione.
- L’architettura AI dovrà prevedere un confine neutrale rispetto ai provider, lasciando sostituibili provider, modelli, routing, fallback, contabilizzazione dell’uso e limiti di costo.
- Il repository GitHub ufficiale di OMNI è `https://github.com/Buppino/OMNI.git`.
- Le modifiche del prodotto OMNI devono essere committate localmente e pubblicate su questo repository dopo ogni modifica significativa o salvataggio richiesto.
- La cartella OMNI deve contenere esclusivamente file necessari a sviluppare, eseguire, testare, documentare e distribuire il prodotto.

## Roadmap concordata

1. **Fase 1 — Identità visiva e interfaccia desktop**
   - Linguetta nera verticale sul bordo destro.
   - Due occhi luminosi rappresentativi di OMNI.
   - Animazioni al passaggio del mouse.
   - Apertura del pannello laterale.
   - Grafica premium, trasparenze ed effetti.
   - Prime schermate e widget dimostrativi.
   - Obiettivo: ottenere un’esperienza che sembri già un prodotto reale e curato.

2. **Fase 2 — Struttura e fondamenta**
   - Architettura Windows.
   - Navigazione tra sezioni.
   - Database e salvataggio locale.
   - Impostazioni e personalizzazione.
   - Struttura modulare.

3. **Fase 3 — Intelligenza artificiale e memoria**
   - Chat.
   - Voce e conversazione.
   - Memoria di conversazioni e preferenze.
   - Analisi di immagini e documenti.
   - Scelta tra modelli e provider.

4. **Fase 4 — Controllo del PC**
   - Apertura programmi.
   - Ricerca e gestione file.
   - Interazione con Windows.
   - Operazioni tramite comandi.
   - Autorizzazioni per azioni importanti.

5. **Fase 5 — Apprendimento e automazioni**
   - Analisi di tutorial video.
   - Apprendimento di procedure.
   - Creazione di Skills riutilizzabili.
   - Automazioni.
   - Flussi di lavoro personalizzati.

6. **Fase 6 — Ecosistema di funzionalità**
   - Libreria personale con ISBN o codice a barre.
   - Note, attività e promemoria.
   - Calendario e progetti.
   - Monitoraggio delle prestazioni del PC.
   - Collegamento con smartphone e servizi esterni.
   - Widget e integrazioni.

7. **Fase 7 — Prodotto commerciale**
   - Sicurezza e protezione dei dati.
   - Ottimizzazione.
   - Test e correzione bug.
   - Installazione Windows.
   - Piano Free e Premium.
   - Abbonamenti, licenze e distribuzione.

## File modificati o creati nel progetto

- `PROJECT_STATUS.md` — questo riepilogo.
- `phases/01-visual-identity-desktop-ui/.gitkeep` — placeholder per mantenere la cartella della Fase 1.
- `phases/02-application-foundations/.gitkeep` — placeholder per la Fase 2.
- `phases/03-ai-and-memory/.gitkeep` — placeholder per la Fase 3.
- `phases/04-pc-control/.gitkeep` — placeholder per la Fase 4.
- `phases/05-learning-and-automation/.gitkeep` — placeholder per la Fase 5.
- `phases/06-feature-ecosystem/.gitkeep` — placeholder per la Fase 6.
- `phases/07-commercial-product/.gitkeep` — placeholder per la Fase 7.

Il repository non contiene ancora codice sorgente, asset, configurazioni di build o file di installazione.

## File esterni al progetto

Le skill, i plugin, la memoria e le configurazioni dell’assistente sono mantenuti fuori dalla cartella OMNI e non fanno parte del prodotto.

## Prossimi passaggi

1. Definire in dettaglio l’identità visiva di OMNI.
2. Definire il comportamento esatto della linguetta sul bordo destro.
3. Stabilire dimensioni, colori, materiali, trasparenze, animazioni e stati degli occhi.
4. Definire il comportamento di hover, click, apertura e chiusura del pannello.
5. Stabilire le prime schermate e i widget dimostrativi della Fase 1.
6. Concordare i criteri di accettazione della Fase 1 prima di iniziare a implementare.
7. Implementare e verificare solo la Fase 1; non procedere alla Fase 2 finché la Fase 1 non sarà soddisfacente e approvata.

## Stato Git locale al momento del riepilogo

- Branch: `master`
- Commit presenti: nessuno
- Modifiche non ancora committate: cartella `phases/` e questo file `PROJECT_STATUS.md`
- Nessun push o pubblicazione eseguita
