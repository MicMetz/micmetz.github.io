/**
 Template Format:

 (1) id: number,

 (2) header: {
    title: string,
    subtitle: string || null
  },

 (3) author: string,

 (4) date: Date || null,

 (5) publisher: string || null,

 (6) cover: url,

 (7) description: string[] || null,

 (8) chapters: { Object[ { title: string, subtitle: string, description?: string[] || null } ] }


 */


export const CurrentReadings = [
  {
    id         : 1,
    header     : {
      title   : 'Kill Anything That Moves',
      subtitle: 'The Real American War in Vietnam'
    },
    author     : 'Nick Turse',
    date       : Date.parse( '2013-01-15' ),
    publisher  : 'Picador',
    cover      : '/images/library/books/KillAnythingThatMoves.jpg',
    description: [
      'Based on classified documents and first-person interviews, a startling history of the American war on Vietnamese civilians. \n\n',
      'The American Empire Project \n\n',
      'Winner of the Ridenhour Prize for Reportorial Distinction \n\n\n',
      'Americans have long been taught that events such as the notorious My Lai massacre were isolated incidents in the Vietnam War, carried out by \"a few bad apples.\" But as award-winning journalist and historian Nick Turse demonstrates in this groundbreaking investigation, violence against Vietnamese noncombatants was not at all exceptional during the conflict. Rather, it was pervasive and systematic, the predictable consequence of official orders to \"kill anything that moves.\" \n\n',
      'Drawing on more than a decade of research in secret Pentagon files and extensive interviews with American veterans and Vietnamese survivors, Turse reveals for the first time how official policies resulted in millions of innocent civilians killed and wounded. In shocking detail, he lays out the workings of a military machine that made crimes in almost every major American combat unit all but inevitable. Kill Anything That Moves takes us from archives filled with Washington\'s long-suppressed war crime investigations to the rural Vietnamese hamlets that bore the brunt of the war; from boot camps where young American soldiers learned to hate all Vietnamese to bloodthirsty campaigns like Operation Speedy Express, in which a general obsessed with body counts led soldiers to commit what one participant called \"a My Lai a month.\" \n\n',
      'Thousands of Vietnam books later, Kill Anything That Moves, devastating and definitive, finally brings us face-to-face with the truth of a war that haunts Americans to this day. \n\n'
    ],
    link       : 'https://us.macmillan.com/books/9781250045065/killanythingthatmoves',
    tags       : [
      {
        name: 'Amazon',
        link: 'http://www.amazon.com/Kill-Anything-That-Moves-American/dp/1250045061/ref=sr_1_1?ie=UTF8&qid=1452120004&sr=8-1&keywords=kill+anything+that+moves'
      },
      { name: 'Author Biography', link: 'https://theintercept.com/staff/nick-turse/' }
    ],
    chapters   : [
      {
        chapter     : 1,
        chapterTitle: 'The Massacre at Trieu Ai',
        pages       : '1-17'
      },
      {
        chapter     : 2,
        chapterTitle: 'A System of Suffering',
        pages       : '18-46'
      },
      {
        chapter     : 3,
        chapterTitle: 'Overkill',
        pages       : '47-72'
      },
      {
        chapter     : 4,
        chapterTitle: 'A litany of atrocities',
        pages       : '73-108'
      },
      {
        chapter     : 5,
        chapterTitle: 'The bummer, the \'Gook-Hunting\' General, and the Butcher of the Delta',
        pages       : '109-135'
      },
      {
        chapter     : 6,
        chapterTitle: 'Where Have All the War Crimes Gone?',
        pages       : '136-168'
      }
    ]
  },
  {
    id         : 2,
    header     : {
      title   : 'We\'ve Got People',
      subtitle: 'From Jesse Jackson to AOC, the End of Big Money and the Rise of a Movement'
    },
    author     : 'Ryan Grim',
    date       : Date.parse( 'May 23, 2019' ),
    publisher  : 'Strong Arm Press',
    cover      : '/images/library/books/WeGotPeople.jpg',
    description: [
      'Alexandria Ocasio-Cortez may seem like she came from nowhere, but the movement that propelled her to office – and to global political stardom – has been building for 30 years. \n\n' +
      'We’ve Got People is the story of that movement, which first exploded into public view with the largely forgotten presidential run of the Rev. Jesse Jackson, a campaign that came dangerously close to winning. \n\n' +
      'With the party and the nation at a crossroads, this timely and original book offers new insight into how we’ve gotten where we are – and where we\'re headed. \n\n\n',
      'Ryan Grim is The Intercept’s D.C. Bureau Chief and the host of the podcast Deconstructed. He authors the newsletter Bad News and was previously the Washington bureau chief for HuffPost, where he led a team that was twice a finalist for the Pulitzer Prize, and won once.\n',
      'He edited and contributed reporting to groundbreaking investigative project on heroin treatment that not only changed federal and state laws,' +
      ' but also shifted the culture of the recovery industry. The story, by Jason Cherkis, was a Pulitzer finalist and won a Polk Award.\n\n' +
      'He has been a staff reporter for Politico and the Washington City Paper and is a co-host of the show Counter Points. He is the author of the books “We’ve Got People” (2019) and “This Is Your Country on Drugs” (2009).'
    ],
    link       : 'https://www.c-span.org/video/?462677-1/weve-people',
    tags       : [
      { name: 'C-Span Talk', link: 'https://www.amazon.com/Weve-Got-People-Jackson-Movement/dp/1947492381' }, {
        name: 'Author Biography',
        link: 'https://theintercept.com/staff/ryangrim/'
      }
    ],
    chapters   : []
  },
  {
    id         : 3,
    header     : {
      title   : 'White Malice',
      subtitle: 'The CIA and the Covert Recolonization of Africa'
    },
    author     : 'Susan Williams',
    date       : Date.parse( '2022-01-01' ),
    publisher  : 'Public Affairs',
    cover      : '/images/library/books/WhiteMalice.jpg',
    description: [
      'A revelatory new history of post-colonial African independence movements shows how they were systematically undermined by one nation: the US. This is the untold story of how, over a few vital years, African Independence was strangled at birth. \n\n',
      'In 1958 in Accra, Ghana, the Hands Off Africa conference brought together the leading figures of African independence in a public show of political strength and purpose. It was inspired by the example of Ghana itself which, under the charismatic leadership of Kwame Nkrumah, had just thrown off the British colonial yoke - the first African nation to do so. It was moment heady with promise for independence movements across Africa, and for all those who believed colonialism was a moral aberration. \n\n',
      'Among the supporters of African independence were some of the leading figures of the American Civil Rights movement. Malcolm X was in Accra and Martin Luther King used Nkrumah\'s speech as the basis for his own "Free At Last" speech, so clear were the parallels between their own struggle for political equality in the US with that of the African nations. W. E. B. Du Bois moved to Ghana, inspired by the future of independent Africa. Yet among the many official messages of support received by the conference the United States was conspicuously quiet, despite its historic and public opposition to colonialism. Vice President Nixon did attend the celebrations in Ghana and asked a group of black people, "How does it feel to be free?"They answered: "We wouldn\'t know. We\'re from Alabama". \n\n',
      'The conference was also attended by a slew of strange societies, many of which were fronts, and behind them was the CIA. The CIA was in favor of the end of the British Empire but a pan-African independence movement, one susceptible to Soviet entreaties, looked like a security threat. Through original research and unparalleled insight, Susan Williams reveals how the CIA\'s baleful influence was felt from South Africa to the Congo as the agency prepared to move in as Africa\'s colonizers moved out. \n\n'
    ],
    link       : 'https://www.hachettebookgroup.com/titles/susan-williams/white-malice/9781541768284/?lens=publicaffairs',
    tags       : [],
    chapters   : [
      {
        chapter     : 1,
        chapterTitle: 'The United States and Africa',
        pages       : ''
      },
      {
        chapter     : 2,
        chapterTitle: 'The CIA',
        pages       : ''
      },
      {
        chapter     : 3,
        chapterTitle: 'African Jazz',
        pages       : ''
      },
      {
        chapter     : 4,
        chapterTitle: 'America and Africa',
        pages       : ''
      },
      {
        chapter     : 5,
        chapterTitle: 'Independance Cha Cha',
        pages       : ''
      },
      {
        chapter     : 6,
        chapterTitle: 'YQPROP',
        pages       : ''
      },
      {
        chapter     : 7,
        chapterTitle: 'The Global Game',
        pages       : ''
      },
      {
        chapter     : 8,
        chapterTitle: 'Carrot and Stick',
        pages       : ''
      },
      {
        chapter     : 9,
        chapterTitle: 'The Turning Point',
        pages       : ''
      },
      {
        chapter     : 10,
        chapterTitle: 'The Seeds are Sown',
        pages       : ''
      },
      {
        chapter     : 11,
        chapterTitle: 'Dark Days',
        pages       : ''
      }
    ]
  },


]
