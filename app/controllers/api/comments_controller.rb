class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(id:params[:ids])
    render :index
  end
  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    if @comment.save
      :show
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
