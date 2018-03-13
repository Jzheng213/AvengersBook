class Post < ApplicationRecord
  validates :requestor_id, :receiver_id, :pending, presence: true
  validates :requestor_id, uniqueness: { scope: :receiver_id}

  belongs_to :requestor,
    class_name: :User,
    foreign_key: :requestor_id

  belongs_to :receiver,
    class_name: :User,
    foreign_key: :receiver_id

end
