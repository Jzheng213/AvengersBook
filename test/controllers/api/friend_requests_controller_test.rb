require 'test_helper'

class Api::FriendRequestsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_friend_requests_index_url
    assert_response :success
  end

end
