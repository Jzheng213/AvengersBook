class Api::FriendRequestsController < ApplicationController
  def index
    receiver_ids = Friend.where(receiver_id: params[:id], pending: true).pluck(:requestor_id)
    @friend_requests = User.where(id: receiver_ids)
    if @friend_requests
      render 'api/friend_requests/index'
    else
      render json: {}
    end
  end
end
