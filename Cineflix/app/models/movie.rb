class Movie < ApplicationRecord
    validates :title, :description, :year, presence: true

    has_one_attached :photo
    has_one_attached :video

    has_many :movie_genres,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: MovieGenre

    has_many :my_lists,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: MyList

    has_many :genres,
    through: :movie_genres,
    source: :genre

    has_many :users,
    through: :my_lists,
    source: :user
end
