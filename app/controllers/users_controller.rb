class UsersController < ApplicationController

  def index
    @users = User.all
    response_to do |format|
      format.html {}
      format.json { render :json => @users }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(:name => params[:name])
    render :json => @user
  end

  def update
    @user = User.find params[:id]
    @user.update(:name => params[:name])
    render :json => @user
  end

end
