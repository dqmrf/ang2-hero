Rails.application.routes.draw do
  scope 'api' do
    resources :persons
  end
end
