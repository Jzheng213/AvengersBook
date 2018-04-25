json.set! 'comments' do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :author_id, :body, :post_id, :reply_ids, :parent_comment_id
    end
  end
end

json.set! 'users' do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
