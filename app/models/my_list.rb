class MyList < ApplicationRecord
    validates :user_id, :movie_id, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :movie,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie
end
