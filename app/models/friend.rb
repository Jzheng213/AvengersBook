class Friend < ApplicationRecord
  validates :requestor_id, :receiver_id, presence: true
  validates :requestor_id, uniqueness: { scope: :receiver_id}

  belongs_to :requestor,
    class_name: :User,
    foreign_key: :requestor_id

  belongs_to :receiver,
    class_name: :User,
    foreign_key: :receiver_id

end
