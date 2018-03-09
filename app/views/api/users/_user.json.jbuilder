json.extract! user, :id, :email, :first_name
json.full_name user.first_name + ' ' + user.last_name
json.profile_pic_url asset_path(user.profile_pic.url)
