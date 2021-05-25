# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Movie.destroy_all
Genre.destroy_all
MovieGenre.destroy_all
MyList.destroy_all
#--------------------------------------------------
# Demo User
demouser= User.create!(email: "baejoohyun@gmail.com", password: "redvelvet")

#--------------------------------------------------
# Movies
parasite = Movie.create!(
    title: "Parasite",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    year: 1991,
    rating: "R",
    runtime: "2h 12min" 
)
file = open('https://cineflix-dev.s3.amazonaws.com/parasite.jpg')
parasite.photo.attach(io: file, filename: 'parasite.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/parasite_vid.mp4')
parasite.video.attach(io: file, filename: 'parasite_vid.mp4')


the_lords_of_dogtown = Movie.create!(
    title: "The Lords of Dogtown",
    description: "The film follows the surf and skateboarding trends that originated in Venice, California during the 1970's.",
    year: 2005,
    rating: "PG-13",
    runtime: "1h 47min" 
)
file = open('https://cineflix-dev.s3.amazonaws.com/thelordsofdogtown.jpg')
the_lords_of_dogtown.photo.attach(io: file, filename: 'thelordsofdogtown.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/thelordsofdogtown_vid.mp4')
the_lords_of_dogtown.video.attach(io: file, filename: 'thelordsofdogtown_vid.mp4')


lost_in_translation = Movie.create!(
    title: "Lost in Translation",
    description: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    year: 2003,
    rating: "R",
    runtime: "1h 42min" 
)
file = open('https://cineflix-dev.s3.amazonaws.com/lostintranslation.jpg')
lost_in_translation.photo.attach(io: file, filename: 'lostintranslation.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/lostintranslation_vid.mp4')
lost_in_translation.video.attach(io: file, filename: 'lostintranslation_vid.mp4')


the_outlaws = Movie.create!(
    title: "The Outlaws",
    description: "Based on real events, this crime action film depicts a Seoul detective's attempts to keep peace while two Chinese-Korean gangs battle over turf in the neighborhood.",
    year: 2017,
    rating: "R",
    runtime: "2h 1min" 
)
file = open('https://cineflix-dev.s3.amazonaws.com/theoutlaws.jpg')
the_outlaws.photo.attach(io: file, filename: 'theoutlaws.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/theoutlaws_vid.mp4')
the_outlaws.video.attach(io: file, filename: 'theoutlaws_vid.mp4')


jerry_maguire = Movie.create!(
    title: "Jerry Maguire",
    description: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former colleague.",
    year: 1996,
    rating: "R",
    runtime: "2h 19min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/jerrymaguire.jpg')
jerry_maguire.photo.attach(io: file, filename: 'jerrymaguire.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/jerrymaguire_vid.mp4')
jerry_maguire.video.attach(io: file, filename: 'jerrymaguire_vid.mp4')


summer_wars = Movie.create!(
    title: "Summer Wars",
    description: "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
    year: 2009,
    rating: "PG",
    runtime: "1h 54min" 
)
file = open('https://cineflix-dev.s3.amazonaws.com/summerwars.jpeg')
summer_wars.photo.attach(io: file, filename: 'summerwars.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/summerwars_vid.mp4')
summer_wars.video.attach(io: file, filename: 'summerwars_vid.mp4')

sixunderground = Movie.create!(
    title: "6 Underground",
    description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
    year: 2019,
    rating: "R",
    runtime: "2h 8min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/6underground.jpg')
sixunderground.photo.attach(io: file, filename: '6underground.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/6underground_vid.mp4')
sixunderground.video.attach(io: file, filename: '6underground_vid.mp4')

jumpstreet = Movie.create!(
    title: "21 Jumpstreet",
    description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
    year: 2012,
    rating: "R",
    runtime: "1h 49min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/21jumpstreet.jpeg')
jumpstreet.photo.attach(io: file, filename: '21jumpstreet.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/21jumpstreet_vid.mp4')
jumpstreet.video.attach(io: file, filename: '21jumpstreet_vid.mp4')

bigherosix = Movie.create!(
    title: "Big Hero 6",
    description: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
    year: 2014,
    rating: "PG",
    runtime: "1h 42min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/bighero6.jpg')
bigherosix.photo.attach(io: file, filename: 'bighero6.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/bighero6_vid.mp4')
bigherosix.video.attach(io: file, filename: 'bighero6_vid.mp4')

burning = Movie.create!(
    title: "Burning",
    description: "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby.",
    year: 2018,
    rating: "R",
    runtime: "2h 28min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/burning.jpg')
burning.photo.attach(io: file, filename: 'burning.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/burning_vid.mp4')
burning.video.attach(io: file, filename: 'burning_vid.mp4')

celesteandjesseforever = Movie.create!(
    title: "Celeste & Jesse Forever",
    description: "A divorcing couple tries to maintain their friendship while they both pursue other people.",
    year: 2012,
    rating: "R",
    runtime: "1h 32min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/celesteandjesseforever.jpg')
celesteandjesseforever.photo.attach(io: file, filename: 'celesteandjesseforever.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/celesteandjesseforever_vid.mp4')
celesteandjesseforever.video.attach(io: file, filename: 'celesteandjesseforever_vid.mp4')

creed = Movie.create!(
    title: "Creed",
    description: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    year: 2015,
    rating: "PG-13",
    runtime: "2h 13min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/creed.jpg')
creed.photo.attach(io: file, filename: 'creed.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/creed_vid.mp4')
creed.video.attach(io: file, filename: 'creed_vid.mp4')

demonslayer = Movie.create!(
    title: "Demon Slayer: Mugen Train",
    description: "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
    year: 2020,
    rating: "R",
    runtime: "1h 57min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/demonslayer.jpg')
demonslayer.photo.attach(io: file, filename: 'demonslayer.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/demonslayer_vid.mp4')
demonslayer.video.attach(io: file, filename: 'demonslayer_vid.mp4')

johnwick = Movie.create!(
    title: "John Wick",
    description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    year: 2014,
    rating: "R",
    runtime: "1h 41min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/johnwick.jpg')
johnwick.photo.attach(io: file, filename: 'johnwick.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/johnwick_vid.mp4')
johnwick.video.attach(io: file, filename: 'johnwick_vid.mp4')

neighbors = Movie.create!(
    title: "Neighbors",
    description: "After they are forced to live next to a fraternity house, a couple with a newborn baby do whatever they can to take them down.",
    year: 2014,
    rating: "R",
    runtime: "1h 37min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/neighbors.jpg')
neighbors.photo.attach(io: file, filename: 'neighbors.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/neighbors_vid.mp4')
neighbors.video.attach(io: file, filename: 'neighbors_vid.mp4')

ninjaassassin = Movie.create!(
    title: "Ninja Assassin",
    description: "A young ninja turns his back on the orphanage that raised him, leading to a confrontation with a fellow ninja from the clan.",
    year: 2009,
    rating: "R",
    runtime: "1h 39min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/ninjaassassin.jpg')
ninjaassassin.photo.attach(io: file, filename: 'ninjaassassin.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/ninjaassassin_vid.mp4')
ninjaassassin.video.attach(io: file, filename: 'ninjaassassin_vid.mp4')

nostringsattached = Movie.create!(
    title: "No Strings Attached",
    description: "A guy and girl try to keep their relationship strictly physical, but it's not long before they learn that they want something more.",
    year: 2011,
    rating: "R",
    runtime: "1h 48min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/nostringsattached.jpg')
nostringsattached.photo.attach(io: file, filename: 'nostringsattached.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/nostringsattached_vid.mp4')
nostringsattached.video.attach(io: file, filename: 'nostringsattached_vid.mp4')

perksofbeingawallflower = Movie.create!(
    title: "The Perks of Being a Wallflower",
    description: "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
    year: 2012,
    rating: "PG-13",
    runtime: "1h 43min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/perksofbeingawallflower.jpg')
perksofbeingawallflower.photo.attach(io: file, filename: 'perksofbeingawallflower.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/perksofbeingawallflower_vid.mp4')
perksofbeingawallflower.video.attach(io: file, filename: 'perksofbeingawallflower_vid.mp4')

sicario = Movie.create!(
    title: "Sicario",
    description: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
    year: 2015,
    rating: "R",
    runtime: "2h 1min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/sicario.jpeg')
sicario.photo.attach(io: file, filename: 'sicario.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/sicario_vid.mp4')
sicario.video.attach(io: file, filename: 'sicario_vid.mp4')

silverliningsplaybook = Movie.create!(
    title: "Silver Linings Playbook",
    description: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
    year: 2012,
    rating: "R",
    runtime: "2h 2min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/silverliningsplaybook.jpg')
silverliningsplaybook.photo.attach(io: file, filename: 'silverliningsplaybook.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/silverliningsplaybook_vid.mp4')
silverliningsplaybook.video.attach(io: file, filename: 'silverliningsplaybook_vid.mp4')

spiderverse = Movie.create!(
    title: "Spider-Man: Into the Spider-Verse",
    description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    year: 2018,
    rating: "PG",
    runtime: "1h 57min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/spiderverse.jpeg')
spiderverse.photo.attach(io: file, filename: 'spiderverse.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/spiderverse_vid.mp4')
spiderverse.video.attach(io: file, filename: 'spiderverse_vid.mp4')

stayhungry = Movie.create!(
    title: "Sebastian Maniscalco: Stay Hungry",
    description: "Sebastian's captivating storytelling keeps the audience engaged as he unpacks spin classes, pregnancy photoshoots, and wedding dances.",
    year: 2019,
    rating: "TV-MA",
    runtime: "1h 5min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/stayhungry.jpg')
stayhungry.photo.attach(io: file, filename: 'stayhungry.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/stayhungry_vid.mp4')
stayhungry.video.attach(io: file, filename: 'stayhungry_vid.mp4')

swat = Movie.create!(
    title: "S.W.A.T.",
    description: "An imprisoned drug kingpin offers a huge cash reward to anyone that can break him out of police custody, and only the L.A.P.D.'s Special Weapons and Tactics team can prevent it.",
    year: 2003,
    rating: "PG-13",
    runtime: "1h 57min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/swat.jpg')
swat.photo.attach(io: file, filename: 'swat.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/swat_vid.mp4')
swat.video.attach(io: file, filename: 'swat_vid.mp4')

themanfromnowhere = Movie.create!(
    title: "The Man From Nowhere",
    description: "A quiet pawnshop keeper with a violent past takes on a drug-and-organ trafficking ring in hope of saving the child who is his only friend.",
    year: 2010,
    rating: "R",
    runtime: "1h 59min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/themanfromnowhere.jpg')
themanfromnowhere.photo.attach(io: file, filename: 'themanfromnowhere.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/themanfromnowhere_vid.mp4')
themanfromnowhere.video.attach(io: file, filename: 'themanfromnowhere_vid.mp4')

weatheringwithyou = Movie.create!(
    title: "Weathering With You",
    description: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    year: 2019,
    rating: "PG-13",
    runtime: "1h 52min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/weatheringwithyou.jpg')
weatheringwithyou.photo.attach(io: file, filename: 'weatheringwithyou.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/weatheringwithyou_vid.mp4')
weatheringwithyou.video.attach(io: file, filename: 'weatheringwithyou_vid.mp4')

whatnow = Movie.create!(
    title: "Kevin Hart: What Now?",
    description: "Comedian Kevin Hart performs in front of a crowd of 53,000 people at Philadelphia's outdoor venue, Lincoln Financial Field.",
    year: 2016,
    rating: "R",
    runtime: "1h 36min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/whatnow.jpg')
whatnow.photo.attach(io: file, filename: 'whatnow.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/whatnow_vid.mp4')
whatnow.video.attach(io: file, filename: 'whatnow_vid.mp4')

whenwefirstmet = Movie.create!(
    title: "When We First Met",
    description: "Noah meets Avery at a Halloween party and falls in love but gets friend-zoned. 3 years later, she's engaged to someone else. Noah returns in a time machine to fix things.",
    year: 2018,
    rating: "TV-14",
    runtime: "1h 37min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/whenwefirstmet.jpg')
whenwefirstmet.photo.attach(io: file, filename: 'whenwefirstmet.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/whenwefirstmet_vid.mp4')
whenwefirstmet.video.attach(io: file, filename: 'whenwefirstmet_vid.mp4')

yourname = Movie.create!(
    title: "Your Name.",
    description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    year: 2016,
    rating: "PG",
    runtime: "1h 46min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/yourname.jpg')
yourname.photo.attach(io: file, filename: 'yourname.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/yourname_vid.mp4')
yourname.video.attach(io: file, filename: 'yourname_vid.mp4')

thebigshort = Movie.create!(
    title: "The Big Short",
    description: "In 2006-2007 a group of investors bet against the US mortgage market. In their research they discover how flawed and corrupt the market is.",
    year: 2015,
    rating: "R",
    runtime: "2h 10min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/thebigshort.jpg')
swat.photo.attach(io: file, filename: 'thebigshort.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/thebigshort_vid.mp4')
swat.video.attach(io: file, filename: 'thebigshort_vid.mp4')

monstersinc = Movie.create!(
    title: "Monsters, Inc.",
    description: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    year: 2001,
    rating: "G",
    runtime: "1h 32min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/monstersinc.jpg')
swat.photo.attach(io: file, filename: 'monstersinc.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/monstersinc_vid.mp4')
swat.video.attach(io: file, filename: 'monstersinc_vid.mp4')

abouttime = Movie.create!(
    title: "About Time",
    description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
    year: 2013,
    rating: "R",
    runtime: "2h 3min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/abouttime.jpg')
swat.photo.attach(io: file, filename: 'abouttime.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/aboutime_vid.mp4')
swat.video.attach(io: file, filename: 'abouttime_vid.mp4')

fordvferrari = Movie.create!(
    title: "Ford v Ferrari",
    description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    year: 2019,
    rating: "PG-13",
    runtime: "2h 32min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/fordvferrari.jpg')
swat.photo.attach(io: file, filename: 'fordvferrari.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/fordvferrari_vid.mp4')
swat.video.attach(io: file, filename: 'fordvferrari_vid.mp4')

moonlight = Movie.create!(
    title: "Moonlight",
    description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    year: 2016,
    rating: "R",
    runtime: "1h 51min"  
)
file = open('https://cineflix-dev.s3.amazonaws.com/moonlight.jpg')
swat.photo.attach(io: file, filename: 'moonlight.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/moonlight_vid.mp4')
swat.video.attach(io: file, filename: 'moonlight_vid.mp4')

#--------------------------------------------------
# Genres
    comedy = Genre.create(genre: "Comedy")
    animation = Genre.create(genre: "Animation")
    drama = Genre.create(genre: "Drama")
    romance = Genre.create(genre: "Romance")
    action = Genre.create(genre: "Action")

#--------------------------------------------------
# Movie_Genres
    MovieGenre.create(movie_id: parasite.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: lost_in_translation.id, genre_id: romance.id)
    MovieGenre.create(movie_id: the_lords_of_dogtown.id, genre_id: drama.id)
    MovieGenre.create(movie_id: parasite.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_outlaws.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_outlaws.id, genre_id: action.id)
    MovieGenre.create(movie_id: summer_wars.id, genre_id: animation.id)
    MovieGenre.create(movie_id: jerry_maguire.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: sixunderground.id, genre_id: action.id)
    MovieGenre.create(movie_id: jumpstreet.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: bigherosix.id, genre_id: animation.id)
    MovieGenre.create(movie_id: burning.id, genre_id: drama.id)
    MovieGenre.create(movie_id: celesteandjesseforever.id, genre_id: romance.id)
    MovieGenre.create(movie_id: celesteandjesseforever.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: creed.id, genre_id: drama.id)
    MovieGenre.create(movie_id: creed.id, genre_id: action.id)
    MovieGenre.create(movie_id: demonslayer.id, genre_id: animation.id)
    MovieGenre.create(movie_id: johnwick.id, genre_id: action.id)
    MovieGenre.create(movie_id: neighbors.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: ninjaassassin.id, genre_id: action.id)
    MovieGenre.create(movie_id: nostringsattached.id, genre_id: romance.id)
    MovieGenre.create(movie_id: nostringsattached.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: perksofbeingawallflower.id, genre_id: drama.id)
    MovieGenre.create(movie_id: sicario.id, genre_id: action.id)
    MovieGenre.create(movie_id: sicario.id, genre_id: drama.id)
    MovieGenre.create(movie_id: silverliningsplaybook.id, genre_id: romance.id)
    MovieGenre.create(movie_id: silverliningsplaybook.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: spiderverse.id, genre_id: animation.id)
    MovieGenre.create(movie_id: spiderverse.id, genre_id: action.id)
    MovieGenre.create(movie_id: stayhungry.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: swat.id, genre_id: action.id)
    MovieGenre.create(movie_id: themanfromnowhere.id, genre_id: action.id)
    MovieGenre.create(movie_id: weatheringwithyou.id, genre_id: animation.id)
    MovieGenre.create(movie_id: whatnow.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: whenwefirstmet.id, genre_id: romance.id)
    MovieGenre.create(movie_id: whenwefirstmet.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: yourname.id, genre_id: animation.id)
    MovieGenre.create(movie_id: yourname.id, genre_id: romance.id)
    MovieGenre.create(movie_id: thebigshort.id, genre_id: comedy.id)
    MovieGenre.create(movie_id: thebigshort.id, genre_id: drama.id)
    MovieGenre.create(movie_id: monstersinc.id, genre_id: animation.id)
    MovieGenre.create(movie_id: abouttime.id, genre_id: romance.id)
    MovieGenre.create(movie_id: fordvferrari.id, genre_id: drama.id)
    MovieGenre.create(movie_id: moonlight.id, genre_id: drama.id)

#--------------------------------------------------
# My_Lists
    list1 = MyList.create(user_id: 1, movie_id: 2)
    list2 = MyList.create(user_id: 1, movie_id: 3)
    list3 = MyList.create(user_id: 1, movie_id: 7)