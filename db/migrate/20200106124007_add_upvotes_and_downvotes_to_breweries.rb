class AddUpvotesAndDownvotesToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :ranking, :integer, :default => 0
  end
end
