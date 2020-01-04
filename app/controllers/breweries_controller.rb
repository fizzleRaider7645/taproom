class BreweriesController < ApplicationController
    def index
        @breweries = Brewery.all
        render json: @breweries
    end
    
    def create
        @brewery = Brewery.find_by(openbrewerydb_id: params[:brewery][:id])
        
        if @brewery
            render json: @brewery
        else
            @brewery = Brewery.create(brewery_params)
            @brewery.openbrewerydb_id = params[:brewery][:id]
            @brewery.save
            render json: @brewery
        end

    end


    private

    def brewery_params
        params.require(:brewery).permit(:name, :brewery_type, :street, :city, :state, :postal_code, :country, :longitude, :latitude, :phone, :website_url)
    end
end
