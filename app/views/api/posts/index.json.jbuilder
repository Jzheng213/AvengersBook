
json.set! 'posts' do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end
end

json.set! 'comments' do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :author_id, :body, :post_id, :reply_ids
      end
    end
  end
end
