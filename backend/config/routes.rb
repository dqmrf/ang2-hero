Rails.application.routes.draw do
  scope 'api' do
    resources :users, only: :create
    resources :sessions, only: :create
    resources :persons
  end
end
