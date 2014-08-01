class ReservationController < ApplicationController

  def index
    @reservations = Reservation.all
    respond_to do |format|
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

  def update

    @user = User.find params[:id]
    @user.update(:name => params[:name])
    render :json => @user

    @flight = Flight.find params[:id]
    @flight.update(:name => params[:name], :origin_date => params[:origin_date], :destination_date => params[:destination_date], :origin => params[:origin], :destination => params[:destination], :airplane_id => params[:airplane_id])
    render :json => @flight
  end

end
