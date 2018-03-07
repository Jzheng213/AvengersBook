class Api::UsersController < ApplicationController
  def index
    @user = User.all
  end

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show

  end

  def destroy

  end

  def update
  end

  private

  def user_params
    debugger;
    params.require(:user).permit(:first_name, :last_name, :email, :birthday, :gender, :password)
  end
end
