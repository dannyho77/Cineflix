class Api::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        # debugger
        render :index
    end

    def show
        @movie = Movie.find_by(id: params[:id])
        render :show
    end

end
