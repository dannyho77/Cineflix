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
# User
demouser= User.create!(email: "baejoohyun@gmail.com", password: "redvelvet")

#--------------------------------------------------
# Movies
parasite = Movie.create!(
    title: "Parasite",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    year: 1991 
)
file = open('https://cineflix-dev.s3.amazonaws.com/parasite.jpg')
parasite.photo.attach(io: file, filename: 'parasite.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/parasite_vid.mp4')
parasite.video.attach(io: file, filename: 'parasite_vid.mp4')


the_lords_of_dogtown = Movie.create!(
    title: "The Lords of Dogtown",
    description: "The film follows the surf and skateboarding trends that originated in Venice, California during the 1970's.",
    year: 2005
)
file = open('https://cineflix-dev.s3.amazonaws.com/thelordsofdogtown.jpg')
the_lords_of_dogtown.photo.attach(io: file, filename: 'thelordsofdogtown.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/thelordsofdogtown_vid.mp4')
the_lords_of_dogtown.video.attach(io: file, filename: 'thelordsofdogtown_vid.mp4')


lost_in_translation = Movie.create!(
    title: "Lost in Translation",
    description: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    year: 2003
)
file = open('https://cineflix-dev.s3.amazonaws.com/lostintranslation.jpg')
lost_in_translation.photo.attach(io: file, filename: 'lostintranslation.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/lostintranslation_vid.mp4')
lost_in_translation.video.attach(io: file, filename: 'lostintranslation_vid.mp4')


the_outlaws = Movie.create!(
    title: "The Outlaws",
    description: "Based on real events, this crime action film depicts a Seoul detective's attempts to keep peace while two Chinese-Korean gangs battle over turf in the neighborhood.",
    year: 2017 
)
file = open('https://cineflix-dev.s3.amazonaws.com/theoutlaws.jpg')
the_outlaws.photo.attach(io: file, filename: 'theoutlaws.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/theoutlaws_vid.mp4')
the_outlaws.video.attach(io: file, filename: 'theoutlaws_vid.mp4')


jerry_maguire = Movie.create!(
    title: "Jerry Maguire",
    description: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former colleague.",
    year: 1996 
)
file = open('https://cineflix-dev.s3.amazonaws.com/jerrymaguire.jpg')
jerry_maguire.photo.attach(io: file, filename: 'jerrymaguire.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/jerrymaguire_vid.mp4')
jerry_maguire.video.attach(io: file, filename: 'jerrymaguire_vid.mp4')


summer_wars = Movie.create!(
    title: "Summer Wars",
    description: "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
    year: 2009
)
file = open('https://cineflix-dev.s3.amazonaws.com/summerwars.jpeg')
summer_wars.photo.attach(io: file, filename: 'summerwars.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/summerwars_vid.mp4')
summer_wars.video.attach(io: file, filename: 'summerwars_vid.mp4')

6underground = Movie.create!(
    title: "6 Underground",
    description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
    year: 2019 
)
file = open('https://cineflix-dev.s3.amazonaws.com/6underground.jpg')
6underground.photo.attach(io: file, filename: '6underground.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/6underground_vid.mp4')
6underground.video.attach(io: file, filename: '6underground_vid.mp4')

21jumpstreet = Movie.create!(
    title: "21 Jumpstreet",
    description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
    year: 2012 
)
file = open('https://cineflix-dev.s3.amazonaws.com/21jumpstreet.jpeg')
21jumpstreet.photo.attach(io: file, filename: '21jumpstreet.jpeg')
file = open('https://cineflix-dev.s3.amazonaws.com/21jumpstreet_vid.mp4')
21jumpstreet.video.attach(io: file, filename: '21jumpstreet_vid.mp4')

bighero6 = Movie.create!(
    title: "Big Hero 6",
    description: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
    year: 2014 
)
file = open('https://cineflix-dev.s3.amazonaws.com/bighero6.jpg')
bighero6.photo.attach(io: file, filename: 'bighero6.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/bighero6_vid.mp4')
bighero6.video.attach(io: file, filename: 'bighero6_vid.mp4')

burning = Movie.create!(
    title: "Burning",
    description: "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby.",
    year: 2018 
)
file = open('https://cineflix-dev.s3.amazonaws.com/burning.jpg')
burning.photo.attach(io: file, filename: 'burning.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/burning_vid.mp4')
burning.video.attach(io: file, filename: 'burning_vid.mp4')

celesteandjesseforever = Movie.create!(
    title: "Celeste & Jesse Forever",
    description: "A divorcing couple tries to maintain their friendship while they both pursue other people.",
    year: 2012 
)
file = open('https://cineflix-dev.s3.amazonaws.com/celesteandjesseforever.jpg')
celesteandjesseforever.photo.attach(io: file, filename: 'celesteandjesseforever.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/celesteandjesseforever_vid.mp4')
celesteandjesseforever.video.attach(io: file, filename: 'celesteandjesseforever_vid.mp4')

creed = Movie.create!(
    title: "Creed",
    description: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    year: 2015 
)
file = open('https://cineflix-dev.s3.amazonaws.com/creed.jpg')
creed.photo.attach(io: file, filename: 'creed.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/creed_vid.mp4')
creed.video.attach(io: file, filename: 'creed_vid.mp4')

demonslayer = Movie.create!(
    title: "Demon Slayer: Mugen Train",
    description: "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
    year: 2020 
)
file = open('https://cineflix-dev.s3.amazonaws.com/demonslayer.jpg')
demonslayer.photo.attach(io: file, filename: 'demonslayer.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/demonslayer_vid.mp4')
demonslayer.video.attach(io: file, filename: 'demonslayer_vid.mp4')

johnwick = Movie.create!(
    title: "John Wick",
    description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    year: 2014 
)
file = open('https://cineflix-dev.s3.amazonaws.com/johnwick.jpg')
johnwick.photo.attach(io: file, filename: 'johnwick.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/johnwick_vid.mp4')
johnwick.video.attach(io: file, filename: 'johnwick_vid.mp4')

neighbors = Movie.create!(
    title: "Neighbors",
    description: "After they are forced to live next to a fraternity house, a couple with a newborn baby do whatever they can to take them down.",
    year: 2014 
)
file = open('https://cineflix-dev.s3.amazonaws.com/neighbors.jpg')
neighbors.photo.attach(io: file, filename: 'neighbors.jpg')
file = open('https://cineflix-dev.s3.amazonaws.com/neighbors_vid.mp4')
neighbors.video.attach(io: file, filename: 'neighbors_vid.mp4')

#--------------------------------------------------
# Genres
    comedy = Genre.create({ genre: "Comedy"})
    animation = Genre.create({ genre: "Animation"})
    drama = Genre.create({ genre: "Drama"})
    romance = Genre.create({ genre: "Romance"})
    action = Genre.create({ genre: "Action"})

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

#--------------------------------------------------
# My_Lists
    list1 = MyList.create(user_id: 1, movie_id: 2)
    list2 = MyList.create(user_id: 1, movie_id: 3)
    list3 = MyList.create(user_id: 1, movie_id: 4)