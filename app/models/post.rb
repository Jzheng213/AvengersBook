class Post < ApplicationRecord
  validates :author_id, :body, presence: true;
  has_attached_file :content, styles: { medium: "300x300>", thumb: "100x100>" },
                    default_url: ""
  validates_attachment_content_type :content, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :wall_owner,
    class_name: :User,
    foreign_key: :wall_owner_id,
    optional: true
    
end
