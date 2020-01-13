class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :date , :price, :image, :phone_number

end
