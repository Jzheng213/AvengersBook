class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    debugger;
    @post.new(post_params)
    @post.author = current_user

    if @post.save
      render :show
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

  private
  def post_params
    params.require(:post).permit(:body, :content, :wall_owner_id)
  end
end
