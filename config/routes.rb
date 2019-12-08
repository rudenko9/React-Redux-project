Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   #root 'events#test'

   scope '/api' do
    # post '/users' => 'users#create'
    # post '/login' => 'sessions#create'
     #get '/quotes' => 'quotes#index'
    # get '/quotes/my' => 'quotes#my'
     #get '/quotes/random' => 'quotes#random'
     #post '/quotes' => 'quotes#create'
    # post '/quotes/add' => 'quotes#add'
    # delete '/quotes/remove' => 'quotes#remove'
     get '/events/list' => 'events#list'
     post '/events/create' => 'events#create'
     get '/events/destroy' => 'events#destroy'

     #get '/events/test' => 'events#test'
     #get '/authors' => 'authors#index'
   end

end
