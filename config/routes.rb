Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :friends, only: [:index, :create, :update, :destroy]
    delete '/friend_request/', to: 'friends#cancel'
    resources :friend_requests, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show, :create, :update, :destroy]
  end
end
