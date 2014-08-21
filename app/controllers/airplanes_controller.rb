touch class AirplanesController < ApplicationController

  def index
    @airplanes = Airplane.all
    respond_to do |format|
      format.html {}
      format.json { render :json => @airplanes }
    end
  end

  def new
    @airplane = Airplane.new
  end

  def create
    @airplane = Airplane.create(:name => params[:name], :rows => params[:rows], :columns => params[:columns])
    render :json => @airplane
  end

  def update
    @airplane = Airplane.find params[:id]
    @airplane.update(:name => params[:name], :rows => params[:rows], :columns => params[:columns])
    render :json => @airplane
  end

end
