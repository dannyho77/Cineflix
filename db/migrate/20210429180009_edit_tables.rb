class EditTables < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :rating, :string
    add_column :movies, :runtime, :string
    add_index :movies, :title
  end
end
