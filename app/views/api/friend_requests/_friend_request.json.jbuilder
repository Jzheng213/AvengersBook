json.extract! friend_request, :id
json.full_name friend_request.first_name + ' ' + friend_request.last_name
json.profile_pic_url asset_path(friend_request.profile_pic.url)
