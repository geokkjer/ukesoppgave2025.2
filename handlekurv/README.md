# Ukesoppgave

Ny oppgave: skriv om handlekurv til rene funksjoner og immutable data

Steg for steg

1. Lag github repo og inviter de som skal sammarbeide clone git repo

1. Lag et nytt vanill-typescript prosjekt med vite og installer avhengigheter

    Kommandoer

    ```sh
    npm create vite@latest handlekurv-v3
    cd handlekurv-v3
    npm install
    ```

1. Kopier inn eksisterende kode fra denne uken

1. Analyser koden for å identifisere tilstander og bivirkninger.(Pure functions/calculations, side effects/actions og data)

1. Lag et skall i shell.ts og skill ut kode med sideeffekter.

1. Lag mappen pure under src. Prøv å flytte ren funksjonalitet dit.

1. Gjør modellen/state uforanderlig(immutable), bruk Object.freeze() på state objektene.

1. Refaktorer funksjoner til å ta inn state som argumenter og returnere nye tilstander i stedet for å endre eksisterende tilstander.

1. Gjør ferdig implementeringen av handlekurven og detaljviewet.

1. Legg til ekstra funksjonalitet i appen. (f.eks. filtrering, sortering, søk)
