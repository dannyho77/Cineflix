class Api::GenresController < ApplicationController

    def index
        @genres = Genre.all
        render :index
    end

    def show
        @genre = Genre.find_by(id: params[:id])
        render :show
    end

end