Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :my_lists, only: [:index, :create, :destroy, :show]
    resources :genres, only: [:show]
  end
end
