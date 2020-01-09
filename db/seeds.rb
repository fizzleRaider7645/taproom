# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

grist =  {
    "openbrewerydb_id": 6132,
    "name": "Grist House Craft Brewery",
    "brewery_type": "micro",
    "street": "10 Sherman St",
    "city": "Pittsburgh",
    "state": "Pennsylvania",
    "postal_code": "15209-2728",
    "country": "United States",
    "longitude": nil,
    "latitude": nil,
    "phone": "4124471442",
    "website_url": "http://www.gristhouse.com",
}


harpoon = {
    "id": 3287,
    "name": "Harpoon Brewery",
    "brewery_type": "regional",
    "street": "306 Northern Ave Ste 2",
    "city": "Boston",
    "state": "Massachusetts",
    "postal_code": "02210-2367",
    "country": "United States",
    "longitude": "-71.0348293",
    "latitude": "42.3465637",
    "phone": "6175749551",
    "website_url": "http://www.harpoonbrewery.com",
}

@grist_house = Brewery.create(grist)
@harpoon = Brewery.create(harpoon)