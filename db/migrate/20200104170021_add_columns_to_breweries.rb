class AddColumnsToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :brewery_type, :string
    add_column :breweries, :street, :string
    add_column :breweries, :city, :string
    add_column :breweries, :state, :string
    add_column :breweries, :postal_code, :string
    add_column :breweries, :country, :string
    add_column :breweries, :longitude, :string
    add_column :breweries, :latitude, :string
    add_column :breweries, :phone, :string
    add_column :breweries, :website_url, :string
  end
end
