# [:currentUser, :user].each do |user|
#   json.set! user do
#     json.partial! 'api/users/user', user: @current_user
#     json.partial! 'api/users/user', user: @user
#   end
# end

json.currentUser do
  json.partial! 'api/users/user', user: @current_user
end

json.users do
  json.set! @current_user.id do
    json.partial! 'api/users/user', user: @current_user
  end
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.friendRequests do
  @friend_requests.each do |friend_request|
    json.set! friend_request.id do
      json.partial! 'api/friend_requests/friend_request',
                    friend_request: friend_request
    end
  end
end
