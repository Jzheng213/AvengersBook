class Friend < ApplicationRecord
  validates :requestor_id, :receiver_id, presence: true
  validate :validate_not_already_friends, on: :create
  validate :validate_friend_not_self

  belongs_to :requestor,
    class_name: :User,
    foreign_key: :requestor_id

  belongs_to :receiver,
    class_name: :User,
    foreign_key: :receiver_id

  def all_friend_status
    Friend.where(receiver_id: receiver_id, requestor_id: requestor_id)
      .or(Friend.where(receiver_id: requestor_id, requestor_id: receiver_id))
  end

  def validate_not_already_friends
    if all_friend_status.length > 0
      errors[:requestor_id] << 'the current pair are friends'
    end
  end

  def validate_friend_not_self
    if requestor_id == receiver_id
      errors[:requestor_id] << 'You can not be your own friend'
    end
  end
end
