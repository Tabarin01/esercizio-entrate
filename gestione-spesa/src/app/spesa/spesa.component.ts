import { Component } from '@angular/core';

// Creare un'applicazione per la gestione delle spese (Entrate/Uscite)
// Di base l'applicazione deve fornire un input dove l'utente inserire una spesa/entrata
// (Due input distinti oppure uno singolo e distinguere la spesa dall'entrata sfruttandp
// il segno (+/-), oppure due pulsanti diversi, libero arbitrio)

// Visualizzare la lista dei dati inseriti:
// 1) Dalla lista voglio avere la possibilità di eliminare un record
// 2) Voglio distinguere graficamente una spesa dall'entrata:
//     Entrata: verde, Spesa: Rosso

@Component({
  selector: 'app-spesa',
  templateUrl: './spesa.component.html',
  styleUrls: ['./spesa.component.css'],
})
export class SpesaComponent {
  importo: number = 0;

  // sintassi ts per la creazione di un array di oggetti
  spese: { importo: number; tipo: 'entrata' | 'uscita' }[] = [];

  onClick(tipo: string) {
    if (this.importo > 0) {
      const tipoSpesa: 'entrata' | 'uscita' =
        tipo === 'entrata' ? 'entrata' : 'uscita';
      this.spese.push({ importo: Math.abs(this.importo), tipo: tipoSpesa });
      this.importo = 0;
    } else {
      alert("L'importo non può essere 0");
    }
  }

  rimuoviSpesa(spesa: { importo: number; tipo: 'entrata' | 'uscita' }) {
    const index = this.spese.indexOf(spesa);
    if (index !== -1) {
      this.spese.splice(index, 1);
    }
  }

  calcolaTotale(): number {
    return this.spese.reduce((totale, spesa) => {
      return spesa.tipo === 'entrata'
        ? totale + spesa.importo
        : totale - spesa.importo;
    }, 0);
  }
}
