Rails.application.routes.draw do
  resources :welcome, only: [:index]
  resources :users
  resources :blog_posts, only: [:index, :create, :destroy]
  root 'welcome#index'
end
