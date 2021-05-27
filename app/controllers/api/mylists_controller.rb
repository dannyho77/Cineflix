class Api::MylistsController < ApplicationController

    def show
        @mylist = MyList.find_by(id: params[:id])
        render :show
    end

    def index
        @mylists = MyList.all
        render :index
    end

    def create
        @mylist = MyList.new(user_id: current_user.id, movie_id: params[:movieId])
        if @mylist.save
            render json: {movie_id: @mylist[:movie_id]}
        else
            render json: {message: "Failed to add title to List"}, status: 422
        end
    end

    def destroy
        @mylist = current_user.my_lists.find_by(movie_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else
            render json: {message: "This title does not exist in your List"}, status: 422
        end
    end

end