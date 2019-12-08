#require 'pry'
class EventsController < ApplicationController

def list
  @events = Event.all
  render json:  @events
end

def create
  @event = Event.new(event_params)
   if @event.save
   render json: @event
 else
   render json: {status: "error", code: 400, message: "Event cannot be saved at this moment."}
end
end


def destroy
@event ||=  Event.find(params[:id])
@event.destroy
render json: params[:id]
end

private

def event_params
params.require(:event).permit(:name, :address, :date_time, :price, :image, :phone_number)
end

end
