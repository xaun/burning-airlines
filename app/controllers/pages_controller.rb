class PagesController < ApplicationController
  def index
    @airplanes = Airplane.all
    @flights = Flight.all
    @users = User.all

    @flight = Flight.all[0] # Just to play around with the reservations grid
  end
end
