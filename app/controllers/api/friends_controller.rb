
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

  def show

  end

  def create
    @friend_request = Friend.new(
      requestor_id: params[:requestor_id],
      receiver_id: params[:receiver_id],
      pending: true
    )
    if @friend_request.save
      @user = User.find(params[:receiver_id])
      render 'api/users/show'
    else
      render json: @friends_request.errors.full_messages, status: 422
    end
  end

  def update
    @friend_request = Friend.find_by(
      requestor_id: params[:requestor_id],
      receiver_id: params[:receiver_id],
      pending: true
    )
    if @friend_request.update(
      requestor_id: params[:requestor_id],
      receiver_id: params[:receiver_id],
      pending: false)
      @user = User.find(params[:requestor_id])
      @current_user = User.find(params[:receiver_id])

      receiver_ids = Friend.where(receiver_id: params[:id], pending: true).pluck(:requestor_id)
      @friend_requests = User.where(id: receiver_ids)

      render 'api/friends/friend_pair'
    else
      render :json ['invalid approval']
    end
  end

  def cancel
    @friend = Friend.find_by(
      requestor_id: params[:requestor_id],
      receiver_id: params[:receiver_id]
    )

    unless @friend
      @friend = Friend.find_by(
        receiver_id: params[:requestor_id],
        requestor_id: params[:receiver_id]
      )
    end

    if @friend.destroy
      if params[:request] == "true"
        @current_user = User.find(params[:requestor_id])
        @user = User.find(params[:receiver_id])
        @receiver_ids = Friend.where(receiver_id: params[:requestor_id], pending: true).pluck(:requestor_id)
      else
        @user = User.find(params[:requestor_id])
        @current_user = User.find(params[:receiver_id])
        @receiver_ids = Friend.where(receiver_id: params[:receiver_id], pending: true).pluck(:requestor_id)

      end

      @friend_requests = User.where(id: @receiver_ids)

      render 'api/friends/friend_pair'
    else
      render :json ['currently not pending']
    end
  end

  def destroy
    @friend = Friend.find_by(
      requestor_id: params[:requestor_id],
      receiver_id: params[:receiver_id]
    )
    if @friend
      @user.find(params[:receiver_id])
      render 'api/users/show'
    else
      render :json ['currently not friends']
    end
  end
end
