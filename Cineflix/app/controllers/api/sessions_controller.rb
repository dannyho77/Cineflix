class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render "/api/users/user"
        else
            flash.now[:errors] = { base: ['Invalid username or password'] }
        end
    end

    def destroy
        logout
        render "api/session/new"
    end
end
