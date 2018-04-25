class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(id:params[:ids])
    @commentIds = @comments.map(&:author_id).uniq
    @users = User.where(id: @commentIds)
    render :index
  end
  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(body: params[:body], post_id: params[:post_id])
    @comment.author = current_user
    @post = Post.find(params[:post_id])
    if @comment.save
      render :show
    else
      render json: @comments.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :post_id, :parent_comment_id)
  end
end
