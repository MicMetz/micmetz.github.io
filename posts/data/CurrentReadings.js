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
      'Based on classified documents and first-person interviews, a startling history of the American war on Vietnamese civilians. \n',
      '*The American Empire Project* \n',
      '*Winner of the Ridenhour Prize for Reportorial Distinction* \n',
      'Americans have long been taught that events such as the notorious My Lai massacre were isolated incidents in the Vietnam War, carried out by \"a few bad apples.\" But as award-winning journalist and historian Nick Turse demonstrates in this groundbreaking investigation, violence against Vietnamese noncombatants was not at all exceptional during the conflict. Rather, it was pervasive and systematic, the predictable consequence of official orders to \"kill anything that moves.\" \n',
      'Drawing on more than a decade of research in secret Pentagon files and extensive interviews with American veterans and Vietnamese survivors, Turse reveals for the first time how official policies resulted in millions of innocent civilians killed and wounded. In shocking detail, he lays out the workings of a military machine that made crimes in almost every major American combat unit all but inevitable. Kill Anything That Moves takes us from archives filled with Washington\'s long-suppressed war crime investigations to the rural Vietnamese hamlets that bore the brunt of the war; from boot camps where young American soldiers learned to hate all Vietnamese to bloodthirsty campaigns like Operation Speedy Express, in which a general obsessed with body counts led soldiers to commit what one participant called \"a My Lai a month.\" \n',
      'Thousands of Vietnam books later, Kill Anything That Moves, devastating and definitive, finally brings us face-to-face with the truth of a war that haunts Americans to this day. \n\n'
    ],
    link       : 'https://us.macmillan.com/books/9781250045065/killanythingthatmoves',
    tags       : [
      {
        name: 'Buy',
        link: 'https://us.macmillan.com/books/9781250045065/killanythingthatmoves'
      },
      {
        name: 'Author Biography',
        link: 'https://theintercept.com/staff/nick-turse/'
      }
    ],
    chapters   : [
      {
        chapter: 1,
        text   : 'The Massacre at Trieu Ai',
        pages  : [
          1,
          17
        ]
      },
      {
        chapter: 2,
        text   : 'A System of Suffering',
        pages  : [
          18,
          46
        ]
      },
      {
        chapter: 3,
        text   : 'Overkill',
        pages  : [
          47,
          72
        ]
      },
      {
        chapter: 4,
        text   : 'A litany of atrocities',
        pages  : [
          73,
          108
        ]
      },
      {
        chapter: 5,
        text   : 'The bummer, the \'Gook-Hunting\' General, and the Butcher of the Delta',
        pages  : [
          109,
          135
        ]
      },
      {
        chapter: 6,
        text   : 'Where Have All the War Crimes Gone?',
        pages  : [
          136,
          168
        ]
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
      'Alexandria Ocasio-Cortez may seem like she came from nowhere, but the movement that propelled her to office – and to global political stardom – has been building for 30 years. \n\n' + 'We’ve Got People is the story of that movement, which first exploded into public view with the largely forgotten presidential run of the Rev. Jesse Jackson, a campaign that came dangerously close to winning. \n\n' + 'With the party and the nation at a crossroads, this timely and original book offers new insight into how we’ve gotten where we are – and where we\'re headed. \n\n\n',
      'Ryan Grim is The Intercept’s D.C. Bureau Chief and the host of the podcast Deconstructed. He authors the newsletter Bad News and was previously the Washington bureau chief for HuffPost, where he led a team that was twice a finalist for the Pulitzer Prize, and won once.\n',
      'He edited and contributed reporting to groundbreaking investigative project on heroin treatment that not only changed federal and state laws,' + ' but also shifted the culture of the recovery industry. The story, by Jason Cherkis, was a Pulitzer finalist and won a Polk Award.\n\n' + 'He has been a staff reporter for Politico and the Washington City Paper and is a co-host of the show Counter Points. He is the author of the books “We’ve Got People” (2019) and “This Is Your Country on Drugs” (2009).'
    ],
    link       : 'https://www.amazon.com/Weve-Got-People-Jackson-Movement/dp/1947492381',
    tags       : [
      {
        name: 'Buy',
        link: 'https://strongarmpress.com/catalog/weve-got-people/'
      },
      {
        name: 'Author Biography',
        link: 'https://theintercept.com/staff/ryangrim/'
      },
      {
        name: 'Author Presentation',
        link: 'https://www.c-span.org/video/?462677-1/weve-people'
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
        chapter: 1,
        text   : 'The United States and Africa',
        pages  : ''
      },
      {
        chapter: 2,
        text   : 'The CIA',
        pages  : ''
      },
      {
        chapter: 3,
        text   : 'African Jazz',
        pages  : ''
      },
      {
        chapter: 4,
        text   : 'America and Africa',
        pages  : ''
      },
      {
        chapter: 5,
        text   : 'Independance Cha Cha',
        pages  : ''
      },
      {
        chapter: 6,
        text   : 'YQPROP',
        pages  : ''
      },
      {
        chapter: 7,
        text   : 'The Global Game',
        pages  : ''
      },
      {
        chapter: 8,
        text   : 'Carrot and Stick',
        pages  : ''
      },
      {
        chapter: 9,
        text   : 'The Turning Point',
        pages  : ''
      },
      {
        chapter: 10,
        text   : 'The Seeds are Sown',
        pages  : ''
      },
      {
        chapter: 11,
        text   : 'Dark Days',
        pages  : ''
      }
    ]
  },
  {
    id         : 4,
    header     : {
      title   : 'The Black Jacobins',
      subtitle: 'Toussaint L\'Ouverture and the San Domingo Revolution'
    },
    author     : 'C.L.R. James',
    date       : Date.parse( '1938-01-01' ),
    publisher  : 'Vintage',
    cover      : '/images/library/books/TheBlackJacobins.jpg',
    description: [
      'A classic and impassioned account of the Haitian Revolution--the first revolution in the Third World and the model for the liberation movements from Africa to Cuba. \n\n',
      'One of the seminal texts about the history of slavery and abolition. . . . Provocative and empowering." -The New York Times Book Review \n\n',
      'This powerful, intensely dramatic book is the definitive account of the Haitian Revolution of 1794-1803, a revolution that began in the wake of the Bastille. It is the story of the French' + ' colony of San Domingo, a place where the brutality of master toward slave was legendary. And it is the story of a barely literate slave named Toussaint L\'Ouverture, who led the black' + ' people of San Domingo in a successful struggle against successive invasions by overwhelming French, Spanish, and English forces and in the process helped form the first independent nation' + ' in the Caribbean. \n\n'
    ],
    link       : 'https://politicaleducation.org/wp-content/uploads/2017/04/CLR_James_The_Black_Jacobins.pdf',
    tags       : [
      {
        name: 'The Book (PDF)',
        link: 'https://politicaleducation.org/wp-content/uploads/2017/04/CLR_James_The_Black_Jacobins.pdf'
      },
      {
        name: 'Author Biography',
        link: 'https://www.bl.uk/people/c-l-r-james'
      }
    ],
    chapters   : []
  },
  {
    id         : 5,
    header     : {
      title   : 'The Tormented Alliance:',
      subtitle: 'American Servicemen and the Occupation of China, 1941–1949'
    },
    author     : 'Zach Fredman',
    date       : Date.parse( '2022-01-08' ),
    publisher  : 'UNC Press Books',
    cover      : '/images/library/books/TheTormentedAlliance.jpg',
    description: [
      'After Japan\'s attack on Pearl Harbor, leaders in China and the United States had high hopes of a lasting partnership between the two countries.\n',
      'More than 120,000 U.S. servicemen deployed to China, where Chiang Kai-shek\'s government carried out massive programs to provide them with housing, food, and interpreters. But, as Zach' +
      ' Fredman uncovers in The Tormented Alliance, a military alliance with the United States means a military occupation by the United States.\n',
      'The first book to draw on archives from all of the areas in China where U.S. forces deployed during the 1940s, The Tormented Alliance examines the formation, evolution, and undoing of the' +
      ' alliance between the United States and the Republic of China during World War II and the Chinese Civil War soon after. \n\n'
    ],
    link       : 'https://uncpress.org/book/9781469669588/the-tormented-alliance/',
    tags       : [
      {
        name: 'Buy',
        link: 'https://uncpress.org/book/9781469669588/the-tormented-alliance/'
      },
      {
        name: 'Author Biography',
        link: 'https://scholars.duke.edu/person/zach.fredman'
      },
      {
        name: 'Author Presentation',
        link: 'https://www.youtube.com/watch?v=R8hQ4NoyQSQ'
      }
    ],
    chapters   : [
      {
        chapter: 1,
        text   : 'Introduction',
        pages  : [
          1,
          20
        ]
      },
      {
        chapter: 2,
        text   : 'China\'s Hostel Program',
        pages  : [
          21,
          47
        ]
      },
      {
        chapter: 3,
        text   : 'China\'s Interpreter Program',
        pages  : [
          48,
          78
        ]
      },
      {
        chapter: 4,
        text   : 'Military-to-Military Relations',
        pages  : [
          79,
          107
        ]
      },
      {
        chapter: 5,
        text   : 'Chinese Civilians',
        pages  : [
          108,
          134
        ]
      },
      {
        chapter: 6,
        text   : 'Sexual Relations',
        pages  : [
          135,
          162
        ]
      },
      {
        chapter: 7,
        text   : 'The Postwar Occupation',
        pages  : [
          163,
          195
        ]
      },
      {
        chapter: 8,
        text   : 'The Occupation of China\'s Long Shadow',
        pages  : [
          196,
          206
        ]
      }
    ]
  },
  {
    id         : 6,
    header     : {
      title   : 'Elite Capture:',
      subtitle: ' How the Powerful Took Over Identity Politics (And Everything Else)'
    },
    author     : 'Olúfẹ́mi O. Táíwò',
    date       : Date.parse( '2022-05-03' ),
    publisher  : 'Haymarket Books',
    cover      : '/images/library/books/EliteCapture.jpg',
    description: [
      '“Identity politics” is everywhere, polarizing discourse from the campaign trail to the classroom and amplifying antagonisms in the media, both online and off. But the compulsively referenced phrase bears little resemblance to the concept as first introduced by the radical Black feminist Combahee River Collective. While the Collective articulated a political viewpoint grounded in their own position as Black lesbians with the explicit aim of building solidarity across lines of difference, identity politics is now frequently weaponized as a means of closing ranks around ever-narrower conceptions of group interests.\n' +
      '\n' +
      'But the trouble, Olúfẹ́mi O. Táíwò deftly argues, is not with identity politics itself. Through a substantive engagement with the global Black radical tradition and a critical understanding of racial capitalism, Táíwò identifies the process by which a radical concept can be stripped of its political substance and liberatory potential by becoming the victim of elite capture—deployed by political, social, and economic elites in the service of their own interests.\n' +
      '\n' +
      'Táíwò’s crucial intervention both elucidates this complex process and helps us move beyond a binary of “class” vs. “race.” By rejecting elitist identity politics in favor of a constructive politics of radical solidarity, he advances the possibility of organizing across our differences in the urgent struggle for a better world.\n\n'
    ],
    link       : 'https://www.haymarketbooks.org/books/1867-elite-capture',
    tags       : [
      {
        name: 'Buy',
        link: 'https://www.haymarketbooks.org/books/1867-elite-capture'
      },
      {
        name: 'Author Biography',
        link: 'http://www.olufemiotaiwo.com/'
      }
    ],
    chapters   : []
  },


]
