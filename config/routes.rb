Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :mylists, only: [:index, :create, :destroy, :show]
    resources :genres, only: [:index, :show] do 
      resources :movies, only: [:index]
    end
  end
end
