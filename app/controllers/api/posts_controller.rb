class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(wall_owner_id: params[:wall_owner_id]).includes(:comments, :author, :wall_owner)
    @postIds = @posts.map(&:author_id).uniq
    @users = User.where(id: @postIds)
    render :index
  end

  def friends_posts
    user = User.find(params[:current_user_id])
    newsfeed_post_author_ids = user.get_friends.pluck(:id)
    newsfeed_post_author_ids << params[:current_user_id]

    @posts = Post.where(author_id: newsfeed_post_author_ids)
    render :index
  end

  def show

    @post = Post.find(params[:id])
    render :show
  end

  def create

    @post = Post.new(post_params)
    @post.author = current_user

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = current_user.posts.find(params[:post][:id])
    @post.author = current_user
    if @post.update(post_params)
      @post.remove_content if post_params[:content] = ''
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    if Post.destroy(@post.id)
      render json: @post.id
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :content, :wall_owner_id, :current_user_id)
  end
end
