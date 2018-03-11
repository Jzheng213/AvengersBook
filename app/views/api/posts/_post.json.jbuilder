json.extract! post, :id, :body, :author_id, :updated_at, :wall_owner_id
author = post.author
json.author_name "#{author.first_name} #{author.last_name}"
json.author_profile_pic_url asset_path(author.profile_pic.url)
json.author_cover_pic_url asset_path(author.cover_pic.url)
json.content_url asset_path(post.content.url)
