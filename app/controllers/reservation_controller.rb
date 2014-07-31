class ReservationController < ApplicationController

  def index
    @reservations = Reservation.all
    response_to do |format|
      format.html {}
      format.json { render :json => @reservations }
    end
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.create(:row => params[:row], :column => params[:column], :flight_id => params[:flight_id], :user_id => params[:user_id] )
    render :json => @reservation
  end

end
