class Api::FriendRequestsController < ApplicationController
  def index
    @friend_requests = Friend.where(receiver_id: params[:id], pending: true)
    if @friend_requests
      render 'api/friend_requests/index'
    else
      render json: []
    end
  end
end
