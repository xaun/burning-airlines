class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :name
      t.date :origin_date
      t.date :destination_date
      t.text :origin
      t.text :destination
      t.integer :airplane_id
      t.timestamps
    end
  end
end
