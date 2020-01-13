class Event < ApplicationRecord
  validates :name,  presence: true
  validates :address,  presence: true
  #validates :date_time,  presence: true
  validates :price,  presence: true
  validates :image,  presence: true
  validates :phone_number,  presence: true

end
