class Api::UsersController < ApplicationController
  def index
    @user = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def destroy

  end

  def update
    @user = current_user
    if user_params[:cover_pic]
      @user.cover_pic = user_params[:cover_pic]
    elsif user_params[:profile_pic]
      @user.profile_pic = user_params[:profile_pic]
    end

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :birthday,
      :gender,
      :password,
      :cover_pic,
      :profile_pic
    )
  end
end
