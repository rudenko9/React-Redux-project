class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :address
      t.datetime :date_time
      t.integer :price
      t.string :image
      t.integer :phone_number

      t.timestamps
    end
  end
end
