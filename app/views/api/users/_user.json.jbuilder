json.extract! user, :id, :email, :first_name
json.full_name user.first_name + ' ' + user.last_name
json.profile_pic_url asset_path(user.profile_pic.url)
json.cover_pic_url asset_path(user.cover_pic.url)
json.friend_ids user.get_friends.map{ |friend| friend.id }
