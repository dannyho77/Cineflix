class Api::GenresController < ApplicationController

    def show
        @genre = Genre.find_by(id: params[:id])
        render :show
    end

end