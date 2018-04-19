
json.set! 'comment' do
  author = @comment.author
  json.extract! @comment, :id, :author_id, :body, :post_id, :reply_ids, :updated_at
  json.author_profile_pic_url asset_path(author.profile_pic.url)
  json.author_name "#{author.first_name} #{author.last_name}"
end

json.set! 'post' do
  json.partial! '/api/posts/post', post: @post
end
