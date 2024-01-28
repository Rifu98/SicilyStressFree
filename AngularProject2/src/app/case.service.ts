import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  ville = [
    {
      casa: 'Villa Carmen',
      nphoto: 58,
      description: [
        `Just right above the turquoise and Emerald Mediterranean Sea, right next to the famous natural preserve Lo Zingaro; with a Jacuzzi right under the astonishing blue starry sky this Villa it's a real dream. You just have the best at one glance you just have this paradise at your doorstep.`,
        `This unique villa resembles a sail boat.
A big sail boat on the water with the extreme point looking over the blue sea.
Accesso per gli ospiti
all yours`,
`- The person who makes the reservation is the responsible of the Villa.
- the only ppl admitted into the villa are the ppl included in the reservation.
- please if you find something dirty, let me know right away so that I can call the clean staff and provide.`
      ],
      amenities: [''],
      nrew: 0
    },
    {
      casa: 'Villa Elena & Santo',
      nphoto: 17,
      description: [
        'Amazing peaceful villa right before the Natural Preserve Lo Zingaro,above amazing turquoise see of Scopello, next to I Faraglioni of scopello. Spectacular view of the golf of Castellammare. Wonderful Cristal water swimming pool.',
        `Dont ever let anyone IN (for example a worker) without advising me FIRST

Please turn OFF air conditioning or heater when not in the apt.

Ask me if you want to bring a pet.

I'm Eco-friendly, please collect plastic, glass, and cans separately in the bins I provide.

Also, don't leave food waste in the apt. at the end of your staying

If you break a glass please let me know to avoid injuries when walking barefoot

For keys loss, we charge 100 euro

Not smoking villa however, you can smoke on the outdoors spaces

No hairs left in the sink or shower . collect it with paper.
No sand in the house, you can rinse in the outdoor spaces

Flush the toilet making sure is clean before leaving.
thank you so much for your kindness.`,
      ],
      amenities: [''],
      nrew: 0
    }
  ]
  tours = [
    {
      casa: 'Snorkeling',
      nphoto: 11,
      description: [
        "Il programma puó essere modificato a seconda delle varie necessitá.",
        "Programma autunnale ed invernale",
        "1) 11Am Verró a prenderti da un punto d'incontro es. Teatro Massimo o al tuo indirizzo",
        "2) con la mia macchina andiamo al primo posto Verso scogliera Cala rossa di Terrasini circa 1 ora e ritorno poi a Castellammare del golfo per le terme naturali poi di nuovo per il centro di Palermo.",
        "Se vi é cattivo tempo si trova una soluzione diversa o si annulla il tour",
        "Altre cose da tenere a mente",
        "consiglio di valutare prima se vi piacciono le zone rocciose.",
        "Il programma puó variare a seconda delle condizioni meteo, o eventi e traffico."
      ],
      amenities: [''],
      nrew: 0
    },
  ]
  case = [
    {
      casa: 'Principe di Cutò',
      nphoto: 25,
      description: [
        `Very glamourous style, bohemian elegant atmosphere, right on to the historical center of Palermo, this cozy place will make your stay a magical experience in every season.
A unique open space, with a spacious living room with a special view of the whole city historical center.An open kitchen from wich you can enjoy the same view of the living room.`,
`Decorated and furnished with antique unique collectibles and pieces of art.

A little of history of The Palace

Palazzo Filangeri- Cutò in via Maqueda, XVIII century.

The Palace, today with a decadent feeling, was one of the jewels of the city.

It is said that at the time of its splendor it employed three hundred workers, all essential to the management of the monumental complex.

  Inside, Prince Alexander, Captain General of the Kingdom of Sicily, had allocated a large part to his enormous library, whose countless volumes were donated to the Municipality in 1823 and constitute the central nucleus of the municipal library.

Prince Alexander himself had expanded the Palace of Santa Margherita in Belìce, where Giuseppe Tomasi di Lampedusa, who was related to the Filangeri on his mother's side, also spent the summer.
It was among these rooms that some of the most beautiful pages of Il Gattopardo took inspiration.
The Palace is no longer inhabited by the family Filangeri but has been divided into apartments and sold to private families.`,
        `Note that the apt is furnished with antique collectibles.however bed and one couch the showers are modern.Also all kitchen supplies are new.espresso machine, wine cellar`
      ],
      amenities: [
        'City skyline view',
        'Hair dryer',
        'Bidet',
        'Hot Water',
        'Free washer - In unit',
        'Essential',
        'Hangers',
        'Bed linens',
        'Extra pillows and blankets',
        'iron',
        'Drying rack for clothing',
        'Books and reading material',
        'Crib - availabile upon request',
        "Pack 'n play/Travel crib",
        'High chair',
        'Window AC unit',
        'Portable fans',
        'Portable heater',
        'Dedicated workspace',
        'Pocket wifi',
        'Kitchen',
        'Refrigerator',
        'Microwave',
        'Cooking basics',
        'Dishes and silverware',
        'Mini fridge',
        'Freezer',
        'Stove',
        'Hot water kettle',
        'Coffee maker: espresso machine',
        'Wine glasses',
        'Blender',
        'Dinning table',
        'Private patio or balcony',
        'Beach essentials',
        'Free street parking',
        'Pet allowed',
        'Luggage dropoff allowed'
      ],
      nrew: 1
    },
    {
      casa: 'Principe di Cutò Supreme',
      nphoto: 12,
      description: [],
      amenities: [''],
      nrew: 0
    },
    {
      casa: 'Principe Naselli',
      nphoto: 39,
      description: [
        `Stunning and spacious apt. , elegant, modern and at the same time cozy it is located right at the historical center of Palermo.It has a very special character, designed by a Sicilian interior designer with worldwide experience.Bright huge living room with 3 windows and balconies, Tv 65", sectional sofa, equipped open kitchen, dining table seats 6 guests.`,
        `The apt is located at the second and last floor of a renovated condominium in the most antique neighborhood of Palermo.Has a private garage for your car, which is very rare to have in the historical centre, also a nice terrace for your BBQ time while looking at the starry nights, and a beautiful wood stairs to claim the second floor to reach one of the bedrooms and the terrace`,
        `Dont ever let anyone IN(for example a worker) without advising me FIRST

Advice me or check the right number of guests when make the reservation.
If you are 4 the rooms available are 2

Please turn OFF air conditioning or heater when not in the apt.

Ask me if you want to bring a pet.

        I'm Eco-friendly, please collect plastic, glass, and cans separately in the Grey bins I provide.

Also, don't leave food waste in the apt. at the end of your staying

If you break a glass please let me know to avoid injuries when walking barefoot

For keys loss, we charge 100 euro

Not smoking apt.however, you can smoke on the balconies

No hairs left in the sink or shower .collect it with paper.

Flush the toilet making sure is clean before leaving.
thank you so much for your kindness.`
      ],
      amenities: [''],
      nrew: 0
    }
  ];

  constructor() { }
}
