class ChangeSavedMoviesToMyLists < ActiveRecord::Migration[5.2]
  def change
    rename_table :saved_movies, :my_lists
  end
end
