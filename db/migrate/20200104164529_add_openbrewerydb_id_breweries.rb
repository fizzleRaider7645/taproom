class AddOpenbrewerydbIdBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :openbrewerydb_id, :integer
  end
end
