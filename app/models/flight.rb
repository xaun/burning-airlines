# == Schema Information
#
# Table name: flights
#
#  id               :integer          not null, primary key
#  name             :text
#  origin_date      :datetime
#  destination_date :datetime
#  origin           :text
#  destination      :text
#  airplane_id      :integer
#  created_at       :datetime
#  updated_at       :datetime
#

class Flight < ActiveRecord::Base

  belongs_to :airplane
  has_many :reservations

end
