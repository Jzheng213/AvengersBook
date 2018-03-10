class Api::PostsController < ApplicationController
  def index
    @post.all
    render :index
  end

  def show
    @post.find(params[:id])
    render :show
  end

  def create
    @post.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post.find(params[:id])
    if @post.save
      render 'api/post/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
  end

end
