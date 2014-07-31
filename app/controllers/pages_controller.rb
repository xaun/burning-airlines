class PagesController < ApplicationController
  def index
    @airplanes = Airplane.all
  end
end
