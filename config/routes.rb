Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   #root 'events#test'

   scope '/api' do

     get '/events/list' => 'events#list'
     post '/events/create' => 'events#create'
     post '/events/destroy' => 'events#destroy'

   end

end
