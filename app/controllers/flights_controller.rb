class FlightsController < ApplicationController

  def index
    @flights = Flight.all
    respond_to do |format|!
      format.html {}
      format.json { render :json => @flights }
    end
  end

  def new
    @flight = Flight.new
  end

  def create
    @flight = Flight.create(:name => params[:name], :origin_date => params[:origin_date], :destination_date => params[:destination_date], :origin => params[:origin], :destination => params[:destination], :airplane_id => params[:airplane_id])
    render :json => @flight
  end

  def update
    @airplane = Airplane.find params[:id]
    @airplane.update(:name => params[:name], :rows => params[:rows], :columns => params[:columns])
    render :json => @airplane
  end

end
