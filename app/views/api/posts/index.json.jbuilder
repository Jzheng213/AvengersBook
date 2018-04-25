
json.set! 'posts' do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
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

json.set! 'comments' do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        author = comment.author
        json.extract! comment, :id, :author_id, :body, :post_id, :reply_ids, :updated_at
        json.author_profile_pic_url asset_path(author.profile_pic.url)
        json.author_name "#{author.first_name} #{author.last_name}"
      end
    end
  end
end
