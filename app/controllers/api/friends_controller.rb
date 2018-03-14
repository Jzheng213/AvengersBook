
class Api::FriendsController < ApplicationController
  def index
    @friends = []
    id = params[:user][:id]
    if id
      @user = User.find(params[:user][:id])
      @friends = @user.get_friends
      render :index
    else
      render :index
    end
  end

  def create
    debugger
  end

  def update

  end

  def destroy
  end
end
