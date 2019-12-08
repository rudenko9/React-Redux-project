class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :date_time, :price, :image, :phone_number

end
