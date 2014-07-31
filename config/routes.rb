Rails.application.routes.draw do

  resources :users, :airplanes, :flights, :reservations
  root :to => 'pages#index'

end
